const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://originalpineapple02:<db_password>@cluster0.3op48.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri);

async function getWB(id) {
  try {
    const database = client.db('idea-pile-db');
    const whiteboards = database.collection('whiteboards');
    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { _id: new ObjectId(id) };
    const whiteboard = await whiteboards.findOne(query);
    console.log(whiteboard);
  } finally {
    await client.close();
  }
}

async function getUserWB(userID) {
  try {
    const database = client.db('idea-pile-db');
    const whiteboards = database.collection('whiteboards');
    // Queries for a movie that has a title value of 'Back to the Future'
    const query = { _UID: userID };
    const whiteboard = await whiteboards.find(query).toArray();
    console.log(whiteboard);
  } finally {
    await client.close();
  }

  
}

