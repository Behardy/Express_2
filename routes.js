"use strict";
const express = require("express");
const page = express.Router();
const pool = require("./pg-connection-pool");

function selectAll(res) {
    pool
        .query("select * from shoppingcart ")
        .then(result => res.json(result.rows));
}

page.get("/shoppingcart", (req, res) => {
    selectAll(res);
});

page.post("/shoppingcart", (req, res) => {
    pool
        .query("insert into shoppingcart(product,price,quantity)values($1::text,$2::int,$3::int)", [
            req.body.product,
            req.body.price,
            req.body.quantity
        ]).then(() => {
            selectAll(res);
        });

});
page.put("/shoppingcart/:id", (req, res) => {
    pool
        .query("update shoppingcart set product=$1::text,price=$2::int,quantity=$3::int where id=$4::int", [
            req.body.product,
            req.body.price,
            req.body.quantity,
            Number(req.params.id)
        ]).then(() => {
            selectAll(res)
        });

});
page.delete("/shoppingcart/:id",(req,res)=>{
pool.query("delete from shoppingcart where id=$1::int",
[Number(req.params.id)])
.then(()=>{
    selectAll(res)
});
});



module.exports = page;