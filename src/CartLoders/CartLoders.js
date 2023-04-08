import { getShoppingCart } from "../utilities/fakedb";

const CartLoders = async() => {
    const lodersData = await fetch('products.json')
    const cartLoder = await lodersData.json();

    // get databesh loder to file
    const shappingCart = getShoppingCart();
    const setShappingCart = [];
    for(const id in shappingCart){
        const setCart = cartLoder.find(pd => pd.id === id)
        if(setCart){
            const quantity = shappingCart[id]
            setCart.quantity = quantity;
            setShappingCart.push(setCart)
        }
    }
    return setShappingCart;
};

export default CartLoders;