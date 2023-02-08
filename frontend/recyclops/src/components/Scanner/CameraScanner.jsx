import React, { useState } from "react";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import { RxCross2 } from "react-icons/rx";
import Reset from "./Reset";
import Info from "./Info";
const CameraScanner = (props) => {
  const [dataUri, setDataUri] = useState("");
  const data = true;
  const handleReset = () => {
    setDataUri("");
  };
  function handleTakePhoto(dataUri) {
    setDataUri(dataUri);
  }

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  function handleCameraError(error) {}

  function handleCameraStart(stream) {}

  function handleCameraStop() {}

  return (
    <div>
      {dataUri && data ? <Info /> : <></>}
      <Reset />
      <div className="">
        {dataUri ? (
          <>
            <img src={dataUri} className="h-[90vh] w-[100vw]" />
            <RxCross2
              onClick={handleReset}
              fontSize="3em"
              fontWeight="bolder"
              className="absolute right-4 top-4 rounded-lg bg-greenPrimary text-black"
            />
          </>
        ) : (
          <div className="flex-1">
            <Camera
              className="camera-wrapper"
              onTakePhoto={handleTakePhoto}
              onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
              onCameraError={handleCameraError}
              idealFacingMode={FACING_MODES.ENVIRONMENT}
              imageType={IMAGE_TYPES.JPG}
              imageCompression={0.97}
              isMaxResolution
              isImageMirror
              isSilentMode
              isFullscreen
              isDisplayStartCameraError
              sizeFactor={1}
              onCameraStart={handleCameraStart}
              onCameraStop={handleCameraStop}
            />
          </div>
        )}
      </div>
      {/* <div>
    {dataUri!=""&&data==true?<Info/>:<><></>}
      </div> */}
    </div>
  );
};

export default CameraScanner;
