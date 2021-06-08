# seekster-test
API test for seekster

# Install API
To install the project navigate in to the api folder and run npm install or yarn

# Run the api
To run the api use the following script: npm run start or yarn start inside the api folder.

# Run tests
To run the tests use the following script: npm run test inside the api folder

## Details
It is not possible to create transactions if the item is not present in the database, this was done as a security measurement incase someone would call the api with id's that are not present in the database.

## Routes

**Create Item**
POST localhost:8000/api/items/
Params: { qty: Number, price_per_item: Number, discount: Number }

**List Items**
GET localhost:8000/api/items/

**Create Transaction**
POST localhost:8000/api/transactions/
params: {[ Item ], total_price: Number, change: Number }
NOTE: The Item _id needs to be present in the database and the _id needs to be written *_id* **NOT** *id*

**List Transactions**
GET localhost:8000/api/transactions/

## Sample parameters for api calls
**Create Item**
```
{
	"qty": 3,
	"price_per_item": 6,
	"discount": 0.15
}
```

**Create Transaction**
```
{
	"item_list": [
		{
            "_id": "60bf1b2651294a43c470fcb0",
			"qty": 3,
	        "price_per_item": 6,
	        "discount": 0.15
		},
        {
            "_id": "60bf1c850da5b244c0da0a5b",
            "qty": 2,
            "price_per_item": 6,
            "discount": 0.15,
    }],
	"total_discount": 0.10,
	"payment": 22.95
}
```
**Items present in database that can be used to test creating a transaction**
```
  {
    "_id": "60bf1b2651294a43c470fcb0",
    "qty": 5,
    "price_per_item": 3,
    "discount": 0.1,
    "__v": 0
  }
```
```
  {
    "_id": "60bf1c850da5b244c0da0a5b",
    "qty": 2,
    "price_per_item": 6,
    "discount": 0.15,
    "__v": 0
  }
```
```
  {
    "_id": "60bf1e4288f06b463dcacf55",
    "qty": 3,
    "price_per_item": 6,
    "discount": 0.15,
    "__v": 0
  }
```


