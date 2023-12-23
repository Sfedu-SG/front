import { FC } from "react";
import  pen  from './pen.png'
import './style.css';

const ProfileItemChangeable: FC<{ user: string, birthday: string, id:string, changeDate: string }> = ({
    user ,
    birthday,
    id,
    changeDate,
  }) => {

    return (
      <div className="root">
        <div className="other">
            <div className="userData">
                <span className="user">{user}</span>
                <span className="birthday">{birthday}</span>
            </div>
            <a href={id} className="link">
                <img src={pen}/>
            </a>
        </div>
        <span className="changeDate">Дата последнего изменения: {changeDate} </span>
      </div>
    );
  };

export default ProfileItemChangeable;