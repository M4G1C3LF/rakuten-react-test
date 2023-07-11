import {
  OPEN_VIDEO_PLAYER,
  CLOSE_VIDEO_PLAYER
} from "./actionTypes";

const INIT_STATE = {
  isVideoPlayerOpen: false
};

const movie = (state = INIT_STATE, action : any) => {
  switch (action.type) {
    case OPEN_VIDEO_PLAYER:
      return {
        ...state,
        isVideoPlayerOpen: true,
      };
    case CLOSE_VIDEO_PLAYER:
      return {
        ...state,
        isVideoPlayerOpen: false,
      };

		default:
				return state;
		}
};

export default movie;