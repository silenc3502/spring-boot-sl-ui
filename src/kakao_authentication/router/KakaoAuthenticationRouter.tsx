import React, { Suspense } from "react";
import {Routes, Route} from "react-router-dom";
import KakaoAuthenticationPage from "../pages/KakaoAuthenticationPage";
import SignupAgreementPage from "../pages/SignupAgreementPage";
import SignupSummaryPage from "../pages/SignupSummaryPage";

const KakaoAuthenticationRouter = () => {
    return (
        <Suspense fallback={<div>로딩중 ........</div>}>
            <Routes>
                <Route path="/authentication/login" element={<KakaoAuthenticationPage/>}/>
                <Route path="/signup-agreement" element={<SignupAgreementPage/>}/>
                <Route path="/signup-summary" element={<SignupSummaryPage />} />
            </Routes>
        </Suspense>
    );
};

export default KakaoAuthenticationRouter;