
const para = document.querySelector('#para')
 const now = new Date();

 const timeTaken = ()=>{
 const hours = now.getHours()
 const minutes = now.getMinutes()
 const seconds = now.getSeconds()

  
 return `${hours}:${minutes}:${seconds}`

 }

    console.log(timeTaken())













