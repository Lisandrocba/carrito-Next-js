export default class User{
    constructor(data){
        this.data = data
    }

    static get model(){
        return "User"
    }

    static get schema(){
        return{
            userName : String,
            password : String,
            email: String,
        }
    }
}