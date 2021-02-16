const mongoose = require('mongoose')
const CategorySchema = new mongoose.Schema({
    name:{
        type:String,
        minLength:[5,'minmum length'],
        maxLength:30
    },
    sub_category:[{
        sub_name:{
            type: String,
            default: null,
            unique: true
        }
    }]
},{
    timestamps:true
})

CategorySchema.virtual('myProducts', {
    ref:'Product',
    localField: '_id',
    foreignField:'category_id'
})

const Category = mongoose.model('Category', CategorySchema)
module.exports =Category