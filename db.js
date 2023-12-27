import { MongoClient } from "mongodb"

const mongostring = "mongodb://127.0.0.1:27017"

 export async function dbconnection(){
    const client = new MongoClient(mongostring)
    await client.connect()
    console.log("mongodb connected sucessfully")
    return client
}
 