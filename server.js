//npm i express
//npm i nodemon --save-dev

const express= require('express')

const app=express()
app.use(express.static(__dirname+'/public')) //sa marche beha wella blech

const authMiddelware=(req,res,next)=>{
    const auth=false
    if(auth){
        console.log('user autorized')
        next()
    }else{

        res.send('user is not authorized')
    }
}

app.get('/',authMiddelware,(req,res)=>{
    //res.send('<h1>hello world</h1>')
    res.sendFile(__dirname+ '/public/Home.html')

})

app.get('/contact',authMiddelware,(req,res)=>{
    //res.send('<h1>hello world</h1>')
    res.sendFile(__dirname+ '/public/Contact.html')

})
app.get('/services',authMiddelware,(req,res)=>{
    //res.send('<h1>hello world</h1>')
    res.sendFile(__dirname+ '/public/Services.html')

})
app.get('/css/style.css',(req,res)=>{
    res.sendFile(__dirname+'/public/css/style.css')
})


    



app.listen(5000,(err)=>{
    if(err)throw err
    else console.log('server is nunning')
})
