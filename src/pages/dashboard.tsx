import React, { useState } from "react";

import Header from "@/components/headers/header";
import DashboardBg from "@/components/backgrounds/dashboardBg";
import DashboardContainer from "@/components/containers/dashboardContainer";
import AuthModalBg from "@/components/modals/auth/authModalBg";

import UserRoleModal from "@/components/modals/auth/userRoleModal";
import UserInfoModal from "@/components/modals/auth/userInfoModal";
import ArtistSecModal from "@/components/modals/auth/artist2Modal";

const SignIn = () => {
    const [modalPage, setModalPage] = useState('role');
    const [userRole, setUserRole] = useState('');

    return (
        <DashboardContainer>
            <Header />
            <DashboardBg>
                <AuthModalBg>
                    {
                        modalPage === 'role' && <UserRoleModal userRole={userRole} setModalPage={setModalPage} setUserRole={setUserRole} />
                    }
                    {
                        modalPage === 'info' && <UserInfoModal userRole={userRole} setModalPage={setModalPage} />
                    }
                    {
                        modalPage === 'artist-2' && <ArtistSecModal />
                    }
                </AuthModalBg>
            </DashboardBg>
        </DashboardContainer>
    );
}

export default SignIn;
