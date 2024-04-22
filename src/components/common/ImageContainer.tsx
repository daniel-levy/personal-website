import React from "react";

interface ImageContainerProps {
  children?: any;
  leftInset: boolean;
}

const ImageContainer = (props: ImageContainerProps) => {
  const { children, leftInset } = props;
  return (
    <div className="w-auto h-auto">
      <div className="bg-sky-900 w-96 h-96 relative z-0">
        <div
          className={`absolute w-96 h-96 bg-blue-100 ${
            leftInset ? `-inset-y-6 inset-x-6 ` : `inset-y-6 -inset-x-6 `
          } flex justify-center items-center z-10`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default ImageContainer;
