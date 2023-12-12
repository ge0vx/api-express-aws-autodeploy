import {Router} from 'express';
const router = Router();

router.get("/tracks", (req, res, next)=>{
    return res.status(200).json({
        message: `testing!!! ${process.env.PORT}`
    })
})

export default router;
