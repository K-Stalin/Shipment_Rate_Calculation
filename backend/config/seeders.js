import CityBlockMapping from "../models/cityBlock.js";
import RateMatrix from "../models/rateMatrix.js";

const cityBlockMappings = [
  {
    block: "Malwa",
    cities: [
      "Indore",
      "Ujjain",
      "Dewas",
      "Pithampur",
      "Mandsore",
      "Neemuch",
      "Ratlam",
      "Agar",
      "Dhar",
      "Jhabua",
      "Alirajpur",
      "Dhar-Dhar Ragadh",
    ],
  },
  { block: "Nimar", cities: ["Khargaon", "Bhawani", "Khandwa", "Burhanpur"] },
  {
    block: "Mahakshol",
    cities: [
      "Jabalpur",
      "Sehore",
      "Satna",
      "Rewa",
      "Narsinghpur",
      "Mandla",
      "Panna",
      "Singrauli",
      "Shahdol",
      "Narsinghpur",
      "Sidhi",
      "Waiden",
      "Umeria",
      "Maiher",
      "Balaghat",
      "Seoni",
    ],
  },
  {
    block: "Chambal",
    cities: [
      "Gwalior",
      "Morena",
      "Shivpuri",
      "Datia",
      "Guna",
      "Sheopur",
      "Bhind",
      "Ashoknagar",
    ],
  },
  {
    block: "Rajpur",
    cities: ["Raipur", "Durg", "Bilaspur", "Ambikapur", "Korba"],
  },
  { block: "NGP", cities: ["Nagpur", "Amravati", "Akola", "Wardha"] },
  {
    block: "REST of Vidharbha",
    cities: [
      "Chandrapur",
      "Bhandara",
      "Gadchiroli",
      "Yavatmal",
      "Washim",
      "Buldana",
      "Akola",
      "Wardha",
      "Gondia",
      "Gadchiroli",
    ],
  },
  { block: "Rest of CG", cities: ["Rest of CG"] },
];

const rateMatrixData = [
  { originBlock: "Malwa", destinationBlock: "Malwa", baseRate: 1 },
  { originBlock: "Malwa", destinationBlock: "Nimar", baseRate: 5 },
  { originBlock: "Malwa", destinationBlock: "Bhopal", baseRate: 6 },
  { originBlock: "Malwa", destinationBlock: "Mahakshol", baseRate: 8 },
  { originBlock: "Malwa", destinationBlock: "Chambal", baseRate: 8 },
  { originBlock: "Malwa", destinationBlock: "Rajpur", baseRate: 9 },
  { originBlock: "Malwa", destinationBlock: "NGP", baseRate: 9 },
  { originBlock: "Malwa", destinationBlock: "REST of Vidharbha", baseRate: 11 },
  { originBlock: "Malwa", destinationBlock: "Rest of CG", baseRate: 11 },

  { originBlock: "Nimar", destinationBlock: "Malwa", baseRate: 5 },
  { originBlock: "Nimar", destinationBlock: "Nimar", baseRate: 1 },
  { originBlock: "Nimar", destinationBlock: "Bhopal", baseRate: 6 },
  { originBlock: "Nimar", destinationBlock: "Mahakshol", baseRate: 9 },
  { originBlock: "Nimar", destinationBlock: "Chambal", baseRate: 9 },
  { originBlock: "Nimar", destinationBlock: "Rajpur", baseRate: 10 },
  { originBlock: "Nimar", destinationBlock: "NGP", baseRate: 10 },
  { originBlock: "Nimar", destinationBlock: "REST of Vidharbha", baseRate: 13 },
  { originBlock: "Nimar", destinationBlock: "Rest of CG", baseRate: 14 },

  { originBlock: "Bhopal", destinationBlock: "Malwa", baseRate: 6 },
  { originBlock: "Bhopal", destinationBlock: "Nimar", baseRate: 6 },
  { originBlock: "Bhopal", destinationBlock: "Bhopal", baseRate: 1 },
  { originBlock: "Bhopal", destinationBlock: "Mahakshol", baseRate: 7 },
  { originBlock: "Bhopal", destinationBlock: "Chambal", baseRate: 2 },
  { originBlock: "Bhopal", destinationBlock: "Rajpur", baseRate: 3 },
  { originBlock: "Bhopal", destinationBlock: "NGP", baseRate: 8 },
  {originBlock: "Bhopal",destinationBlock: "REST of Vidharbha",baseRate: 10,},
  { originBlock: "Bhopal", destinationBlock: "Rest of CG", baseRate: 12 },

  { originBlock: "Mahakshol", destinationBlock: "Malwa", baseRate: 8 },
  { originBlock: "Mahakshol", destinationBlock: "Nimar", baseRate: 9 },
  { originBlock: "Mahakshol", destinationBlock: "Bhopal", baseRate: 7 },
  { originBlock: "Mahakshol", destinationBlock: "Mahakshol", baseRate: 1 },
  { originBlock: "Mahakshol", destinationBlock: "Chambal", baseRate: 2 },
  { originBlock: "Mahakshol", destinationBlock: "Rajpur", baseRate: 8 },
  { originBlock: "Mahakshol", destinationBlock: "NGP", baseRate: 8 },
  {originBlock: "Mahakshol", destinationBlock: "REST of Vidharbha",baseRate: 7,},
  { originBlock: "Mahakshol", destinationBlock: "Rest of CG", baseRate: 8 },

  { originBlock: "Chambal", destinationBlock: "Malwa", baseRate: 8 },
  { originBlock: "Chambal", destinationBlock: "Nimar", baseRate: 9 },
  { originBlock: "Chambal", destinationBlock: "Bhopal", baseRate: 2 },
  { originBlock: "Chambal", destinationBlock: "Mahakshol", baseRate: 2 },
  { originBlock: "Chambal", destinationBlock: "Chambal", baseRate: 1 },
  { originBlock: "Chambal", destinationBlock: "Rajpur", baseRate: 4 },
  { originBlock: "Chambal", destinationBlock: "NGP", baseRate: 8 },
  { originBlock: "Chambal",destinationBlock: "REST of Vidharbha",baseRate: 9,},
  { originBlock: "Chambal", destinationBlock: "Rest of CG", baseRate: 8 },

  { originBlock: "Rajpur", destinationBlock: "Malwa", baseRate: 9 },
  { originBlock: "Rajpur", destinationBlock: "Nimar", baseRate: 10 },
  { originBlock: "Rajpur", destinationBlock: "Bhopal", baseRate: 3 },
  { originBlock: "Rajpur", destinationBlock: "Mahakshol", baseRate: 8 },
  { originBlock: "Rajpur", destinationBlock: "Chambal", baseRate: 4 },
  { originBlock: "Rajpur", destinationBlock: "Rajpur", baseRate: 1 },
  { originBlock: "Rajpur", destinationBlock: "NGP", baseRate: 5 },
  { originBlock: "Rajpur", destinationBlock: "REST of Vidharbha", baseRate: 6 },
  { originBlock: "Rajpur", destinationBlock: "Rest of CG", baseRate: 5 },

  { originBlock: "NGP", destinationBlock: "Malwa", baseRate: 9 },
  { originBlock: "NGP", destinationBlock: "Nimar", baseRate: 10 },
  { originBlock: "NGP", destinationBlock: "Bhopal", baseRate: 8 },
  { originBlock: "NGP", destinationBlock: "Mahakshol", baseRate: 8 },
  { originBlock: "NGP", destinationBlock: "Chambal", baseRate: 8 },
  { originBlock: "NGP", destinationBlock: "Rajpur", baseRate: 5 },
  { originBlock: "NGP", destinationBlock: "NGP", baseRate: 1 },
  { originBlock: "NGP", destinationBlock: "REST of Vidharbha", baseRate: 7 },
  { originBlock: "NGP", destinationBlock: "Rest of CG", baseRate: 6 },

  { originBlock: "REST of Vidharbha", destinationBlock: "Malwa", baseRate: 11 },
  { originBlock: "REST of Vidharbha", destinationBlock: "Nimar", baseRate: 13 },
  {originBlock: "REST of Vidharbha", destinationBlock: "Bhopal",baseRate: 10,},
  {originBlock: "REST of Vidharbha", destinationBlock: "Mahakshol",baseRate: 7,},
  {originBlock: "REST of Vidharbha", destinationBlock: "Chambal",baseRate: 9,},
  { originBlock: "REST of Vidharbha", destinationBlock: "Rajpur", baseRate: 7 },
  { originBlock: "REST of Vidharbha", destinationBlock: "NGP", baseRate: 7 },
  {originBlock: "REST of Vidharbha", destinationBlock: "REST of Vidharbha",baseRate: 1,},
  { originBlock: "REST of Vidharbha",destinationBlock: "Rest of CG",baseRate: 7,},

  { originBlock: "Rest of CG", destinationBlock: "Malwa", baseRate: 11 },
  { originBlock: "Rest of CG", destinationBlock: "Nimar", baseRate: 14 },
  { originBlock: "Rest of CG", destinationBlock: "Bhopal", baseRate: 12 },
  { originBlock: "Rest of CG", destinationBlock: "Mahakshol", baseRate: 8 },
  { originBlock: "Rest of CG", destinationBlock: "Chambal", baseRate: 9 },
  { originBlock: "Rest of CG", destinationBlock: "Rajpur", baseRate: 6 },
  { originBlock: "Rest of CG", destinationBlock: "NGP", baseRate: 6 },
  { originBlock: "Rest of CG",destinationBlock: "REST of Vidharbha",baseRate: 7,},
  { originBlock: "Rest of CG", destinationBlock: "Rest of CG", baseRate: 1 },
];



async function seedDB() {
    try {
        await CityBlockMapping.deleteMany({})
        await RateMatrix.deleteMany({}) 

        await CityBlockMapping.insertMany(cityBlockMappings)
        await RateMatrix.insertMany(rateMatrixData)
       
  console.log("Data seeded successfully!");
  process.exit(0);    
  } catch (error) {
         console.error("Error seeding database:", error);
         process.exit(1);      
    }
}
  
export default seedDB