// src/pages/AuthPage.tsx
"use client";

import { useState } from "react";
import Button from "../components/Button"; 
import Input from "../components/Input"; 
import { Card, CardContent } from "../components/Card"; 
import axios from "axios";
import { useRouter } from "next/navigation";
import {login, register} from "../utils/api";

const AuthPage: React.FC = () => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");
    const router = useRouter();

    const handleAuth = async () => {
        try {
            if (isLogin) {
            	const token = await login(email, password);
                localStorage.setItem("token", token);
                router.push("/dashboard");
            } else {
            	const registerResponse = await register(name, email, password);
            }
            alert(isLogin ? "Login successful!" : "Registration successful!");
        } catch (err) {
            setError("Authentication failed. Check your credentials.");
        } finally {
        	setIsLogin(true);
        }
    };

    return (
        <div className="flex items-center justify-center bg-gray-100">
            <Card className="max-w-sm p-6 space-y-6">
                <h2 className="text-3xl font-semibold text-center text-blue-500">
                    {isLogin ? "Sign in to GX Carbon" : "Create your account"}
                </h2>
                <CardContent>
                    {!isLogin && (
                        <Input
                            type="text"
                            placeholder="Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mb-4"
                        />
                    )}

                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="mb-4"
                    />
                    <Input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="mb-4"
                    />
                    {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
                    <Button
                        onClick={handleAuth}
                        className="w-full bg-blue-500 hover:bg-blue-600 text-white"
                    >
                        {isLogin ? "Log In" : "Sign Up"}
                    </Button>
                    <p className="mt-4 text-center text-sm text-gray-600">
                        {isLogin ? "Don't have an account? " : "Already have an account? "}
                        <span
                            className="text-blue-500 cursor-pointer hover:underline"
                            onClick={() => {
                                setIsLogin(!isLogin);
                                setError(""); // Reset error when switching
                            }}
                        >
                            {isLogin ? "Sign up" : "Sign in"}
                        </span>
                    </p>
                </CardContent>
            </Card>
        </div>
    );
};

export default AuthPage;
