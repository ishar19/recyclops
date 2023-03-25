import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();
export const scanDataState = atom({
  key: "scanData",
  default: null,
  effects_UNSTABLE: [persistAtom],
});
