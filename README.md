Bookstore app for gartner -

Steps to run the project -

1. Clone the repository at your desired location using git clone https://github.com/amitgupta13/gartner-bookstore.git

2. Once done cd into the repo and run "npm i" in both server and client.

3. For the server to run as expected create a .env.development file in the server folder and add the below env variables.

MONGO_URI=mongodb://127.0.0.1:27017/cart
NODE_ENV=development
ACCESS_TOKEN_SECRET=06988d709d6b1771419d8979f06740a741e9b109ed0f37560d1c09acaadfef475bb3ddfdd1ebc54f4c1eb2af4c3cf0a8ec61a4a905e6bf8a6a63ce298ee4d93a
REFRESH_TOKEN_SECRET=81c6ba6efebecae4ed69467b8269b974fa96906edb6a2cfc4d1ea73ac424534c19d97e87c609d949cd6ee33abb8a665eb6e65f09bb6eac98863515132ab41391
TOKEN_DEFAULT_EXPIRY=6000s

4. Now to run the server make sure you are in server folder, if you are using windows use "npm run start:dev" else if you are using mac/linux use "npm run startmac:dev".

5. For client cd into client and run npm start.

6. You can access the application on 'http://localhost:3000' and to access api docs visit 'https://localhost:3500/api'

7. Data for books will be automatically seeded to the mongodb database on your 1st server run.

8. Once you access the application use the signup page to create a user and access the application.

9. To run tests cd into server and run "npm run test"
