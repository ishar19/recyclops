import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Camera, { FACING_MODES, IMAGE_TYPES } from "react-html5-camera-photo";
import { RxCross2 } from "react-icons/rx";
import Reset from "./Reset";
import Info from "./Info";
import { scanImage } from "../../APIs/Scans";
import { addScan } from "../../APIs/User";
import { scanDataState, dataURI, isSaved } from "../../Context/scanData";
import { useRecoilState } from "recoil";
const CameraScanner = ({ user }) => {
  const [dataUri, setDataUri] = useRecoilState(dataURI);
  const [data, setData] = useRecoilState(scanDataState);
  const [save, setSave] = useRecoilState(isSaved);

  const handleReset = () => {
    setDataUri(null);
    setData(false);
    setSave(false);
  };
  function handleTakePhoto(dataUri) {
    setDataUri(dataUri);
  }

  function handleTakePhotoAnimationDone(dataUri) {
    setDataUri(dataUri);
  }

  useEffect(() => {
    const getScanData = async () => {
      const scanData = await scanImage(dataUri, user != null ? user.uid : null);
      if (user != null) {
        addScan(user.uid, scanData.scanId);
      }
      setData(scanData);
      //   if (user == null) {
      //     const recentScans = JSON.parse(
      //       window.sessionStorage.getItem("recentScans")
      //     );
      //     if (recentScans == undefined)
      //       window.sessionStorage.setItem("recentScans", [scanData.scanId]);
      //     else
      //       window.sessionStorage.setItem("recentScans", [
      //         ...recentScans,
      //         scanData.scanId,
      //       ]);
      //   }
    };
    if (dataUri != null) {
      getScanData();
    }
  }, [dataUri]);

  return (
    <>
      {dataUri != null && data != false ? (
        <Info data={data} save={save} setSave={setSave} />
      ) : (
        <>{dataUri == null && data == false ? <Reset /> : <></>}</>
      )}

      <div className="">
        {dataUri != null && data != false ? (
          <>
            <img src={dataUri} className="h-[90vh] w-[100vw]" />
            <RxCross2
              onClick={handleReset}
              fontSize="3em"
              fontWeight="bolder"
              className="absolute right-4 top-4 z-50 rounded-lg bg-greenPrimary text-black"
            />
          </>
        ) : (
          <div className="flex-1">
            {dataUri != null && data == false ? (
              <>
                <Reset transparent={true} />
                <img src={dataUri} className="h-[90vh] w-[100vw]" />
                <RxCross2
                  onClick={handleReset}
                  fontSize="3em"
                  fontWeight="bolder"
                  className="absolute right-4 top-4 z-50 rounded-lg bg-greenPrimary text-black"
                />
              </>
            ) : (
              <Camera
                className="camera-wrapper"
                onTakePhoto={handleTakePhoto}
                onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
                idealFacingMode={FACING_MODES.ENVIRONMENT}
                imageType={IMAGE_TYPES.JPG}
                imageCompression={0.97}
                isMaxResolution
                isImageMirror={false}
                isSilentMode
                isFullscreen
                isDisplayStartCameraError
                sizeFactor={1}
              />
            )}
          </div>
        )}
      </div>
    </>
  );
};

CameraScanner.propTypes = {
  user: PropTypes.any,
};
export default CameraScanner;
