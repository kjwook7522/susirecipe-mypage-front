interface NavSubMenu {
  name: string;
  link: string;
}

type TodoList = Array<string>;

interface MyTodoList {
  today: TodoList;
  month: TodoList;
}

interface ConsultingPreview {
  title: string;
  consultant: string;
  totalTimes?: number;
  totalHours?: number;
  currentTimes?: number;
  currentHours?: number;
  startDate: Date;
  endDate: Date;
  progressDay?: number;
}

interface MyFile {
  title: string;
  link: string;
}