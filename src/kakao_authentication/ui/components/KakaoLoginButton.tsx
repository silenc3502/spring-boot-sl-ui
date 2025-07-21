import React, { useState } from "react";
import KakaoIcon from "../../assets/kakao_logo.png";

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
        border: string;
        hoverBgColor: string;
    }
> = {
    kakao: {
        src: KakaoIcon,
        label: "카카오 로그인",
        baseBgColor: "#FEE500",
        textColor: "text-black",
        border: "border border-yellow-400",
        hoverBgColor: "#FFD600",
    },
};

const KakaoLoginButton: React.FC<Props> = ({ provider, onClick }) => {
    const { src, label, baseBgColor, textColor, border, hoverBgColor } = providerConfig[provider];

    const [hover, setHover] = useState(false);

    return (
        <button
            onClick={onClick}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            className={`flex items-center gap-3 w-full px-4 py-2 rounded-md transition ${textColor} ${border} shadow-sm`}
            style={{ backgroundColor: hover ? hoverBgColor : baseBgColor }}
        >
            <img src={src} alt={`${provider} icon`} className="h-6 w-6 object-contain" />
            <span className="text-sm font-semibold">{label}</span>
        </button>
    );
};

export default KakaoLoginButton;
