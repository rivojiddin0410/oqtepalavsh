const express = require("express")
const router = express.Router()
const { Product } = require("../../models/productScheme")

router.get("/", async(req, res) => {
   try{
      const product = await Product.find() 
      let { text, p } = req.query
      if(text === "high"){
         let filteredPro = product.filter(i => i.price >= +p)
         res.status(200).json({state: true, msg: "found", innerData: filteredPro})
      }
      else if(text === "low"){
         let filteredPro = product.filter(i => i.price <= +p)
         res.status(200).json({state: true, msg: "found", innerData: filteredPro})
      }
      else{
         res.status(200).json({state: true, msg: "all data found", innerData: product})
      }
   }
   catch{
      res.json("smth went wrong")
   }
})

router.post("/", async(req, res) => {
   try {
      const newProduct = await Product.create(req.body)
      res.json(newProduct)
   }
   catch{
      res.json("fill product")
   }
})

router.delete("/:id", async(req, res) => {
   try{
      const { id } = req.params
      await Product.findByIdAndRemove(id)
      res.json("deleted")
   }
   catch{
      res.json("smth went wrong")
   }
})

router.put("/:id", async(req, res) => {
   try{
      const { id } = req.params
      await Product.findByIdAndUpdate(id, req.body)
      res.json("putted")
   }
   catch{
      res.json("smth went wrong")
   }
})

module.exports = router