import { connect } from "mongoose";
import User from './models/User';

async function connectDb() {
	const db = await connect("mongodb://localhost:27017/typegoosedb");
    console.log("Connected to DB " + db.connection.name);
}

connectDb();

const user = new User({
    firstname: "John",
    lastname: "Doe",
    email: "John@gmail.com",
    password: "dededefr",
});
