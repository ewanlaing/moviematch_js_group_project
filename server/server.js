require('dotenv').config();

const express = require('express');
const app = express();

const URL = process.env.URI

const cors = require('cors');
app.use(cors());

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(express.json());

// MongoClient.connect('mongodb://127.0.0.1:27017', {useUnifiedTopology: true})
MongoClient.connect(URL, {useUnifiedTopology: true})
.then((client) => {

  //this points the app to the local collection we made during codeclan, uncomment it out for localhost testing
  // const db= client.db('moviematch'); 

  //this points the app to the mongoDB atlas collection
  const db= client.db('moviematchtest'); 
  const favouritesCollection= db.collection('favourites');
  const favouritesRouter= createRouter(favouritesCollection);
  app.use('/favourites', favouritesRouter);
  const moviesCollection= db.collection('movies');
  const moviesRouter= createRouter(moviesCollection);
  app.use('/movies', moviesRouter);
}).catch(console.err)

app.listen(10000, function () {
    console.log(`listening on Port ${this.address().port}`)  
});