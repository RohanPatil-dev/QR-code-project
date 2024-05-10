const express = require("express");
const qrCode = require("qrcode")

const connection = require("../connection")

const router = express.Router()


router.post('/code', (req, res) => {
   const {name,email,age,password} = req.body

   const arr = `Name : ${name},Email : ${email},Age : ${age},Password : ${password}`

   qrCode.toDataURL(arr,(err,data)=>{
       if (err) throw err

       console.log(data);

       connection.query("INSERT INTO DATA(NAME,EMAIL,AGE,PASSWORD,CODE) VALUES(?,?,?,?,?)",[name,email,age,password,data],(err,data)=>{
          if(err) throw err;

          console.log(data);

          return data
       })

       return res.redirect("/")


    //    return res.render("scan",{
    //     qrCode : data
    //    })
   })

})

module.exports = router