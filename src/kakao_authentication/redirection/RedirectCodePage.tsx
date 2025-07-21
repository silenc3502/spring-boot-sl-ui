import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import axiosInst from "../../utility/AxiosInst";

const RedirectCodePage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const handleKakaoLogin = async () => {
            const urlParams = new URLSearchParams(window.location.search);
            const code = urlParams.get("code");

            if (!code) {
                console.error("Kakao authorization code not found.");
                navigate("/login");
                return;
            }

            try {
                const res = await axiosInst.springAxiosInst.get("/kakao-authentication/login", {
                    params: { code },
                });

                const {
                    newUser,
                    token,
                    nickname,
                    email,
                    loginType,
                } = res.data;

                // ✅ accessToken 저장
                localStorage.setItem("userToken", token);

                if (newUser) {
                    // 신규 사용자 → 약관 동의 페이지로 이동
                    navigate("/signup/agreement", {
                        state: {
                            nickname,
                            email,
                            loginType,
                            token,
                        },
                    });
                } else {
                    // 기존 사용자 → 로그인 완료 페이지로 이동
                    navigate("/");
                }
            } catch (err) {
                console.error("카카오 로그인 실패", err);
                navigate("/login");
            }
        };

        handleKakaoLogin();
    }, [navigate]);

    return <div>로그인 처리 중입니다...</div>;
};

export default RedirectCodePage;