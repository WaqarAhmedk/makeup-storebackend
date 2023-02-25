
const mongoose=require("mongoose");
const dbName="makeupstore";
const conUrl=`mongodb+srv://waqar:waqar@cluster0.2utvwps.mongodb.net/${dbName}?retryWrites=true&w=majority`;




const connectDB = async () => {
    try {
        mongoose.set("strictQuery", true);

        mongoose.connect(conUrl).then(()=>{
            console.log("Connected with Db Successfully");
        });

    } catch (error) {
        console.log("Something bad hapend in db connnection"+error);
    }
};
module.exports = connectDB;



