"use client";

import SectionProfile from "@/components/auth/profile/SectionProfile";
import SectionUserOrder from "@/components/auth/profile/SectionUserOrder";

const ProfilePage: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <SectionProfile/>
            <SectionUserOrder/>
        </main>
    );
};

export default ProfilePage;
