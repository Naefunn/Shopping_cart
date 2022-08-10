import React from "react";
import styled from "styled-components";




const BasketItem = ({item, price}) => {
    
    return (
        <>
        <Wrapper>
            <li>
                <h3>{item}</h3>
                <p>{price}</p>
            </li>
        </Wrapper>
        </>
    )
    
}

const Wrapper = styled.li`
    display: flex;
    margin: 10px auto;
    width: 500px;
    background-color: #efebebeb;
    padding: 10px;
    border-radius: 5px;
    list-style: none;
`
export default BasketItem;