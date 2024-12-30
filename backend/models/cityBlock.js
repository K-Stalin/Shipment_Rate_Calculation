import mongoose from "mongoose";


const cityBlockMappingSchema = new mongoose.Schema({
  block: { type: String, required: true },
  cities: [{ type: String }],
});

const CityBlockMapping = mongoose.model(
  "CityBlockMapping",
  cityBlockMappingSchema
);

export default CityBlockMapping;
