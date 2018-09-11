import React, { Component } from 'react';

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
            <div>
            {
                list.map(item =>(
                    <div>
                        <tr>
                            <td>{item.name}</td>
                            <td>{item.price}元/{item.unit}</td>
                            <td>{item.discount}</td>
                            <div>
                                <input
                                    type="number"
                                    min="0"
                                    defaultValue="0"
                                />
                                <button id={item.code} onClick={this.addItemToShoppingCart}>Add</button>
                            </div>


                        </tr>
                    </div>
                    )
                )
            }
            </div>
        );
    }
}

export default ItemList;
