import mongoose from "mongoose";


const rateMatrixSchema = new  mongoose.Schema({
      originBlock:{type:String,required:true},
      destinationBlock:{type:String,required:true},
      baseRate:{type:Number,required:true}
})


const RateMatrix = mongoose.model("RateMatrix",rateMatrixSchema);


export default RateMatrix