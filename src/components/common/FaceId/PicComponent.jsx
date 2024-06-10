import React, { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "react-modal";

const PicComponent = () => {
  const webcamRef = useRef(null);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isCheckVisible, setIsCheckVisible] = useState(false);
  const navigate = useNavigate();

  const navigateToHome = () => {
    setIsModalOpen(false);
  };

  const stopVideoStream = () => {
    if (webcamRef.current && webcamRef.current.srcObject) {
      webcamRef.current.srcObject.getTracks().forEach((track) => track.stop());
    }
    setIsCameraOn(false);
  };

  useEffect(() => {
    let timeout;

    const startAndStopVideoStream = async () => {
      await startVideoStream();
      timeout = setTimeout(() => {
        setIsCheckVisible(true);
        pauseVideoStream();
        setTimeout(() => {
          stopVideoStream();
          navigateToHome();
        }, 1000);
      }, 3000);
    };

    startAndStopVideoStream();

    return () => clearTimeout(timeout);
  }, []);

  const modalStyle = {
    overlay: {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      zIndex: 1000,
    },
    content: {
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      zIndex: 1001,
      border: "none",
      boxShadow: "none",
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
      setIsCheckVisible(false);
      if (webcamRef.current) {
        webcamRef.current.srcObject = stream;
        await webcamRef.current.play().catch((error) => {
          console.error("Failed to play the video: ", error);
        });
      }
    } catch (error) {
      alert("웹캠이 작동하지 않습니다");
    }
  };

  const pauseVideoStream = () => {
    if (webcamRef.current) {
      webcamRef.current.pause();
    }
  };


  return (
    <div className="col-sm-8 text-left">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={navigateToHome}
        contentLabel="Webcam Modal"
        ariaHideApp={false}
        style={modalStyle}
      >
        <div style={{ position: "relative" }}>
          <video
            ref={webcamRef}
            width={"100%"}
            height={"100%"}
            style={{ border: "1px solid #ddd" }}
            autoPlay
            muted
          />
          {isCheckVisible && (
            <div
              style={{
                position: "absolute",
                top: "30%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                zIndex: 1002,
              }}
            >
              <svg width="400" height="400">
                <circle
                  fill="none"
                  stroke="#68E534"
                  strokeWidth="20"
                  cx="200"
                  cy="200"
                  r="190"
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
          )}
        </div>
      </Modal>
      <br />
    </div>
  );
};

export default PicComponent;
