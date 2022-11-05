import React, { useState, useEffect } from "react";
import ImageUploading from "react-images-uploading";
import useDidMountEffect from "../../hook/useDidMountEffect";
import { BiImageAdd } from "react-icons/bi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Tooltip } from "@material-tailwind/react";

function UploadFB(props) {
  const [images, setImages] = React.useState([]);
  const [imageadd, setimageadd] = useState(false);
  const maxNumber = 69;
  const onChange = (imageList, addUpdateIndex) => {
    // const upimage = imageList[addUpdateIndex].file;
    // data for submit
    setimageadd(true);
    setImages(imageList);
  };
  useDidMountEffect(() => {
    if (images.length < 1 && imageadd === true) {
      if (typeof props.onSaveImageFront === "function") {
        props.onSaveImageFront([]);
      } else {
        props.onSaveImageBack([]);
      }
      return;
    }
    const newImageURL = [];
    images.forEach((e) => newImageURL.push(e.file));
    if (typeof props.onSaveImageFront === "function") {
      props.onSaveImageFront(newImageURL);
    } else {
      props.onSaveImageBack(newImageURL);
    }
  }, [images]);
  useDidMountEffect(() => {
    let del = document.getElementById("Delimg");
    setImages([]);
  }, [props.DelImg]);

  const onImageRemoveAll = (e) => {
    setImages([]);
  };
  return (
    <div>
      <ImageUploading
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

          <div className="justify-center items-center flex flex-col ">
            <div className=" w-fit  justify-center items-center  ">
              {imageList.map((image, index) => (
                <div key={index} className=" h-140 relative cursor-pointer  image-fit   ">
                  <img
                    src={image.data_url}
                    className="rounded-md justify-center self-center  items-centers  "
                    alt=""
                    width="250"
                  />

                  <div className=" absolute inline-flex right-2 top-2 ">
                    <Tooltip
                      id="Delimg"
                      content="Remove this image?"
                      className="bg-gray-400 m-1 p-1 text-xs"
                    >
                      <button onClick={onImageRemoveAll}>
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
export default UploadFB;
