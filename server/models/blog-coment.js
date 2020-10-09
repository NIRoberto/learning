import mongoose from 'mongoose';

const Schema = mongoose.Schema;
 
const commentschema = new Schema({
    _id:mongoose.Schema.Types.ObjectId,
    email:{
        type:String,
        required:true,
        match:/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    comment:{
        type:String,
        required:true
    },
},{timestamps:true});


 export default mongoose.model('blog-comments',commentschema);
