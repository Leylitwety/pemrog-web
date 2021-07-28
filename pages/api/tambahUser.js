import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const {nama, username, password, email} = req.body;
    try{
        if(!nama || !username || !password ||  !email ){
            return res.status(400).json({message: 'Input harus di isi semua'})
        }
        const result = await db.query(`INSERT INTO user (nama, username, password, email) VALUES (?,?,?,?)`,[nama, username, password, email])
        await db.end;
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler