import React from "react";
import { useNavigate } from "react-router-dom";
import KakaoLoginButton from "../ui/components/KakaoLoginButton";

const SocialAuthenticationButtons: React.FC = () => {
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        navigate("/kakao-authentication/login"); // 위에서 만든 KakaoLoginPage로 이동
    };

    return (
        <div
            className="flex flex-col w-full max-w-xs mx-auto"
            style={{
                minHeight: `calc(100vh - 64px)`,
                gap: '1rem',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            <KakaoLoginButton provider="kakao" onClick={handleKakaoLogin} />
        </div>
    );
};

export default SocialAuthenticationButtons;
