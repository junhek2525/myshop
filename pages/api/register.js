// import mariadb from 'mariadb'
import User from "@/DB/models";
import connectDB from "@/DB/connect";

// const pool = mariadb.createPool({
//     host:'127.0.0.1',
//     port:3399,
//     user:'root',
//     password:'root1234',
//     database:'user_account',          
//     connectionLimit:5,
// })
export default async function handler(req,res) {
    await connectDB()
    if(req.method === 'POST'){
        const {username, userId, password} = req.body;
        if(!username || !userId || !password)
        {
            return res.status(400).json({error : 'All fields are requied'})
        }
        try{
            const newUser = new User({
                username,
                userId,
                password
            });
            await newUser.save();
            return res.status(201).json({message: "Save successfully"})
        } catch {
            return res.status(500).json({error : "Internal Servser Error"})
        }
        }
    }
    // if(req.method === 'POST')
    // {
    //     try{
    //         const conn = await pool.getConnection();
    //         await conn.query('SELECT * FROM users');
    //         conn.release();
    //         res.status(200).json({message: "connection success"})
    //         // const {username, user_id, password} = req.body;
    //         // console.log(username);
    //     }
    //     catch (error){
    //         console.log("DB error")
    //     }
    // }
    
