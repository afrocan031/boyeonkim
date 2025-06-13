// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // 페이지 맨 위로 스크롤
  }, [pathname]); // 경로가 바뀔 때마다 실행

  return null;
};

export default ScrollToTop;
