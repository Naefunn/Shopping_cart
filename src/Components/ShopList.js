import React from "react";
import styled from "styled-components";
import ListItem from "./ListItem";



const ShopList = ({shoppingItems, addToBasket}) => {

    const coffeeItems = shoppingItems.map((item, index) => {
        return <ListItem item={item.name} price={item.price} key={index} image={item.image} addToBasket={addToBasket} />
    })

    return (
        <>
        <ListWrapper>
        <ul>{coffeeItems}</ul>
        </ListWrapper>
        
        </>
    )
    
}

const ListWrapper = styled.ul`
    list-style: none;
    margin-left: 0;
	padding-left: 0;
`

export default ShopList;