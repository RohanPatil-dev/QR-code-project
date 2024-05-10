const express = require("express");

const router = express.Router()

const connection = require("../connection")

router.get('/', (req, res) => {
    connection.query("SELECT * FROM DATA",(err,data)=>{
        
        if (err) throw err 
        
        console.log(data);

        return res.render("code",{
            data : data
        })
    })
})

module.exports = router