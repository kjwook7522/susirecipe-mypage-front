type ButtonColors = 'black' | 'red' | 'lightred' | 'sky' | 'kobalt' | 'kakao' | 'gray' | 'insta';
interface ButtonTheme {
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

type NavMenuTab = null | 'dashboard' | 'myinfo' | 'consulting' | 'useinfo' | 'videoclass';
type NavSubMenuList = Array<NavSubMenu>;

interface NavSubMenu {
  name: string;
  link: string;
}

type TodoList = Array<string>;
type Todo = string;

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
