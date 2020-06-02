var express = require('express')
const data = require('./data')
var app = express()
app.get('/api/products',(req,res)=>{
    res.send(data.products)
})
app.get('/api/products/:id', (req, res) =>
{
    const productId = req.params.id;
    const product = data.products.find(x => x._id === productId)
    if (product)
        res.send(product)
    else
        res.status(404).send({message:"product not found"})
})
app.listen('5000',()=>console.log("Server is running on port 5000"))