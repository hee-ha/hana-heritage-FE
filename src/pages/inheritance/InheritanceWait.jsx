import React, { useRef, useEffect } from "react";
import Video from "../../assets/mp4/heritage.mp4";
import "aos/dist/aos.css"; // AOS CSS 파일 가져오기
import AOS from "aos";

function InheritanceWait() {
  const videoRef = useRef();

  useEffect(() => {
    AOS.init({
      duration: 1000, // 애니메이션 지속 시간 (밀리초)
      once: false, // 애니메이션이 반복 실행되도록 설정
    });

    const handleResize = () => {
      const video = videoRef.current;
      if (!video) return; // 비디오 요소가 없을 경우를 대비한 예외 처리
      const { innerWidth, innerHeight } = window;
      const aspectRatio = video.videoWidth / video.videoHeight;
      const windowRatio = innerWidth / innerHeight;

      if (windowRatio > aspectRatio) {
        video.style.width = "100%";
        video.style.height = "auto";
      } else {
        video.style.width = "auto";
        video.style.height = "100%";
      }
    };

    const handleLoadedMetadata = () => {
      handleResize();
    };

    const video = videoRef.current;
    if (video) {
      video.addEventListener("loadedmetadata", handleLoadedMetadata);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      if (video) {
        video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <video
        muted
        autoPlay
        loop
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={Video} type="video/mp4" />
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>
      <div className="relative h-screen flex items-center justify-center z-10">
        <h1 className="text-white text-center font-hana2 font-bold text-7xl">
          유언대용신탁 심사 진행중입니다.
        </h1>
      </div>
    </div>
  );
}

export default InheritanceWait;
