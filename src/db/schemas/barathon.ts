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


const barathonSchema: ICustomSchema = {
    collection : 'barathons',
    definition : new Schema({
        name : { type: String, required: true },
        author : { type: String, required: true },
        checkPoints : { type : [String], required : true }
    })
};


export default barathonSchema;