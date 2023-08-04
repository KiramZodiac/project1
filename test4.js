
//const colorG = ['red','green','yellow','orange','pink']
const tym = setInterval(() => {
    
const r = Math.floor(Math.random() *255)
const g = Math.floor(Math.random() *255)
const b = Math.floor(Math.random() *255)

const allColors = `rgb(${r},${g},${b})`



const para = document.querySelector('#para')
para.textContent  = allColors

console.log(allColors)

document.body.style.backgroundColor =allColors 




},1000);



console.log(para)

const colorsTest = (color,timeTaken)=>{

return new Promise((resolved,rejected)=>{

setTimeout(()=>{


},timeTaken)


})
}

const cal = async ()=>{
 await colorsTest('red',3000)
 await colorsTest('green',1000)
 await colorsTest('pink',1000)
 await colorsTest('yellow',1000)
 await colorsTest('purple',1000)
 
return para.textContent = 'requested completed now'

}

cal();



  