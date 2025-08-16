require('dotenv').config();
const express = require('express');
const app = express();
const PORT=process.env.PORT || 5010;
app.use(express.json());
const routes = require('./src/routes');
app.use('/api', routes);



app.get('/',(req,res)=>{
    res.send("api is running ...");
});
console.log("env---", process.env.DATABASE);

app.listen(PORT,()=>{
    console.log(`server running at ${PORT}`);
});
