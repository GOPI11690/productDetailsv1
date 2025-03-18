const express=require("express");
const routes=require("../Backend/src/routes");

const app= express();
const PORT=3030;



app.use(express.json());
app.use("/",routes);



app.listen(PORT,()=>{
    console.log(`Welcome to Product Details - Server is Running at ${PORT}`);
});

