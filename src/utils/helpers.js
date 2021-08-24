export const formatPrice = (number) => {

    console.log(number);
    const newNumber = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'MAD',
        currencyDisplay :'symbol'
    }).format(number / 100)

    return newNumber;

}

export const getUniqueValues = () => {}
