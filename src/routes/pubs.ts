import { Router, Request, Response, NextFunction} from 'express';
import getModel from '../db/models';


const router = Router();


//renvoie tous les pubs
router.get('/', async (req : Request, res : Response): Promise<void> => {
    const pubModel = getModel('pub');
    const pubs = await pubModel.find({});
    res.json(pubs);
});

router.get('/:id', async (req : Request, res : Response): Promise<void> => {
    
    try {
        const pubModel = getModel('pub');
        const pub = await pubModel.findById(req.params.id);
        if(!pub) {
            throw new Error('pub not found')
        }
        res.json(pub);
        
    } catch(err) {
        
        res.status(404);
        res.json({
            error : true,
            message : `couldn't find pub with id ${req.params.id}`
        })
        return;
    }
})


export default router;