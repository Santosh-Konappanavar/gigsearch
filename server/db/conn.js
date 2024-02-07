const mongoose = require("mongoose")

const DB = "mongodb+srv://ssk21m:santoshk@cluster0.qisdrkt.mongodb.net/gigsearch?retryWrites=true&w=majority"

mongoose.connect(DB
// {
//     useUnifiedTopology:true,
//     useNewUrlParser:true
// }
).then(()=> console.log("DataBase  connected")).catch((errr)=>{
    console.log(errr);
})