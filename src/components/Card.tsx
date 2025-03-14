// src/components/ui/Card.tsx
import React from "react";

interface CardProps {
    children: React.ReactNode;
    className?: string;
}

const Card: React.FC<CardProps> = ({ children, className = "" }) => {
    return (
        <div className={`w-full max-w-md p-6 bg-white rounded-2xl shadow-lg ${className}`}>
            {children}
        </div>
    );
};

const CardContent: React.FC<CardProps> = ({ children }) => {
    return <div className="space-y-4">{children}</div>;
};

export { Card, CardContent };
