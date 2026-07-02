const mongoose= require('mongoose')

const EventSchema= new mongoose.Schema({
    title:{
        type:String,
        reqired:true
    },
    date:{
        type:Date,
        reqired:true
    },
   organoser:{
        type:String,
        reqired:true
    },
    price:{
        type:String,
        reqired:true
    },
    time:{
        type:String,
        reqired:true
    },
    location:{
        type:String,
        reqired:true
    },
  description:{
        type:String,
        reqired:true
    },
},
{ timestamps: true}
)

const Event=mongoose.model('event', EventSchema)

module.exports=Event