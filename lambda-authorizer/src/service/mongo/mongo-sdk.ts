import { MongoClient, Collection } from "mongodb";

const url = "mongodb://localhost:27017"; // URL de tu servidor MongoDB
const client = new MongoClient(url);
let usersCollection: Collection<any>;

async function connectToMongo() {
  await client.connect();
  const db = client.db("gestion"); // Reemplaza 'mydb' con el nombre de tu base de datos
  usersCollection = db.collection<any>("users");
  return usersCollection;
}

const signUpMongodb = async (user) => {
  const usersCollection = await connectToMongo();
  const res = async function insertUser() {
    const result = await usersCollection.insertOne(user);
    console.log(`Usuario insertado con ID: ${result.insertedId}`);
  };

  return await res();
};

// Llama a connectToMongo para establecer la conexión antes de usar usersCollection.

export { connectToMongo, signUpMongodb };
