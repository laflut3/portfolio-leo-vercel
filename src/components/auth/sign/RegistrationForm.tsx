import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FormEvent, useRef, useState } from "react";
import { register } from "@/../Lib/UserLib/actions/register";

const RegisterForm: React.FC<{ onSwitchToSignIn: () => void }> = ({ onSwitchToSignIn }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState<string>();
    const ref = useRef<HTMLFormElement>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        const formData = new FormData(ref.current!);
        const r = await register({
            nom: formData.get("nom"),
            prenom: formData.get("prenom"),
            username: formData.get("username"),
            dateOfBirth: formData.get("DateOfBirth"),
            email: formData.get("email"),
            password: formData.get("password"),
        });
        ref.current?.reset();
        if (r?.error) {
            setError(r.error);
            return;
        } else {
            console.error("l'enregistrement a échoué")
        }
    };

    return (
        <form className="mt-8 space-y-6" ref={ref} onSubmit={handleSubmit}>
            {error && <div className="">{error}</div>}
            <div className="rounded-md shadow-sm space-y-4">
                <div>
                    <label className="sr-only">Nom</label>
                    <input
                        type="text"
                        placeholder="Nom"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        name="nom"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Prenom</label>
                    <input
                        type="text"
                        placeholder="Prénom"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        name="prenom"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Username</label>
                    <input
                        type="text"
                        placeholder="Username"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        name="username"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">Date de naissance</label>
                    <input
                        type="date"
                        placeholder="Date de naissance"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 rounded-t-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        name="DateOfBirth"
                        required
                    />
                </div>
                <div>
                    <label className="sr-only">address Email</label>
                    <input
                        type="email"
                        placeholder="Adresse Email"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-t-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        name="email"
                        required
                    />
                </div>

                <div className="relative">
                    <label className="sr-only">Password</label>
                    <input
                        id="passwordRegister"
                        name="password"
                        type={showPassword ? "text" : "password"}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 rounded-b-md focus:outline-none focus:ring-[#0C388D] focus:border-[#0C388D] focus:z-10 sm:text-sm"
                        placeholder="Mot de passe"
                        required
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="text-gray-500 focus:outline-none focus:text-gray-700"
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                    </div>
                </div>
            </div>

            <div className="text-sm">
                <button
                    type="button"
                    onClick={onSwitchToSignIn}
                    className="font-medium text-#0C388D hover:text-#0C388D"
                >
                    Vous avez déja un compte ?
                </button>
            </div>

            <div>
                <button
                    type="submit"
                    className="w-full bg-secondary py-2 rounded-lg text-white font-merriweather hover:bg-primary"
                >
                    Créer un compte
                </button>
            </div>
        </form>
    );
};

export default RegisterForm;
