function getCelsius(value) {
    let c = (value-32)*5/9;
    return `The temprature is ${c}\xB0 C degrees`;
}

console.log(getCelsius(32));

function minMax(arr)
{
    const min = Math.min(...arr);
    const max = Math.max(...arr);
    return {
        min : min,
        max : max
    };
}

console.log(minMax([1,4,5,7,96,5]));

(function ary1 (length,width)
{
   console.log(`The area of a rectangle with a length of ${length} and a width of ${width} is ${length*width}.` ); 

} )(1,5);

