import CityBlockMapping from "../models/cityBlock.js";
import RateMatrix from "../models/rateMatrix.js";


// Calculate Rate
const rateCalculate = async (req, res, next) => {
  try {
    const { origin, destination, weight, invoiceValue, riskType } = req.body;

    // 1. Get block mappings for origin and destination
    const originBlock = await CityBlockMapping.findOne({
      cities: { $in: [origin] },
    })
      .select("block")
      .lean();
    const destinationBlock = await CityBlockMapping.findOne({
      cities: { $in: [destination] },
    })
      .select("block")
      .lean();

    if (!originBlock || !destinationBlock) {
      return next(new Error("Invalid origin or destination"));
    }

    // 2. Get base freight from rate matrix
    const rateMatrix = await RateMatrix.findOne({
      originBlock: originBlock.block,
      destinationBlock: destinationBlock.block,
    }).lean();

    if (!rateMatrix) {
      return next(new Error("No rate found for this route"));
    }

    // 3. Calculate base freight
    const minChargeableWeight = 40;
    const minFreightCharge = 400;
    const baseFreight =
      Math.max(weight, minChargeableWeight) * rateMatrix.baseRate;
    const actualBaseFreight = Math.max(baseFreight, minFreightCharge);

    // 4. Calculate fuel surcharge (20% of base freight)
    const fuelSurcharge = actualBaseFreight * 0.2;

    // 5. Calculate DKT charge
    const dktCharge = 100;

    // 6. Calculate FOV charge
    let fovCharge;
    if (riskType === "owner") {
      fovCharge = Math.max(invoiceValue * 0.05, 50);
    } else if (riskType === "carrier") {
      fovCharge = Math.max(invoiceValue * 0.02, 300);
    } else {
      return next(new Error("Invalid riskType"));
    }

    // 7. ODA Charges
    let odaCharge = 0;
    const odaThreshold = Math.max(750, weight * 5);
    odaCharge = Math.max(odaCharge, odaThreshold);

    // 8. Calculate total cost
    const totalCost =
      actualBaseFreight + fuelSurcharge + dktCharge + fovCharge + odaCharge;

    res.status(201).json({
      baseFreight: actualBaseFreight,
      fuelSurcharge,
      dktCharge,
      fovCharge,
      odaCharge,
      totalCost,
    });
  } catch (error) {
    next(error);
  }
}



// Update-Rates
const updateRates = async (req, res, next) => {
  try {
    const { originBlock, destinationBlock, baseRate } = req.body;

    const updatedRateMatrix = await RateMatrix.findOneAndUpdate(
      { originBlock, destinationBlock },
      { baseRate },
      { new: true }
    );

    if (updatedRateMatrix) {
      res.status(200).json({ message: "Rate matrix updated successfully" });
    } else {
      return next(new Error("Failed to update rate matrix"));
    }
  } catch (error) {
    next(error);
  }
}




// Rates Fetch
const rateFetch = async (req, res, next) => {
  try {
    const rateMatrix = await RateMatrix.find();

    if (rateMatrix) {
      res.status(200).json(rateMatrix);
    } else {
      return next(new Error("Failed to fetch rate matrix"));
    }
  } catch (error) {
    next(error);
  }
}



export { rateCalculate ,updateRates ,rateFetch }