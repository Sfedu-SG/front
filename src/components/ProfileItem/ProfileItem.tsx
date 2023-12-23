import { Item } from "./style.ts";
import { FC } from "react";
import { useLocation } from "react-router-dom";
import  arrow  from './../../assets/arrow.png'
import './style.css';




const ProfileItem: FC<{ user: string, birthday: string, id:string }> = ({
    user ,
    birthday,
    id,
  }) => {

  
    return (
      <div className="root">
        <div className="userData">
            <span className="user">{user}</span>
            <span className="birthday">{birthday}</span>
        </div>
        <a href={id} className="link">
            <img src={arrow}/>
        </a>
      </div>
    );
  };

export default ProfileItem;