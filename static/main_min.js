
const videoElement = document.getElementsByClassName('input_video')[0];

function onResults(results) {

    console.log(results.detections.length)
    }


const faceDetection = new FaceDetection({locateFile: (file) => {
    return `https://cdn.jsdelivr.net/npm/@mediapipe/face_detection@0.0/${file}`;
}});
faceDetection.setOptions({
    minDetectionConfidence: 0.5
});

faceDetection.onResults(onResults);

const camera = new Camera(videoElement, {
    onFrame: async () => {
    await faceDetection.send({image: videoElement});
    },
    width: 500,
    height: 250
});
camera.start();