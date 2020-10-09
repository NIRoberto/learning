import jwt from 'jsonwebtoken';
 let j;
 export default j = (req,res)=>{
     try {
         const token =req.headers.authorization.split(" ")[1];
         console.log(token);
         const decoded =jwt.verify (token,process.env.JWT_KEY);
         req.useData =decoded;
         next();
     }
     catch(error){
         return res.status(401).json({
             message:"autho failed"
         });
     }
 };
