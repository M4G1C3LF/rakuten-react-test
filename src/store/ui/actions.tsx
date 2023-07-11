import {
  OPEN_VIDEO_PLAYER,
  CLOSE_VIDEO_PLAYER
} from "./actionTypes";


export const openVideoPlayer = () => ({
  type: OPEN_VIDEO_PLAYER,
});

export const closeVideoPlayer = () => ({
  type: CLOSE_VIDEO_PLAYER,
});