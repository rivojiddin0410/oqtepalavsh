const mongoose = require("mongoose")

const BranchesScheme = new mongoose.Schema({
   name: {
      type: String,
      required: true
   },
   about: {
      type: String,
      required: true
   }
})

const Branches = mongoose.model("branches", BranchesScheme)

const validateBranches= (body) => {
   const schema = Joi.object({
    name: Joi.string().required(),
    about: Joi.string().required(),
   })
   return schema.validate(body)
}
module.exports = { Branches }