
const login =(username,password) => {

return new Promise((resolve,reject) => {

setTimeout(() => {
if(username ==='kiram'&& password=== 1234){
console.log('passed')
resolve()
}
else if (username ==='' && password===''){
    console.log('please enter password')
}

else{
    console.log('no data seen')
    reject()
}


    
}, 1000);


})
}

async function Logic(){
await login('kiram',1234)


}

Logic()