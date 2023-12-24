import { FC } from "react";
import pen from "./pen.png";
import {
  Birthday,
  ChangeDate,
  IconContainer,
  Other,
  ProfileItemContainer,
  UserData,
  Username,
} from "./style.ts";

const ProfileItemChangeable: FC<{
  user: string;
  birthday: string;
  id: string;
  changeDate: string;
}> = ({ user, birthday, id, changeDate }) => {
  return (
    <ProfileItemContainer>
      <Other>
        <UserData>
          <Username>{user}</Username>
          <Birthday>{birthday}</Birthday>
        </UserData>
        <IconContainer>
          <img src={pen} />
        </IconContainer>
      </Other>
      <ChangeDate>Дата последнего изменения: {changeDate}</ChangeDate>
    </ProfileItemContainer>
  );
};

export default ProfileItemChangeable;
