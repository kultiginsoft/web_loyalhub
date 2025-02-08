import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const createBaseInstance = () => {
    const instance = axios.create({
        baseURL: BASE_URL,
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    });

    instance.interceptors.response.use(handleResponse, handleError);
    return instance;
};

export const request = createBaseInstance();

function handleError(error) {
    console.error("API Request Error:", error.message);
    throw error;
}

function handleResponse(response) {
    return response.data;
}
