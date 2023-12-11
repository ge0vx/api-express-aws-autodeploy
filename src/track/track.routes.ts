import {Router} from 'express';
const router = Router();

router.get("/tracks", (req, res, next)=>{
    return res.status(200).json({
        message: 'testing!!!'
    })
})

export default router;
