// src/components/ui/Input.tsx
import React from "react";

interface InputProps {
    type: string;
    placeholder: string;
    value: string;
    onChange: React.ChangeEventHandler<HTMLInputElement>;
    className?: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder, value, onChange, className = "" }) => {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`w-full p-3 rounded-full border-2 border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none ${className}`}
        />
    );
};

export default Input;
