

//exc1
function delayedGreet(name, delay)
{
    return new Promise((resolve, reject)=>
    {
        setTimeout(function(){
            resolve("Hello, " + name + "!")
        },delay)
    })
}

delayedGreet("Alice",2000).then(function(result){
    console.log(result)
})

//exc3
function randomOperation()
{
    return new Promise((resolve,reject)=>
    {
        let num = Math.random();
        console.log(num);
        if(num<0.5)
        {
            resolve("success!")
        }
        else{
            reject("failure!")
        }
    })
}

randomOperation().then((result)=>
{
    console.log(result)
})
.catch((result)=>
{
    console.log(result)
})

//exc4
function raceTimers()
{
    return new Promise((resolve)=>
    {
        setTimeout(function(){
            resolve("Timer A finished!")
        },2000)
         setTimeout(function(){
            resolve("Timer B finished!")
        },3000)
        
    })
}
raceTimers().then((result)=>{
    console.log(result);
})

//exc 6
function waitAll(){
    let p1=new Promise((resolve)=>{
        setTimeout(function(){
            resolve("First")
        },1000)
    })
    let p2=new Promise((resolve)=>{
        setTimeout(function()
    {
        resolve("Second")
    },2000)
    })
    let p3=new Promise((resolve)=>{
        setTimeout(function(){
            resolve("Third")
        },3000)
    })
    return Promise.all([p1,p2,p3]);
}

waitAll().then(function(result){
    console.log(result);
})

//exc8
function chainedGreetings(){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve("Hi!")
        },1000)
    })
}

chainedGreetings().then(function(result)
{
    console.log(result)
    return new Promise((resolve)=>
    {
        setTimeout(()=>{
            resolve("How are you?")
        },2000)
    })
})
.then(function(result)
{
    console.log(result)
    return new Promise((resolve)=>
    {
       setTimeout(()=>{
        resolve("Goodbye")
    },1000)
    })
   
})
.then(function(result){
    console.log(result)
})



