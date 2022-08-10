import styled from "styled-components";
import BasketItem from "./BasketItem";


const ShopBasket = ({basketItems}) => {
    
    let totalItems = basketItems.length;

    let totalBasketPrice = 0
    

    const basket = basketItems.map((item, index) => {

        totalBasketPrice += item.price
        
        return (
        <BasketItem item={item.item} price={item.price} key={index}/>
        )

    })



    
    
    return(
        <>
        
        <Menubar>
        <h1>3Cs Coffee</h1>

        <nav>
        <p>Items: {totalItems}</p>
        <p>Total Price: {totalBasketPrice}</p>
        <h4>My Cart</h4>
        <BasketList>
        <div class="dropdown">
            <button class="dropbtn">Basket</button>
            <div id="myDropdown" class="dropdown-content">
                {basket}
            </div>
        </div>
        </BasketList>
        </nav>
        </Menubar>

        </>
    )
}

const Menubar = styled.div`
    background-color: lightgreen;
    list-style: none;
`

const BasketList = styled.ul`
    list-style: none;
`

export default ShopBasket;