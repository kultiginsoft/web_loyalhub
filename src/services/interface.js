import {request} from "./config";
import Endpoint from "../app/models/endpoint";
import RequestMethod from "../app/models/requestMethod";

export const apiRequest = (endpoint, method, options = {}) =>
    request({
        url: endpoint,
        method,
        ...options,
    });

export const getUser = () => apiRequest(Endpoint.getUser, RequestMethod.GET);
