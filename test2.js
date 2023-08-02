
const btn = document.querySelector('#btn');

console.log(btn)

btn.addEventListener('click',function(){

    const colorBox = (color,time)=>{
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
        document.body.style.backgroundColor = color
        resolve(console.log('running colos'));
        
        
            },time)
        })
        }
        
        async function test(){
        
        await colorBox('red',1000)
        await colorBox('green',1000)
        await colorBox('orange',1000)
        await colorBox('yellow',1000)
        
        }
        
        test().then(()=>{
        console.log('done')
        
        })
        
})



