"use client";

import React, { Suspense } from 'react';
import ResetForm from "@/components/auth/forgot/ResetForm";

const ChangePassword: React.FC = () => {

    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <Suspense fallback={<div>Chargement...</div>}>
                <ResetForm />
            </Suspense>
        </main>
    );
};

export default ChangePassword;
