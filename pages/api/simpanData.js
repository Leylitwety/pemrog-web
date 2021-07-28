import { db } from "../../lib/db";

const handler = async(req, res)=>{
    const {confirm, dirawat, sembuh, meninggal, suspect} = req.body;
    try{
        if(!confirm || !dirawat || !sembuh || !meninggal || !suspect){
            return res.status(400).json({message: 'Input harus diisi semua'})
        }
        const result = await db.query(`UPDATE covid SET confirm = ?, dirawat = ?, sembuh = ?, meninggal = ?, suspect = ? WHERE id_data = 0`,
        [confirm, dirawat, sembuh, meninggal, suspect])
        await db.end;
        return res.json(result)
    }catch (e){
        res.status(500).json({message: e.message});
    }

}
export default handler