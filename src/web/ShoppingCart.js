import React, { Component } from 'react';
import Button from "react-bootstrap/es/Button";
import Table from "react-bootstrap/es/Table";

class ShoppingCart extends Component {

    constructor(props) {
        super(props);
    }
    checkout=()=>{
        const res = [];
        this.props.list.map(item =>{
            if (item.amount > 1){
                res.push(`${item.code}-${item.amount}`)
            } else{
                res.push(item.code);
            }
        });
        console.log(res);
    };

    render() {
        const list = this.props.list;
        return (
            <div>
            <Table striped bordered condensed hover>
                <tbody>
                {
                    list.map(item =>(

                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}元/{item.unit}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.amount}</td>
                                </tr>

                        )
                    )
                }
                </tbody>
            </Table>
                <Button onClick={this.checkout}>checkout</Button>
            </div>
        );
    }
}

export default ShoppingCart;
