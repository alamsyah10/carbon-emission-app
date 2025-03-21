import axios, { AxiosError } from "axios";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_GATEWAY_URL || "https://your-api-gateway.com";

export const api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

export const login = async (email: string, password: string) => {
    try {
        const response = await api.post("/auth/login", { email, password });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw error.response?.data || "Login failed.";
        }
        throw new Error("An unknown error occurred");
    }
};

export const register = async (name: string, email: string, password: string) => {
    try {
        const response = await api.post("/auth/register", { name, email, 'hashed_password': password });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw error.response?.data || "Registration failed.";
        }
        throw new Error("An unknown error occurred");
    }
};

export const fetchEmissionSourceType = async (token: string) => {
    try {
        console.log("token  your tokennn", token);
        const response = await api.get("/emission-sources", { headers: { 'Authorization': `Bearer ${token}` } });
        return response.data;
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            throw error.response?.data || "Fetch emission sources failed.";
        }
        throw new Error("An unknown error occurred");
    }
};
