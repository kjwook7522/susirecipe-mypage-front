declare module '@actions' {
  import {
    TodoList,
    Todo,
    DdayList,
    ConsultingPreviewList,
    Consulting,
    MyFileList,
    NoticeList,
    NewsList,
  } from '@objects';

  export interface UpdateTodoListAction {
    type: 'UPDATE_TODAY_TODO' | 'UPDATE_MONTH_TODO';
    todoList: TodoList;
  }

  export interface AddTodoListAction {
    type: 'ADD_TODAY_TODO' | 'ADD_MONTH_TODO';
    todo: Todo;
  }

  type TodoListAction = UpdateTodoListAction | AddTodoListAction;

  export interface DdayListAction {
    type: 'UPDATE_DDAY';
    ddayList: DdayList;
  }

  export interface TakeConsultingListAction {
    type: 'UPDATE_TAKE_CONSULTING';
    consultingList: ConsultingPreviewList;
  }

  export interface ConsultingAction {
    type: 'UPDATE_CONSULTING';
    consulting: Consulting;
  }

  export interface MyFileListAction {
    type: 'UPDATE_MYFILE';
    myFileList: MyFileList;
  }

  export interface NoticeListAction {
    type: 'UPDATE_NOTICE';
    noticeList: NoticeList;
  }

  export interface NewsListAction {
    type: 'UPDATE_NEWS';
    newsList: NewsList;
  }
}
