import { MongoClient } from "mongodb";

const {
  MONGODB_URL = "",
  MONGODB_DB_NAME = "",
  MONGODB_COLLECTION_USERS = "",
} = process.env;

// Crea una instancia del cliente MongoDB fuera de las funciones
const client = new MongoClient(MONGODB_URL);

// Función para conectar a MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Conectado a MongoDB");
  } catch (error) {
    console.error("Error al conectar a MongoDB:", error);
    // Manejar el error adecuadamente, por ejemplo, lanzar una excepción o detener la aplicación.
  }
}

// Llamada a la función de conexión al inicio de la aplicación o en la función lambda
connectToMongo();

// Función para realizar la inserción en la base de datos
const signUpMongodb = async (user) => {
  const db = client.db(MONGODB_DB_NAME);
  const usersCollection = db.collection<any>(MONGODB_COLLECTION_USERS);
  const result = await usersCollection.insertOne(user);
  console.log(`Usuario insertado con ID: ${result.insertedId}`);
  return result;
};

export { signUpMongodb, connectToMongo };
