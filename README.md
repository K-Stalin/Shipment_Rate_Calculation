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
   
### 2. `/city/cityblock-fetch` [GET]
-  **Description**:Fetches the cityBlock
-  **Response**:
   ```json
   {
        "_id": "677220033c27de3880e76134",
        "block": "Nimar",
        "cities": [
            "Khargaon",
            "Bhawani",
            "Khandwa",
            "Burhanpur"
        ]
        
    }
### 3. `/city/addcity` [POST]
-  **Description**:Add a city to  a specific Block
-  **Request Body**:
   ```json
   {
    "city": "New York",
    "block": "A1"
   }
- **Response**:
   ```json
   {
  "message": "City added to block successfully"
   }

### 4.'/rate/update-rate' [POST]
-  **Description**:Update rate price in DB
-  **Request Body**:
   ```json
   {
    "originBlock":"Malwa",
    "destinationBlock":"Dhar",
    "baseRate":2
   }
-  **Response**:
   ```json
   {
    "message":"Rate matrix updated successfully"
   }

### 5.`/rate/rate-fetch` [GET]
- **Description**:Fetches the rate
- **Response**:
  ```json
  {
        "_id": "677220043c27de3880e7613c",
        "originBlock": "Malwa",
        "destinationBlock": "Malwa",
        "baseRate": 1,
         
  }

# Setup

1. Clone the repository:
    ```
    git clone https://github.com/K-Stalin/Shipment_Rate_Calculation.git

2. Install dependencies:
     ```
     npm install
3. Set up environment variables (.env file):
      ```
      MONGO_URI =mongodb+srv://<username>:<password>@shipment.qn5yh.mongodb.net/
      PORT = 4000
4. Start the server
      ```
      npm run server
