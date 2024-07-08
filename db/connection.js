import mongoose from "mongoose"

const connectDB=()=>{
    mongoose.connect("mongodb+srv://riyakhandelwal1401:riya1234@bloging.p8o1hbk.mongodb.net/bloging")
    
.then(()=>{
    console.log("successfully connected to mongodb")
}).catch((e)=>{
    console.log(e)
})
}

export default connectDB;
