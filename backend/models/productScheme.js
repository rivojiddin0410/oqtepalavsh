const mongoose = require("mongoose")

const ProductScheme = new mongoose.Schema({
   title: {
      type: String,
      required: true
   },
   price: {
      type: Number,
      required: true
   },
   url: {
      type: String,
      required: true
   },
   category: {
      type: String,
      required: true
   },
   desc: {
      type: String,
      required: true
   },
})

const Product = mongoose.model("product", ProductScheme)

const validateProduct = (body) => {
   const schema = Joi.object({
       title: Joi.string().required(),
       price: Joi.number().required(),
       desc: Joi.string().required(),
       url: Joi.string().required(),
       category: Joi.string().required(),
   })
   return schema.validate(body)
}
module.exports = { Product }