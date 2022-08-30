import mongoose from 'mongoose';


mongoose.connect("mongodb+srv://gabrielvfdelgado:teste123@expressnode.ddxt0g2.mongodb.net/node-learning");

let db = mongoose.connection;

export default db;