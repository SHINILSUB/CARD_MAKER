import React from "react";
import styles from "./image_file_input.module.css";

const ImageFileInput = ({ imageUploader, name, onFileChange }) => {
  const inputRef = useRef();
  const onButtonClick = (event) => {
    event.preventDefault();

    inputRef.current.click();
  };
  const onChange = async (event) => {
    const uploaded = await imageUploader.upload(event.target.files[0]);
    onFileChange({ 
      name: uploaded.original_filename, 
      url: uploaded.url });
  };
  return (
    <div className={styles.container}>
      <input //
        ref={inputRef}
        type="file"
        accept="image/*"
        name="file"
        onChange={onChange}
      />
      <button className={styles.button} onClick={onButtonClick}>
        {name || "no file"}
      </button>
    </div>
  );
};

export default ImageFileInput;
