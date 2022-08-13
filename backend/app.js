import express from "express";
import ProductRoute from "./Routes/Product/Product.js";
import bodyParser from "body-parser";
import cors from "cors"
import ErrorMiddleware from "./middleware/error.js";
import UserRoute from "./Routes/User/User.js";
import cookieParser from "cookie-parser";
import fileUpload from "express-fileupload"
import OrderRoute from "./Routes/Order/Order.js";
import helmet from "helmet";

import * as path from 'path'

const app = express()

app.use(
    cors({
        origin: true,
        credentials: true,
    })
)
app.use(helmet())
// app.use(bodyParser.urlencoded({
//     extended: true
// }))

app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));

// app.use(bodyParser.json())
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }))

app.use("/products", ProductRoute)
app.use("/user", UserRoute)
app.use("/order", OrderRoute)



app.use(express.static(path.join(path.dirname("../frontend/build"))))

app.get("*", (req, res) => {
    res.sendFile(path.resolve(path.dirname("../frontend/build/index.html")))
})



// Error  🤦‍♂️🤦‍♂️


app.use((req, res) => {
    res.status(404).json({
        Error: "🤬🤬🤬🤬🤬🤬 URL Not Found 🤬🤬🤬🤬🤬🤬"
    })
})

// Errormiddleware
app.use(ErrorMiddleware)




export default app