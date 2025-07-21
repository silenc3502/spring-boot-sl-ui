import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import KakaoAuthenticationRouter from "./kakao_authentication/router/KakaoAuthenticationRouter";

const App: React.FC = () => {
  return (
      <BrowserRouter>
        <Suspense fallback={<div>로딩중 ........</div>}>
          <Routes>
            {/* /auth/** 경로는 KakaoAuthenticationRouter에 위임 */}
            <Route path="/kakao-authentication/*" element={<KakaoAuthenticationRouter />} />
            <Route path="/" element={<div>메인 페이지</div>} />
          </Routes>
        </Suspense>
      </BrowserRouter>
  );
};

export default App;
