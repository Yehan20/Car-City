# Car City

A Fake Shopping Cart , that is connected to a server , which has different brands of toy cars. Which allows users to view items , add them to a cart , remove items from a cart , search items and then check out. Has a small server
made where new items can be added to the System. dynamic cart that reacts to any change in the cart items.

Link to the application: https://yn-carcity.netlify.app/

## Lessons learned

- How to use Multer to add Imagees using Express
- How to use React Router 6 to make private routes and for routing
- How to use Env varaibles
- How to make different schemas and models using mongoose
- How to connect to mongodb atlas to application
- How to use styled Components
- How to deploy server to cyclic.sh


## Features

- Search Cars
- Increaseing , Decreasing car amount amount
- Adding a Car to System
- Removing items from a Cart
- Checkout


## Tools and technologies used

- create-react-app
- React + Hooks + Context
- React Router 6
- React Query
- Styled Components
- Bootstrap
- Nodejs + Express
- Mongo DB + Mongoose
- Axios
- Local Storage
- Aos Animation


## Deployment

- Client-side application is deployed to [Netlify](https://netlify.com/)<br />
- Server-side app is deployed to [Cylic](https://www.cyclic.sh/)
- Mongo db is deployed to [Mongo DB Atlas](https://cloud.mongodb.com/)

## Images
- [Amazon](https://www.amazon.com/)

## Get started

Open a terminal and clone this repo:

Create a mongodb data base named carcity in your localserver or in atlas and repalce the connection string:

next make process.env file  and your connection key 

```
CONNECTION_URL=YOUR URL 
```

```bash
# Clone this repository
$ git clone 

# Go into the repository
$ cd carCity

# Remove current origin repository
$ git remote remove origin

# If you want, you can add a new remote repository
$ git remote add origin https://github.com/<your-github-username>/<your-repo-name>.git

Go to each folder and intstall the nodemodules:
```bash
# Terminal for the server
# cd into the server folder
$ cd server

# Install dependencies
$ npm install

# Install nodemon if you don't have it
# You can either install it globally, or locally only for this project (remove the -g flag)
npm install nodemon -

# run the server
$ npm run devStart
```

```bash
# Terminal for the client
# cd into the client folder
$ cd client

# Install dependencies
$ npm install

# run the client app
$ npm start
```
```