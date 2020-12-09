import { Router, Request, Response, NextFunction} from 'express';
import getModel from '../db/models';


const router = Router();


//renvoie tous les barathons
router.get('/', async (req : Request, res : Response, next : NextFunction): Promise<void> => {
    const barathonModel = getModel('barathon');
    const barathons = await barathonModel.find({});
    res.json(barathons);
});


export default router;