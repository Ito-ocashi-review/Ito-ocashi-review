import handler from '../handler';
import Sweet from '../../../models/Sweet';

//TODO validation
handler.post(async(req,res)=>{
    const { name } = req.body;

    try{
        const sweet = await Sweet.create({ name });
        return res.status(200).json(sweet)
    }
    catch(error){
        return res.status(500).json({error:error.message});
    }
})