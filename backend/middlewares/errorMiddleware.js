const errorHandler =  (err,req,res,next) =>{
      const statusCode =  res.statusCode === 200 ? 500 : res.statusCode
      res.status(statusCode).json({
           success:false,
           message:err.message,
           stack:process.env.PORT === "production" ? null : err.stack
      })
}


export default errorHandler