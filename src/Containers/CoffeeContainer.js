import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ShopList from "../Components/ShopList";
import ShopBasket from "../Components/ShopBasket";


const CoffeeContainer = () => {

    const [shoppingItems, setShoppingItems] = useState([
        {   name: "Coffee 1",
            price: 2.99,
            image: 'https://images.unsplash.com/photo-1612213807634-ab190d1255e8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80'
        },
        {   name: "Coffee 2",
            price: 3.99,
            image: 'https://images.unsplash.com/photo-1599639957043-f3aa5c986398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1388&q=80'
        },
        {   name: "coffee 3",
            price: 4.99,
            image: 'https://images.unsplash.com/photo-1495881674446-33314d7fb917?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80'
        }
    ])


    const [basketItems, setBasketItems] = useState([])
    // useEffect that listens for click of 'add to basket' at ListItem level


    const addToBasket = (newItem) => {
        const basketCopy = [...basketItems]
        basketCopy.push(newItem)
        setBasketItems(basketCopy)
    }

    console.log(basketItems);

    return (
        <>
            <ShopBasket basketItems={basketItems} />

            <ShopList shoppingItems={shoppingItems} addToBasket={addToBasket}/>
        </>
    );
};




export default CoffeeContainer;