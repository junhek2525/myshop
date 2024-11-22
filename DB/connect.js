const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://text:gwdys2851@cluster0.gm3l14g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    } catch (error){
        throw new Error("Connection Failed!");
    }

}
module.exports = connectDB;