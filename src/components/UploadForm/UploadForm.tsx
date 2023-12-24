import { FC } from "react";
import upload from './upload.png'
import './style.css';




const UploadForm: FC<{  }> = ({}) => {


    return (
      <div className="root">
        <div className="border">
            <img className="upload" src={upload} />
            <span className="text">Загрузите файлы</span>
        </div>

      </div>
    );
  };

export default UploadForm;