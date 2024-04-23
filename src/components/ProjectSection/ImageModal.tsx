import React from "react";

import { Modal } from "flowbite-react";

interface ImageModalProps {
  imageModalOpen: boolean;
  setImageModalOpen: (imageModalOpen: boolean) => void;
  currentImage: any;
  setCurrentImage: (currentImage: any) => void;
  allImages: any[];
}

const ImageModal = (props: ImageModalProps) => {
  const {
    imageModalOpen,
    setImageModalOpen,
    currentImage,
    setCurrentImage,
    allImages,
  } = props;

  return (
    <Modal
      show={imageModalOpen}
      dismissible={true}
      onClose={() => {
        setImageModalOpen(false);
      }}
    >
      <Modal.Body>
        <div className="h-full w-full flex flex-col">
          <div className="h-96 w-full">
            <img
              className="object-cover h-full w-full"
              src={currentImage}
              alt="LinkedIn Logo"
            />
          </div>
          <div className="flex-1 w-full flex flex-row gap-x-4 mt-4">
            {allImages.map((image) => {
              return (
                <div
                  className={`w-1/4 h-16 cursor-pointer ${
                    currentImage === image && "border-4 border-sky-900"
                  }`}
                >
                  <img
                    onClick={(event) => {
                      setCurrentImage(image);
                      event?.stopPropagation();
                    }}
                    className="object-cover h-full w-full"
                    src={image}
                    alt="LinkedIn Logo"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ImageModal;
