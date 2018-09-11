import React, { Component } from 'react';
import Button from "react-bootstrap/es/Button";
import Table from "react-bootstrap/es/Table";

class ItemList extends Component {

    constructor(props) {
        super(props);
    }

    getItemByCode = code => {
        return this.props.list.find(item => item.code === code);
    };

    addItemToShoppingCart = e =>{
        const code = e.currentTarget.getAttribute("id");
        const amount = parseInt(e.currentTarget.parentElement.firstChild.value);
        if (amount > 0){
            this.props.addToCart({
                    ...this.getItemByCode(code),
                    amount:amount,
            });
        }
        e.currentTarget.parentElement.firstChild.value = 0;
    };

    render() {
        const list = this.props.list;
        return (
            <Table striped bordered condensed hover>
                <tbody>
            {
                list.map(item =>(

                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}元/{item.unit}</td>
                            <td>{item.discount}</td>
                            <td><div>
                                <input
                                    type="number"
                                    min="0"
                                    defaultValue="0"
                                />
                                <Button id={item.code} onClick={this.addItemToShoppingCart}>Add</Button>
                            </div></td>
                        </tr>

                    )
                )
            }
                </tbody>
            </Table>
        );
    }
}

export default ItemList;
