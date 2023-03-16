import React from "react";
import PropTypes from "prop-types";
const DustbinModal = ({ handleModal, description }) => {
  return (
    <>
      <div className="fixed inset-0 z-50 mx-5 flex items-center justify-center overflow-y-auto shadow-lg outline-none overflow-x-hidden focus:outline-none">
        <div className="relative my-6 mx-auto w-auto max-w-3xl">
          <div className="relative flex w-full flex-col rounded-lg bg-white shadow-lg outline-none focus:outline-none">
            <div
              className={`flex items-start justify-between rounded-t-lg p-5 ${description.bg}`}
            >
              <h3 className="font-dosis font-semibold text-3xl text-white">
                {description.title}
              </h3>
              <button
                className="float-right border-0 bg-transparent text-black"
                onClick={handleModal}
              >
                <span className="opacity-7 block h-6 w-6  py-0 text-2xl text-white">
                  x
                </span>
              </button>
            </div>
            <div className="relative flex-auto p-6 font-dosis text-lg">{description.info}</div>
          </div>
        </div>
      </div>
    </>
  );
};
DustbinModal.propTypes = {
  handleModal: PropTypes.func,
  description: PropTypes.object,
};
export default DustbinModal;
