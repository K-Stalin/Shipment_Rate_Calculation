import CityBlockMapping from "../models/cityBlock.js";


// City-blocks  fetch
const cityBlockFetch = async (req, res, next) => {
  try {
    const cityBlocks = await CityBlockMapping.find();

    if (cityBlocks) {
      return res.status(200).json(cityBlocks);
    } else {
      const error = new Error("Failed to fetch city-block mappings");
      error.status = 500;
      return next(error);
    }

  } catch (error) {
    return next(error);
  }
};


// add-city 
const addCity = async(req,res,next)=>{
  try {
    const { city, block } = req.body;

    let cityBlockExist = await CityBlockMapping.findOne({ block });
    let found = false
     if(cityBlockExist) {
        found = true;
     }
    if (!cityBlockExist) {
      cityBlockExist = new CityBlockMapping({ block, cities: [] });
    }

    if (!cityBlockExist.cities.includes(city)) {
      cityBlockExist.cities.push(city);
    }

      
    await cityBlockExist.save(); // Added
     if(found)
     {
    res.status(201).json({ message: "City added to block successfully" });       
     }
     else{
    res.status(201).json({ message: "City added to Newly created block successfully" });       
     }
    
  } catch (error) {
    return next(error);
  }
}






export {  cityBlockFetch , addCity  }
