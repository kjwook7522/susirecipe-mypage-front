type NavMenuTab = null | 'myinfo' | 'consulting' | 'useinfo';
type NavSubMenuList = Array<NavSubMenu>;

interface NavSubMenu {
  name: string;
  link: string;
}

type TodoList = Array<string>;

interface MyTodoList {
  today: TodoList;
  month: TodoList;
}

type ConsultingList = Array<ConsultingPreview>;

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

type NoticeNewsTab = 'notice' | 'news';
type NoticeList = Array<string>;
type NewsList = Array<string>;
