import { MyFileList } from '@objects';
import { MyFileListAction } from '@actions';

export const UPDATE_MYFILE = 'UPDATE_MYFILE';

export const updateMyFile = (myFileList: MyFileList): MyFileListAction => ({
  type: UPDATE_MYFILE,
  myFileList,
});
