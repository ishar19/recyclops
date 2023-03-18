import React from "react";
import Image from "../../Assets/500.png";
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
    // logErrorToMyService(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div className="flex h-[100vh] w-[100vw] items-center justify-center p-5">
          <div>
            <img src={Image} className="float-left mt-4 h-[60%]" />
            <p className="mt-5 font-dosis text-xl font-normal">
              <span className="text-2xl font-semibold">OOPS!!</span> An error
              just jumped out of the trash! Sorry for the inconvenience. Check
              your internet connection and retry again or try after some time{" "}
            </p>
          </div>
        </div>
      );
    }

    // eslint-disable-next-line react/prop-types
    return this.props.children;
  }
}

export default ErrorBoundary;
