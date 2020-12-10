import {Schema} from 'mongoose'



export const Comment: Schema = new Schema({
    text  : { type : String , required: true},
    author: { type : String , required: true},
    date  : { type : String , required: true},
    rating: { type : Number , required: true}
})
