const express = require("express");

const app = express();

const PORT= process.env.PORT || 3000;

const cors = require('cors');
app.use(cors());

app.use(express.json());
const bodyParser = require("body-parser");
const User = require("./models/task");
app.use(bodyParser.urlencoded({extended: true}));
const sequelize = require("./db/connect")
const userRoutes = require("./routes/task");

app.set('view engine', 'hbs');
app.set('views', 'views');
app.get('/', (req, res) =>{
    res.send("hello from expanse");
});

app.use('/api/task', userRoutes);


sequelize.sync()
.then(result =>{
    // console.log(result);
}).catch(error =>{
    console.log(error);
})

const start = ()=>{
    try{
        app.listen(PORT, ()=>{
            console.log(`${PORT} now you are connected`);
        })

    }catch(error){
        console.log(error);
    }
}

start();