const express = require("express");
const mongoose = require("mongoose");
const studentSchema = require("../model/studentSchema");
const studentRoute = express.Router();
/*

CRUD OPERATIONS
studentRoute.post()
studentRoute.get()
studentRoute.route().get().put()
studentRoute.delete();

*/

//GET STUDENTS ROUTER------------------------------------------------------------------------------
studentRoute.get("/",(req,res)=>{
    //FIRST CREATE STUDENT SCHEMA.JS
    studentSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
//------------------------------------------------------------------------------------------------

//UPDATE STUDENT ROUTER----------------------------------------------------
//oid: 654110a61310875efb31fde8
//65411e741310875efb31fde9
//http://localhost:4000/studentRoute/update-student

studentRoute.route("/update-student/:id")
.get((req,res)=>{

    
    studentSchema.findById(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    studentSchema.findByIdAndUpdate(req.params.id,{$set:req.body},
        (err,data)=>{
            if(err)
                return err;
            else
                res.json(data);
        })
});


//--------------------------------------------------------------------------

//DELETE STUDENT ROUTER-----------------------------------------------------
studentRoute.delete("/delete-student/:id",(req,res)=>{
    studentSchema.findByIdAndRemove(req.params.id,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
});

//--------------------------------------------------------------------------

//CREATE STUDENT ROUTER-----------------------------------------------------
studentRoute.post("/create-student",(req,res)=>{
    studentSchema.create(req.body,
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);

    })
})
//--------------------------------------------------------------------------

module.exports = studentRoute;
