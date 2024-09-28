async function addItem(userCart, item){
    userCart.push(item);
    
}

async function deleteItem(userCart, name){
    const index = userCart.findIndex((item) => item.name === name)
    
    if(index !== -1) {
        userCart.splice(index, 1)
    }
}

async function removeItem(userCart, item){

    const indexFound = userCart.findIndex((p) => p.name === item.name)

    if ( indexFound == -1) {
        console.log("item não encontrado")
    }

    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1
    } else {
        userCart.splice(indexFound, 1)
    }

    console.log(indexFound)
}

async function displayCart(userCart) {
    console.log("Shopee cart list:")
    userCart.forEach((item, index) => {
        console.log(`${index + 1} - ${item.name} R$ ${item.price} | ${item.quantity} | ${item.subtotal()}  `)
    })

    
}

async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log('Shopee Cart TOTAL is:')
    console.log(`\nTotal: ${result.toFixed(2)}`);
}

export {
    addItem,
    removeItem,
    calculateTotal,
    deleteItem,
    displayCart
}