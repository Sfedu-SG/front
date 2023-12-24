import { FC } from "react";
import upload from './upload.png'
import trash from './trash.png'
import loaded from './loaded.png'
import './style.css';




const UploadForm: FC<{ isLoaded:boolean }> = ({
    isLoaded,
}) => {


    return (
        <div>
            <div className="root">
                <div className="border">
                    <img className="upload" src={isLoaded ? loaded : upload} />
                    <span className="text">Загрузите файлы</span>
            </div>
            
            </div>
            {isLoaded && <img className="trash" src={trash} />}
        </div>
    );
  };

export default UploadForm;