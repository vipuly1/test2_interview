const mongoose = require("mongoose")

const compSchema = new mongoose.Schema({
_id:{
    type: Number,
    required: true
},
name :{
    type : String,
    required: true
},
url:{
    type: String,
    required: true
}

})


const comp = mongoose.model("companies",compSchema)
module.exports ={comp}