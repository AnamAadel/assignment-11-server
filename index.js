const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const express  = require("express");
const cors = require("cors")

require("dotenv").config()

// const user = []

const app = express();
const port = process.env.PORT || 5000;


const uri = `mongodb+srv://${process.env.USER_NAME}:${process.env.USER_PASS}@cluster0.otazdf5.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");

    

    
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);




const db = client.db("serviceDB");
const serviceCollection = db.collection("services");
const usersCollection = db.collection("users");
const addedServiceCollection = db.collection("userService");


// Create a MongoClient with a MongoClientOptions object to set the Stable API version






app.use(cors({
  origin: ["http://localhost:5173"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true
}))
app.use(express.json());

// create api to get all data

app.get("/services/all", async (req, res)=> {
    const cursor = serviceCollection.find();
    const productData = await cursor.toArray();
    // console.log(productData)
    res.send(productData);
})

// created api to get my service data
app.get("/my_services", async (req, res)=> {
    const cursor = addedServiceCollection.find();
    const myServices = await cursor.toArray();
    // console.log(productData)
    res.send(myServices);
})

// created api to get banner data
app.get("/new_product/all", async (req, res)=> {
    const cursor = newserviceCollection.find();
    const bannerData = await cursor.toArray();
    // console.log(productData)
    res.send(bannerData);
})

// created api to get banner data
app.get("/facilities/all", async (req, res)=> {
    const cursor = facilitiesCollection.find();
    const facilitiesData = await cursor.toArray();
    // console.log(productData)
    res.send(facilitiesData);
})




// created api to get product data by id
app.get("/products/type/:id", async (req, res)=> {
    const id = req.params.id;
    const query = {type: id}
    const cursor = await serviceCollection.find(query);
    const productData = await cursor.toArray();
    // const userData = await cursor.toArray();
    res.send(productData);
})



// created api to add products
app.post("/service_add" , async (req, res)=> {
    console.log(req.body)

    const productData = req.body;

    const result = await addedServiceCollection.insertOne(productData);
    console.log(result);
    
    
    res.send(result);
})

// created api to update product data by id
app.put("/products/update/:id", async (req, res)=> {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};

    const updatedData = {
      $set: req.body,
    };

    console.log(updatedData)

    const options = {upsert: true}

    const result = await serviceCollection.updateOne(query, updatedData, options);

    console.log(result);
    res.send(result)
})

// created api to add user
app.post("/users", async (req, res)=> {
    console.log(req.body)

    const cursor = usersCollection.find();
    const allUsers = await cursor.toArray();
    
    const productData = req.body;
    const userIndex = allUsers.findIndex((item)=> item.email === productData.email);

    if(userIndex >= 0){
      
      res.status(200).send({message: "user login successfully"});
      
    }else{
      const result = await usersCollection.insertOne(productData);
      console.log(result);
      
      res.send(result);

    }

})

// created api to detect current user
app.get("/users/all", async (req, res)=> {
    const cursor = usersCollection.find();
    const userData = await cursor.toArray();
    // console.log(productData)
    res.send(userData);
})

// created api to detect current user
app.get("/users/:id", async (req, res)=> {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)}
    const userData = await usersCollection.findOne(query);
    // const userData = await cursor.toArray();
    // console.log(productData)
    res.send(userData);
})


// created api to add new user
app.post("/users/add", async (req, res)=> {
  console.log(req.body)

  const cursor = usersCollection.find();
  const allUsers = await cursor.toArray();
  
  const productData = req.body;
  const userIndex = allUsers.findIndex((item)=> item.email === productData.email);

  if(userIndex >= 0){
    
    res.status(200).send({message: "user login successfully"});
    
  }else{
    const result = await usersCollection.insertOne(productData);
    console.log(result);
    
    res.send(result);

  }

})

// created api to detect current user
app.post("/users/current-user", async (req, res)=> {
    const query = req.body;
    // const query = {_id: new ObjectId(id)}
    const userData = await usersCollection.findOne(query);
    // const userData = await cursor.toArray();
    res.send(userData);
})

// created api to update user
app.put("/users/update/:id", async (req, res)=> {
    const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const userData = await usersCollection.findOne(query);
    // const userData = await cursor.toArray();
    let updatedData = {};
    if(userData.products){
      const productId = req.body._id;
      const productIndex = userData.products.findIndex((item)=> item._id === productId);
      
      if(productIndex >= 0){
        userData.products.splice(productIndex, 1, req.body);
        updatedData = {
          $set: {products: userData.products},
        };
      }else{
        const newProduct = [...userData.products, req.body];
        updatedData = {
          $set: {products: newProduct},
        };
      }
      
    }else{
      updatedData = {
        $set: {products: [req.body]},
      };
      
    }
    const options = {upsert: true}

    const result = await usersCollection.updateOne(query, updatedData, options);

    console.log(result);
    res.send(result)
})


app.delete("/users/delete/:id", async (req, res)=> {
  const id = req.params.id;
    const query = {_id: new ObjectId(id)};
    const userData = await usersCollection.findOne(query);
  // const userData = await cursor.toArray();

  const productId = req.body.productId;

  const filterProducts = userData.products.filter((item)=> item._id !== productId);
  console.log(productId);
  console.log(productId);
  
  const updatedData = {
    $set: {products: filterProducts},
  };
  const options = {upsert: true}

  const result = await usersCollection.updateOne(query, updatedData, options);

  res.send(result)

})

app.listen(port, () => {
    console.log(`server listening on ${port}`)
})
