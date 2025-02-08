const BASE_URL = "http://localhost:8080";

const apiInstance = async (endpoint, method, options = {}) => {
    const defaultHeaders = {
        "Content-Type": "application/json",
        Accept: "application/json",
    };

    const config = {
        method: method,
        headers: {...defaultHeaders, ...options.headers},
        ...options,
    };

    try {
        const response = await fetch(`${BASE_URL}${endpoint}`, config);
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("API Fetch Error:", error);
        return null;
    }
};

export default apiInstance;