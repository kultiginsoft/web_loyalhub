import apiInstance from "./baseInstance";
import RequestMethod from "../app/models/requestMethod";
import Endpoint from "../app/models/endpoint";
import User from "../app/models/User";

const getUser = async () => {
    try {
        const user = await apiInstance(Endpoint.getUser, RequestMethod.GET);
        return User.fromJson(user);
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};

export default getUser;
