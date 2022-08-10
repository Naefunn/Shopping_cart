import React from "react";
import styled from "styled-components";




const ListItem = ({item, price, image, addToBasket}) => {

    const onBasketClick = () => {
        addToBasket({item:item, price:price, image:image})
    }

    return (
        <>
        <Wrapper>
            <li>
                <h3>{item}</h3>
                <p>{price}</p>
                <ImageDiv src={image}/>
                <button onClick={onBasketClick}>Add to basket</button>
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
const ImageDiv = styled.img.attrs(props => ({ src: props.src }))`
    width: 100px;
    height: 100px;
    opacity: 0.8;
`;

export default ListItem;