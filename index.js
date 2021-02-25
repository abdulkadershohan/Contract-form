const express=require('express')
const bodyParser= require('body-parser')
const nodemailer=require('nodemailer')
const cors=require('cors')
const app=express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extend:true}))
app.use(cors())

app.get('/',()=>{
    resizeBy.send("Welcome")
})
app.post("/api/form",(req,res)=>{
    let data=req.body
    let smtpTransport=nodemailer.createTransport({
        service:"Gmail",
        port:465,
        auth:{
            user:'', ///  user:'abc@gmail.com'
            pass:''
        }
    });
    let mailOptions={
        form:data.email,
        to:'', //abc@.com
        subject:`message from $(data.fname)`,
        html:`
        <h3>Informations<h3/>
        <ul>
        <li>fname: $(data.fname)</li>
        <li>lname: $(data.lname)</li>
         <li>email: $(data.email)</li>
          <li>subject: $(data.subject)</li>
          <h3>Message</h3>
          <p>$(data.message)</p>
        
        <ul/>
        `
    };
    smtpTransport.sendMail(mailOptions,(error,response)=>{
        if(error){
            res.send(error)
        }
        else {
            res.send('success')
        }

    })
    smtpTransport.close()
})
