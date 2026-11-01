const myPromise=new Promise((reslolve,reject)=>
{

    setTimeout(()=>
    {
        let num=Math.random();
    if(num<0.5){
        reslolve(num)
        }
    else{
        reject(num)
    }

    },5000)});
myPromise.then((result)=>{
    console.log(result)

})
.catch((error)=>{
    console.log(error)
})
