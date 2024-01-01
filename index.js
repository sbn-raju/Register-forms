const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");


main().then((res)=>{
    console.log("Connection Estiblished");
}).catch((err)=>{
    console.log(err);
})
async function main(){
   await mongoose.connect('mongodb://127.0.0.1:27017/form');
}


let formSchema = new mongoose.Schema({
    first_Name :{
        type: String,
        require: true
    },
    last_Name: {
        type: String,
        require: true
    },
    dob_date :{
        type: Number,
        require: true
    },
    dob_month: {
        type: String,
        require: true
    },
    dob_year :{
        type: Number,
        require: true
    },
    yourMail: {
        type: String,
        require: true
    },
    gender :{
        type: String,
        require: true
    },
    phoneNumber: {
        type: Number,
        require: true
    }, 
    stree_One: {
        type: String,
        require: true
    },
    stree_Two: {
        type: String,
        require: true
    },
    addressCity :{
        type: String,
        require: true
    },
    state :{
        type: String,
        require: true
    },
    zipCode :{
        type: Number,
        require: true
    },
});

//Creating models (collections for database)
let FormData = mongoose.model("FormData",formSchema);

let port = 8080;

app.set("view engine" ,"ejs");



app.set("views",path.join(__dirname,"/views"));
app.use(express.static(path.join(__dirname,"/public/css")));
app.use(express.static(path.join(__dirname,"/public/js")));
app.use(express.urlencoded({extended : true}));


app.listen(port,()=>{
    console.log("App listening at the :",port);
});


//INDEX
app.get("/",(req, res)=>{
    res.render("index.ejs");
});



//SUBMIT
app.post("/submit",(req,res)=>{
    let { first_Name ,last_Name, dob_date, dob_month, dob_year,yourMail, gender, phoneNumber, stree_One, stree_Two,addressCity , state, zipCode} = req.body;
    let data = new FormData({
        first_Name :first_Name,
        last_Name: last_Name,
        dob_date :dob_date,
        dob_month: dob_month,
        dob_year : dob_year,
        yourMail: yourMail,
        gender :gender,
        phoneNumber: phoneNumber, 
        stree_One:stree_One,
        stree_Two:stree_Two, 
        addressCity :  addressCity ,
        state : state,
        zipCode : zipCode ,
    });
     data.save().then((res)=>{
        console.log("Data updated in Database");
     })
     .catch((err)=>{
        console.log(err);
     })
    res.render("submit.ejs");
});