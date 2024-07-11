import express from 'express';
import verifyToken from '../middleware/verifyToken.js';
import recipeControllers from '../controllers/recipe.js';

const router = express.Router();

// routes
router.post('/register',(req,res)=>{
    const body=req.body
    const userName=body.userName
    const password=body.password
    console.log(userName,password);
    res.json({userName,password}) 
})

router.post('/login',(req,res)=>{
  
})
router.post('/logout',(req,res)=>{
  
})

router.post('/recipes', isAuthenticated,(req,res)=>{
  
})


export default router;
