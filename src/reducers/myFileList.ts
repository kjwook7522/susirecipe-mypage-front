import { UPDATE_MYFILE } from 'actions/myFileList';

const initState: MyFileList = [];

export const myFileReducer = (state = initState, action: MyFileListAction) => {
  switch (action.type) {
    case UPDATE_MYFILE:
      return action.myFileList;
    default:
      return state;
  }
};
