export const formatPrice = (number) => {

    console.log(number);
    const newNumber = Intl.NumberFormat('en-US',{
        style:'currency',
        currency:'MAD',
        currencyDisplay :'symbol'
    }).format(number / 100)

    return newNumber;

}

export const getUniqueValues = (data,value) => {

    let unique = data.map((item) => {
 
        return item[value];

    });

    if(value === 'colors'){
        unique = unique.flat();
    }

    return ['all',...new Set(unique)];
}
