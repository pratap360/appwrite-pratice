import { Client,Account,Database } from "appwrite";

const client = new Client();

client.setEndpoint("https://cloud.appwrite.io/v1").setProject("6412c96c262429aee354")

export const accounts = new Account(client)

// database 

export const database = new Database(client,"6432e7f12892ed506364")