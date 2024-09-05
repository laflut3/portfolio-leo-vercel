"use client";

import LoginForm from '@/components/auth/LoginForm';

const LoginPage: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <LoginForm/>
        </main>
    );
};

export default LoginPage;
