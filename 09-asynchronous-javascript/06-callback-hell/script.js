let error = true;
const getUSer = new Promise((resolve , reject) => {
    setTimeout((()=>{
        
        if(error)
        {
            reject("Error has been found");
        }
        console.log("HEllo form insied the timeout");
        resolve();
    }), 3000);
})

getUSer
    .then(()=>{
    console.log("Promise Consumed");})
    .catch((error) =>{
        console.log("Rejected, "+ error);
    })
    .finally(()=>console.log("It will exectue no matter what"));