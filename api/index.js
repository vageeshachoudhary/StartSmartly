import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const uri =
  "mongodb+srv://vageesha:DouglaS2698@cluster0.pky66vz.mongodb.net/admin?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const app = express();
app.use(express.json());
const port = 3000;


function generateRandomId(length = 24) {
  const characters = "0123456789abcdef";
  let id = "";
  for (let i = 0; i < length; i++) {
    id += characters[Math.floor(Math.random() * characters.length)];
  }
  return id;
}

app.get("/getuserprofiles", async (req, res) => {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the collection and retrieve the data
    const collection = client
      .db("start_smartly")
      .collection("user_profile_data");
    const data = await collection.find().toArray();

    res.send(data);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: 'Error fetching user profiles' });
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.post("/getuserprofiledata", async (req, res) => {
  const userProfileId = req.body.userProfileID;
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the collection and retrieve the data
    const collection = client
      .db("start_smartly")
      .collection("user_profile_data");
    const data = await collection.find({ _id: userProfileId }).toArray();

    res.send(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});



app.post("/insertuserprofiledata", async (req, res) => {
  const userProfileData = {
    ...req.body,
    _id: generateRandomId()
  };

  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the collection and retrieve the data
    const collection = client
      .db("start_smartly")
      .collection("user_profile_data");
    const data = await collection.insertOne(userProfileData);

    res.send(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.post("/updateuserprofiledata", async (req, res) => {
  const userProfileData = req.body;
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the collection and retrieve the data
    const collection = client
      .db("start_smartly")
      .collection("user_profile_data");
    const data = await collection.updateOne({ _id: userProfileData._id }, { $set: userProfileData });

    res.send(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.post("/getuserlogindata", async (req, res) => {
  const userEmailId = req.body.userEmailId;
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Access the collection and retrieve the data
    const collection = client
      .db("start_smartly")
      .collection("user_profile_data");
    const data = await collection.find({ email: userEmailId }).toArray();

    res.send(data);
  } catch (error) {
    console.log(error);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
export default app;
