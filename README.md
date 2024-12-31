# Shipment_Rate_Calculation

This API calculates shipment rate based on origin , destination , weight and other parameter


# Features
 - Calculate shipment rate.
 - Fetch list cities and block
 - Add  City-to-block
 - Updates rate Matrix
 - Retrieve current rate matrix

# Endpoints

### 1. `/rate/calculaterate` [POST]
-  **Description**: Caculate Shipment rate
-  **Request Body**:
   ```json
   {
   "origin": "New York",
   "destination": "Los Angeles",
   "weight": 50,
   "invoiceValue": 1000,
   "riskType": "owner"
   }
-  **Response**:
   ```json
   {
   "baseFreight": 2000,
   "fuelSurCharge": 400,
   "dktCharge": 100,
   "fovCharge": 50,
   "odaCharge": 750,
   "totalCost": 3300
   }
