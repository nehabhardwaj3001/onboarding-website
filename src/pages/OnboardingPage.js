import React, { useRef, useState } from "react";
import Webcam from "react-webcam";
import { Button, Grid, Paper, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function OnboardingPage() {
  const webcamRef = useRef(null);
  const [capturedImage, setCapturedImage] = useState(null);
  const [capturedVideo, setCapturedVideo] = useState(null);
  const [recording, setRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState(null);
  const [webcamAvailable, setWebcamAvailable] = useState(true);

  const captureImage = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (!imageSrc) {
      toast.error("No webcam detected. Unable to capture image.");
      return;
    }
    setCapturedImage(imageSrc);
    toast.success("Image uploaded successfully!");
  };

  const startRecording = () => {
    const stream = webcamRef.current?.stream;
    if (!stream) {
      toast.error("No webcam detected. Unable to start recording.");
      return;
    }

    const mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

    mediaRecorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        const videoBlob = new Blob([event.data], { type: "video/webm" });
        const videoUrl = URL.createObjectURL(videoBlob);
        setCapturedVideo(videoUrl);
        toast.success("Video uploaded successfully!");
      }
    };

    mediaRecorder.start();
    setRecording(true);
    setMediaRecorder(mediaRecorder);
  };

  const stopRecording = () => {
    if (mediaRecorder && recording) {
      mediaRecorder.stop();
      setRecording(false);
    }
  };

  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <ToastContainer />
      <Typography variant="h4" align="center" gutterBottom>
        Onboarding
      </Typography>
      {webcamAvailable ? (
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" align="center" gutterBottom>
                Image Capture
              </Typography>
              <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
              <Button
                variant="contained"
                color="primary"
                onClick={captureImage}
                fullWidth
                style={{ marginTop: "20px", borderRadius: "5px" }}
              >
                Capture Image
              </Button>
              {capturedImage && <img src={capturedImage} alt="Captured" style={{ width: "100%", marginTop: "20px", borderRadius: "5px" }} />}
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: "20px", textAlign: "center", backgroundColor: "#f5f5f5", borderRadius: "10px", boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)" }}>
              <Typography variant="h5" align="center" gutterBottom>
                Video Capture
              </Typography>
              <Webcam
                audio={true}
                ref={webcamRef}
                videoConstraints={{ facingMode: "user" }}
              />
              {recording ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={stopRecording}
                  fullWidth
                  style={{ marginTop: "20px", borderRadius: "5px" }}
                >
                  Stop Recording
                </Button>
              ) : (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={startRecording}
                  fullWidth
                  style={{ marginTop: "20px", borderRadius: "5px" }}
                >
                  Start Recording
                </Button>
              )}
              {capturedVideo && <video controls src={capturedVideo} style={{ width: "100%", marginTop: "20px", borderRadius: "5px" }} />}
            </Paper>
          </Grid>
        </Grid>
      ) : (
        <Typography variant="h6" align="center" style={{ marginTop: "20px" }}>
          No webcam detected. Please ensure that a webcam is connected and accessible.
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", display: "block", marginLeft: "auto", marginRight: "auto", borderRadius: "5px" }}
      >
        Complete Onboarding
      </Button>
    </div>
  );
}

export default OnboardingPage;
