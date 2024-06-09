import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Webcam from "react-webcam";
import Modal from "react-modal";

const PicComponent = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();

  const navigateToHome = () => {
    navigate("/");
  };

  useEffect(() => {
    let timeout;

    const startAndStopVideoStream = async () => {
      await startVideoStream();
      timeout = setTimeout(() => {
        stopVideoStream();
      }, 3000);
    };

    startAndStopVideoStream();
  }, []);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.75)",
      zIndex: 1000,
    },
    content: {
      backgroundColor: "white",
      zIndex: 1001,
    },
  };

  const startVideoStream = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false,
      });
      setIsCameraOn(true);
      setIsModalOpen(true);
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
        webcamRef.current.play();
      }
    } catch (error) {
      alert("Webcam not working");
    }
  };

  const stopVideoStream = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      webcamRef.current.srcObject.getTracks().forEach((track) => track.stop());
      webcamRef.current.srcObject = null;
    }
    setIsCameraOn(false);
  };

  return (
    <div className="col-sm-8 text-left">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Webcam Modal"
        ariaHideApp={false}
        style={modalStyle}
      >
        {isCameraOn ? (
          <>
            <video
              ref={webcamRef}
              width={"100%"}
              height={"100%"}
              style={{ border: "1px solid #ddd" }}
            />
            <br />
          </>
        ) : (
          <p className="flex  flex-col  items-center mt-10">
            <div className="content">
              <svg width="400" height="400">
                <circle
                  fill="none"
                  stroke="#68E534"
                  strokeWidth="20"
                  cx="200"
                  cy="200"
                  r="150"
                  strokeLinecap="round"
                  transform="rotate(-90 200 200)"
                  className="circle"
                />
                <polyline
                  fill="none"
                  stroke="#68E534"
                  points="88,214 173,284 304,138"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tick"
                />
              </svg>
            </div>
            <button
              type="submit"
              className="col w-1/3 text-white font-hana2 font-semibold text-5xl  bg-hanaRed py-3 px-8 z-10 mt-32 transition-transform transform hover:animate-bubbly rounded-lg"
              onClick={navigateToHome}
            >
              확인
            </button>
          </p>
        )}
      </Modal>
      <br />
    </div>
  );
};

export default PicComponent;
