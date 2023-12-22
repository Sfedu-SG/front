import { StatusOfRequestEnum } from "../../../types/enums";
import { createSlice } from "@reduxjs/toolkit";

interface ProfilesSlice {
  getPhotos: {
    status: StatusOfRequestEnum;
    error: string | null;
  };
  getPhotoById: Record<
    number,
    | {
        status: StatusOfRequestEnum;
        error: string | null;
      }
    | undefined
  >;
  likedPhotos: Record<number, true>;
}

const initialState: ProfilesSlice = {
  getPhotos: {
    status: StatusOfRequestEnum.IDLE,
    error: null,
  },
  getPhotoById: {},
  likedPhotos: {},
};

export const profilesSlice = createSlice({
  name: "profiles",
  initialState,
  reducers: {},
});

export default profilesSlice.reducer;
