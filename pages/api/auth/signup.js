import { userService } from "@/services/services";
import bcrypt from "bcrypt"


export default async function signup (req,res){
    const {userName, password, email} = req.body
    switch (req.method) {
        case "POST":{
            try {
                if(userName || password){
                    const userExist = await userService.getById({
                        userName: userName
                    })
                    if(userExist) {
                        console.log("usuario ya registrado")
                        return res.redirect('/')
                    }
                    const passEncript = await bcrypt.hash(password, 10);
                    await userService.save({
                        userName,
                        password: passEncript,
                        email
                    })
                    res.redirect('/')
                }else{
                    res.json({"error": "usuario o contraseña invalido"});
                }
            } catch (error) {
                console.log(error)
            }
        }
        default:
            res.json({error: "error de servidor"})
    }
}