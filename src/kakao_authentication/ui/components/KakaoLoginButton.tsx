import React, { useState } from "react";
import KakaoIcon from "../../../assets/kakao_logo.png";

import "./KakaoLoginButton.css";

type Provider = "kakao";

interface Props {
    provider: Provider;
    onClick?: () => void;
}

const providerConfig: Record<
    Provider,
    {
        src: string;
        label: string;
        baseBgColor: string;
        textColor: string;
        borderColor: string;
        hoverBgColor: string;
    }
> = {
    kakao: {
        src: KakaoIcon,
        label: "카카오 로그인",
        baseBgColor: "#FEE500",
        textColor: "#000000",
        borderColor: "#FACC15",
        hoverBgColor: "#FFD600",
    },
};

const KakaoLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    const { src, label, baseBgColor, textColor, borderColor, hoverBgColor } = providerConfig[provider];
    const [hover, setHover] = useState(false);

    const style: React.CSSProperties = {
        backgroundColor: hover ? hoverBgColor : baseBgColor,
        color: textColor,
        border: `1px solid ${borderColor}`,
    };

    return (
        <button
            className="social-login-button"
            style={style}
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            <img src={src} alt={`${provider} icon`} className="social-login-icon" />
            <span className="social-login-label">{label}</span>
        </button>
    );
};

export default KakaoLoginButton;
