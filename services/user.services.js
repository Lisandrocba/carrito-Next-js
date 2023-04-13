import User from "../models/User.js";
import GenericServices from "./genericServices";


export default class UserService extends GenericServices{
    constructor(dao){
        super(dao, User.model)
    }
}