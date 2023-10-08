const express = require('express');
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
require('./config/mongoose.config')
app.use(cors({credentials:true, origin:'http://localhost:5173'}));
app.use(express.json(), express.urlencoded({ extended:true }));
app.use(cookieParser())


const userRoutes = require('./routes/user.routes');
const movieRoutes = require('./routes/movie.routes');

userRoutes(app);
movieRoutes(app);

app.listen(8000, () => {
    console.log("Listening at Port 8000")
})

