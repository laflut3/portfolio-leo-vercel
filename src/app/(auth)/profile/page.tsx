"use client";

import SectionProfile from "@/components/auth/profile/SectionProfile";

const ProfilePage: React.FC = () => {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
            <SectionProfile/>
        </main>
    );
};

export default ProfilePage;
