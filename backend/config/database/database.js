import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config()

const DBConnection = () => {
    // const url = process.env.DB_URI

    mongoose.connect("mongodb+srv://ShaheerShahzad:ShaheerDev@ecommerce.w8dyp.mongodb.net/ForeverFashion?retryWrites=true&w=majority", { useNewUrlParser: true }).then((result) => {
        console.log(`DATABASE CONNECTED WITH THE HOST ${result.connection.host}`)
    })

    // .catch((err) => {
    //     console.error(err)
    // });

}

export default DBConnection