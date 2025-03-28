// src/components/ui/Button.tsx
import React from "react";

interface ButtonProps {
    onClick: () => void;
    children: React.ReactNode;
    className?: string;
}

const Button: React.FC<ButtonProps> = ({ onClick, children, className = "" }) => {
    return (
        <button
            onClick={onClick}
            className={`py-3 px-6 rounded-full font-semibold transition-colors focus:outline-none ${className}`}
        >
            {children}
        </button>
    );
};

export default Button;
