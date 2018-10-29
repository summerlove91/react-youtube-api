import { combineReducers } from 'redux';
import SavedListRecucer from './reducer_saved-videos';

const rootReducer = combineReducers({
  savedVideos: videoId
});

export default rootReducer;
