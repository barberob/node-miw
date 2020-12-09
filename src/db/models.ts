import { Model } from 'mongoose';
import { ICustomSchema } from '../types/database';
import { database } from './index';
import schemas from './schemas';

const initializedModels: object = {};

const getModel = (modelName : string): Model => {

    if(initializedModels[modelName]) { // si en memoire renvoyer la version en memoire 
        return initializedModels[modelName]
    }
    //sinon construction et mise en mémoire


    // todo verfier si le schéma existe 
    const schema: ICustomSchema = schemas[modelName];
    console.log(`Création du modele ${modelName}...`);

    //constructeur de model de l'api mongoose
    const model = database.model(schema.collection, schema.definition, schema.collection);
    initializedModels[modelName] = model; 

    return model;
}

export default getModel;