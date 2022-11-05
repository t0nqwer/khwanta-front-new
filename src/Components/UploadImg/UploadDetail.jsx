import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";

function UploadDetail(props) {
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    setImages(imageList);
  };
  useEffect(() => {
    if (images.length < 1) return props.onSaveImageDetail([]);
    const newImageURL = [];
    images.forEach((e) => newImageURL.push(e.file));
    props.onSaveImageDetail(newImageURL);
  }, [images]);

  useEffect(() => {
    let del = document.getElementById("Delimg");
    setImages([]);
  }, [props.DelImg]);
  return (
    <div>
      <ImageUploading
        multiple
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({
          imageList,
          onImageUpload,
          onImageRemoveAll,
          onImageUpdate,
          onImageRemove,
          isDragging,
          dragProps,
        }) => (
          // write your building UI

          <div>
            <div className="grid grid-cols-10 gap-5 pl-4 pr-5">
              {imageList.map((image, index) => (
                <div
                  key={index}
                  className="col-span-5 md:col-span-2 w-fit  flex items-center justify-center h-64 relative cursor-pointer"
                >
                  <img
                    src={image.data_url}
                    className="object-cover relative border  rounded-md border-gray-100 shadow-sm max-w-max   h-full"
                    alt=""
                  />
                  <div className=" absolute inline-flex right-2 top-2 ">
                    <Tooltip
                      id="Delimg"
                      content="Remove this image?"
                      className="bg-gray-400 m-1 p-1 text-xs"
                    >
                      <button onClick={() => onImageRemove(index)}>
                        <AiFillCloseCircle className="w-4 h-4" fill="#AD173B" />
                      </button>
                    </Tooltip>
                  </div>
                </div>
              ))}
            </div>
            <div className="px-4 pb-4 mt-5 flex items-center justify-center cursor-pointer relative">
              <BiImageAdd className="w-4 h-4 mr-2" />
              <button
                className="text-primary mr-1"
                style={isDragging ? { color: "red" } : null}
                onClick={onImageUpload}
                {...dragProps}
              >
                เลือกรูปภาพหรือวางรูปภาพที่นี่
              </button>
            </div>
          </div>
        )}
      </ImageUploading>
    </div>
  );
}
export default UploadDetail;
