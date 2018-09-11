import React, { Component } from 'react';

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
                {
                    list.map(item =>(
                            <div>
                                <tr>
                                    <td>{item.name}</td>
                                    <td>{item.price}元/{item.unit}</td>
                                    <td>{item.discount}</td>
                                    <td>{item.amount}</td>
                                </tr>
                            </div>
                        )
                    )
                }
                <button onClick={this.checkout}>checkout</button>
            </div>
        );
    }
}

export default ShoppingCart;
