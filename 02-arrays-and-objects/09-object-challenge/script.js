//step 1 
const library = [
    {
        title:"Harry Potter",
        author : "James Green",
        status : {
            owned : true,
            read : false,
            reading : false
        }
    },
    
    {
        title:'Harry Potter',
        author : 'James Green',
        status : {
            owned : true,
            read : false,
            reading : false
        }
    },

    {
        title:"Jai SHree Ram",
        author : "Harden",
        status : {
            owned : true,
            read : false,
            reading : false
        }
    }
]
//Step2
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;
// console.log(library);

//step3






// Step4
let obj = JSON.stringify(library);
console.log(obj);