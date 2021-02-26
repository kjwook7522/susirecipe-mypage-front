// Button //
type ButtonColors = 'black' | 'red' | 'lightred' | 'sky' | 'kobalt' | 'kakao' | 'gray' | 'insta';

interface ButtonTheme {
  bgColor: string;
  hoverColor: string;
  textColor: string;
}

// NavMenu //
type NavMenuTab = null | 'dashboard' | 'myinfo' | 'consulting' | 'useinfo' | 'videoclass';
type NavSubMenuList = Array<NavSubMenu>;

interface NavSubMenu {
  name: string;
  link: string;
}

// Todo //
type TodoList = Array<string>;
type Todo = string;

interface MyTodoList {
  today: TodoList;
  month: TodoList;
}

// Consulting //
type ConsultingPreviewList = Array<ConsultingPreview>;

interface ConsultingPreview {
  id: string;
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

interface Consulting {
  id: string;
  title: string;
  consultant: string;
}

// MyFile //
interface MyFile {
  title: string;
  link: string;
}

type MyFileList = Array<MyFile>;

// Notice & News //
type NoticeNewsTab = 'notice' | 'news';
type NoticeList = Array<string>;
type NewsList = Array<string>;

interface NoticeNewsList {
  notice: NoticeList;
  news: NewsList;
}

// Dday //
interface Dday {
  name: string;
  targetDate: Date;
}

type DdayList = Array<Dday>;

// FAQ //
interface FAQ {
  id: string;
  title: string;
  author: string;
  answer: string;
  createdAt: string;
}

type FAQList = Array<FAQ>;
