import React, { FC } from "react";
import "./../../../components/Button/styles.css";
import { ImportJsonProps } from "./types";

const ImportJson: FC<ImportJsonProps> = ({ onLoad }) => {
  const onFileSelected = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = (event.target.files || [])[0];
    const reader = new FileReader();

    reader.onload = function (event: ProgressEvent<any>) {
      onLoad(event.target.result as any);
    };

    if (!selectedFile) return;

    reader.readAsText(selectedFile);
  };

  return (
    <>
      <label htmlFor={"file-input"}>
        <div className={"button-wrapper"}>Кнопка</div>
      </label>
      <input
        accept=".json"
        style={{ visibility: "hidden" }}
        type={"file"}
        id={"file-input"}
        onChange={onFileSelected}
      />
    </>
  );
};

export default ImportJson;
