"use client";

import React, { useEffect, useState } from "react";
import "@/styles/sign-form.css";
import LoginForm from "@/components/auth/sign/LoginForm";
import RegisterForm from "@/components/auth/sign/RegistrationForm";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const SectionSign: React.FC = () => {
    const [isCreatingAccount, setIsCreatingAccount] = useState(false);

    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push('/');
        }
    }, [status, router]);

    return (
        <div className="container-signPage">
            <div className={`formContainer ${isCreatingAccount ? 'rightPanelActive' : ''}`}>
                <div
                    className="signInContainer"
                    style={{background: "url('/assets/image/background/nebuleuse.png') center center / cover no-repeat"}}
                >
                    <LoginForm onSwitchToCreate={() => setIsCreatingAccount(true)} />
                </div>
                <div
                    className="signUpContainer"
                    style={{background: "url('/assets/image/background/pulsar.png') center center / cover no-repeat"}}
                >
                    <RegisterForm onSwitchToSignIn={() => setIsCreatingAccount(false)} />
                </div>
                <div className="overlayContainer">
                    <div className="overlay">
                        <div className="overlayPanel overlayLeft">
                            <h2
                                className="font-bold text-4xl"
                            >Bienvenue sur {` `}
                                <span
                                    className="font-merriweather"
                                >
                                    Mon portfolio
                                </span>
                            </h2>
                            <p>Pour rester connecter, enregistrer vos informations personnelles</p>
                            <button className="mt-5 rounded-lg bg-none border border-white text-white text-lg px-12 py-3 cursor-pointer" onClick={() => setIsCreatingAccount(false)}>Connectez vous</button>
                        </div>
                        <div className="overlayPanel overlayRight">
                            <h2
                                className="font-bold text-4xl font-merriweather"
                            >Mon portfolio</h2>
                            <p>Entrez vos informations personnelles</p>
                            <button className="mt-5 rounded-lg bg-none border border-white text-white text-lg px-12 py-3 cursor-pointer" onClick={() => setIsCreatingAccount(true)}>Créer un compte</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SectionSign;