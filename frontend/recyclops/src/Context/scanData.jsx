import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const scanDataState = atom({
  key: "scanData",
  default: false,
  effects_UNSTABLE: [persistAtom],
});

export const dataURI = atom({
  key: "dataUri",
  default: null,
  effects_UNSTABLE: [persistAtom],
});

export const isSaved = atom({
  key: "isSaved",
  default: false,
  effects_UNSTABLE: [persistAtom],
});
