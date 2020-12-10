// {
//     "name" : "nom du parcours", 
//     "author": "nom de l\'auteur",
//     "checkPoints" : [
//         'idBar',
//         'idBar2',
//     ]
// }
import { Schema } from 'mongoose';
import { ICustomSchema } from '../../types/database';
import { Comment } from './comment'


const barathonSchema: ICustomSchema = {
    collection : 'barathons',
    definition : new Schema({
        name : { type: String, required: true },
        author : { type: String, required: true },
        checkpoints : { type : [String], required : true },
        comments : { type: [Comment], required : false}
    })
};


export default barathonSchema;