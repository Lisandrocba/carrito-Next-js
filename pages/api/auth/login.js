import { userService } from "@/services/services";
import bcrypt from "bcrypt"

export default async function Login (req,res){
    const {userName, password} = req.body
    switch (req.method) {
        case "POST":{
            try {
                const userDB = await userService.getById({userName})
                if(!userDB) return res.json({error: "El usuario no existe"})
                const result = await bcrypt.compare(password, userDB.password)
                if(!result) return res.json({error: "Usuario o contraseña erronea"})
                return res.redirect('/home')
            } catch (error) {
                console.log(error)
            }
        }

        default:
            res.json({error: "error de servidor"})
    }
}