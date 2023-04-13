import Dao from "@/models/Dao.js";
import config from "@/config/config.js";
import UserService from "./user.services";

const dao = new Dao(config.mongo)

export const userService = new UserService(dao);
