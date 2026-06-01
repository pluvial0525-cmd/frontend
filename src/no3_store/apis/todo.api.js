import axios from "axios";

const BASE_URL = "http://localhost:3001/todos";

export const todoAllGetApi = async () => {
    try {
        const response = await axios.get(BASE_URL);
        return response.data;
    } catch (error) {
        console.error("API GET Error:", error.message);
        return []; 
    }
};

export const todoPostApi = async (dataObj) => {
    try {
        const response = await axios.post(BASE_URL, dataObj);
        return response.data;
    } catch (error) {
        console.error("API POST Error:", error.message);
        throw error;
    }
};

export const todoPutApi = async (dataObj) => {
    try {
        const response = await axios.put(`${BASE_URL}/${dataObj.id}`, dataObj);
        return response.data;
    } catch (error) {
        console.error("API PUT Error:", error.message);
        throw error;
    }
};

export const todoDeleteApi = async (id) => {
    try {
        const response = await axios.delete(`${BASE_URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("API DELETE Error:", error.message);
        throw error;
    }
};