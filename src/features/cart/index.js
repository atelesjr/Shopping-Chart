import React from 'react';
import { connect } from 'react-redux';

function sort(items) {
    return items.sort((a,b) => a.id < b.id );
}

function Cart(props) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Item</th>
                    <th>Quantity</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    sort(props.cart).map(item => (
                        <tr>
                            <td>{ item.name }</td>
                            <td>{ item.quantity}</td>
                            <td>
                                <button onClick={ () => props.addToCart(item) }>+</button>
                            </td>
                            <td>
                                <button onClick={ () => props.removeFromCart(item) }>-</button>
                            </td>
                            <td>
                                <button onClick={ () => props.removeAllFromCart(item) }>Remove all from cart</button>
                            </td>
                        </tr>
                    )

                    )
                }
            </tbody>
        </table>
    );
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
};

function mapDispacthToProps(dispatch) {
    return {
        addToCart: (item) => {
            dispatch({ type: 'ADD', payload: item })
        },
        removeFromCart: (item) => {
           dispatch({type: 'REMOVE', payload: item}) 
        },
        removeAllFromCart: (item) => {
            dispatch({type: 'REMOVE_ALL', payload: item}) 
         }
    }
}

export default connect(mapStateToProps, mapDispacthToProps)(Cart);


/*
export const cartItemsWithQuantities = (cartItems) => {
    return cartItems.reduce((acc, item) => {
        const filteredItem = acc.filter(item2 => item2.id === item.id)[0]
        filteredItem !== undefined ? filteredItem.quantity++ : acc.push({ ...item, quantity:1 })
        
        return acc
    },[])
}

*/