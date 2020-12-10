import { Router, Request, Response, NextFunction} from 'express';
import mongoose from 'mongoose';
import getModel from '../db/models';



const router = Router();


//renvoie tous les barathons
router.get('/', async (req : Request, res : Response): Promise<void> => {
    const barathonModel = getModel('barathon');
    const barathons = await barathonModel.find({});
    res.json(barathons);
});

router.post('/', async (req : Request, res : Response): Promise<void> => {

    try {
        const barathonModel = getModel('barathon');
        // const {name, author, checkpoints} = req.body;
        await barathonModel.validate(req.body);
        const barathon = new barathonModel(req.body);
        const insertedBarathon = await barathon.save();
        res.json(insertedBarathon);
    } catch (err) {
        console.log(err);
        
        if (err instanceof mongoose.Error.ValidationError) {
            res.status(400);
            res.json({
                error : true,
                message : 'bad request'
            });
        } else {
            res.status(500);
            res.json({
                error : true,
                message : 'server error'
            });
        }
    }
})

router.get('/:id', async (req : Request, res : Response): Promise<void> => {
    
    try {
        const barathonModel = getModel('barathon');
        const barathon = await barathonModel.findById(req.params.id);
        if(!barathon) {
            throw new Error('barathon not found')
        }
        res.json(barathon);
        
    } catch(err) {
        
        res.status(404);
        res.json({
            error : true,
            message : `couldn't find barathon with id ${req.params.id}`
        })
        return;
    }
})

export default router;