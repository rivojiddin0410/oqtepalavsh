const express = require("express")
const router = express.Router()
const { Branches } = require("../../models/filiallarSchema")

router.get("/", async(req, res) => {
   try{
      const branches = await Branches.find() 
      let { text, p } = req.query
      if(text === "high"){
         let filteredPro = branches.filter(i => i.price >= +p)
         res.status(200).json({state: true, msg: "found", innerData: filteredPro})
      }
      else if(text === "low"){
         let filteredPro = branches.filter(i => i.price <= +p)
         res.status(200).json({state: true, msg: "found", innerData: filteredPro})
      }
      else{
         res.status(200).json({state: true, msg: "all data found", innerData: branches})
      }
   }
   catch{
      res.json("smth went wrong")
   }
})

router.post("/", async(req, res) => {
   try {
      const newBranches = await Branches.create(req.body)
      res.json(newBranches)
   }
   catch{
      res.json("fill branches")
   }
})

router.delete("/:id", async(req, res) => {
   try{
      const { id } = req.params
      await Branches.findByIdAndRemove(id)
      res.json("deleted")
   }
   catch{
      res.json("smth went wrong")
   }
})

router.put("/:id", async(req, res) => {
   try{
      const { id } = req.params
      await Branches.findByIdAndUpdate(id, req.body)
      res.json("putted")
   }
   catch{
      res.json("smth went wrong")
   }
})

module.exports = router