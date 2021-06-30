const { default: axios } = require("axios");
const express = require("express");
const redis = require("redis");


const PORT = process.env.PORT || 5000;

const app = express();

// const baseUrl = 

app.get('/', async (req,res)=>{
    const response = await axios.get()
})

app.listen(PORT, ()=>{
    console.log(`server is running on port: ${PORT}`);
})


// ReactDOM.render(
//     <App baseUrl={'http://localhost:####/odata.rsc'} user={'USER_NAME_HERE'} pass={'AUTHTOKEN_HERE'} />, 
//     document.getElementById('app')
//   );