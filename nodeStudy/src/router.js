import express from 'express';

const router = express.Router();
router.post('/user',(req,res,next)=>{
    console.log('haha 真的成功了！');
    res.send(req.body);
});
export default app =>{
    app.use('/api',router);
}
