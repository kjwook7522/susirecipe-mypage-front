interface UpdateTodoListAction {
  type: 'UPDATE_TODAY_TODO' | 'UPDATE_MONTH_TODO';
  todoList: TodoList;
}

interface AddTodoListAction {
  type: 'ADD_TODAY_TODO' | 'ADD_MONTH_TODO';
  todo: Todo;
}

type TodoListAction = UpdateTodoListAction | AddTodoListAction;

interface DdayListAction {
  type: 'UPDATE_DDAY';
  ddayList: DdayList;
}

interface TakeConsultingListAction {
  type: 'UPDATE_TAKE_CONSULTING';
  consultingList: ConsultingList;
}

interface MyFileListAction {
  type: 'UPDATE_MYFILE';
  myFileList: MyFileList;
}

interface NoticeListAction {
  type: 'UPDATE_NOTICE';
  noticeList: NoticeList;
}

interface NewsListAction {
  type: 'UPDATE_NEWS';
  newsList: NewsList;
}