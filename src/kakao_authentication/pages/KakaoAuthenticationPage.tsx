import React from "react";
import { useNavigate } from "react-router-dom";
import KakaoLoginButton from "../ui/components/KakaoLoginButton";
import env from "../../env";

const KakaoAuthenticationPage: React.FC = () => {
    const navigate = useNavigate();

    const handleKakaoLogin = () => {
        if (!env.api.KAKAO_AUTH_URL) {
            console.error("KAKAO_AUTH_URL is not defined");
            return;
        }
        window.location.href = env.api.KAKAO_AUTH_URL;
    };

    return (
        <div
            style={{
                width: "100%",
                maxWidth: "320px",    // 원하는 최대 너비 (Tailwind max-w-xs)
                margin: "0 auto",     // 가로 중앙 정렬
                minHeight: `calc(100vh)`,
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

export default KakaoAuthenticationPage;
