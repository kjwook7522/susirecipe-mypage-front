declare module '@objects' {
  // Button //
  export type ButtonColors = 'black' | 'red' | 'lightred' | 'sky' | 'kobalt' | 'kakao' | 'gray' | 'insta';

  export interface ButtonTheme {
    bgColor: string;
    hoverColor: string;
    textColor: string;
  }

  // NavMenu //
  export type NavMenuTab = null | 'dashboard' | 'myinfo' | 'consulting' | 'useinfo' | 'videoclass';
  export type NavSubMenuList = Array<NavSubMenu>;

  export interface NavSubMenu {
    name: string;
    link: string;
  }

  // Todo //
  export type TodoList = Array<string>;
  export type Todo = string;

  export interface MyTodoList {
    today: TodoList;
    month: TodoList;
  }

  // Consulting //
  export type ConsultingPreviewList = Array<ConsultingPreview>;

  export interface ConsultingPreview {
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

  export interface Consulting {
    id: string;
    title: string;
    consultant: string;
  }

  export type ConsultingDiaryTab = 'consulting' | 'diary';

  export interface ConsultingFile {
    id: string;
    name: string;
    data?: File;
    fileType: 'pdf' | 'hwp' | 'doc' | 'png' | 'jpg' | 'jpeg' | 'gif' | 'mp3' | 'wav' | 'mp4' | 'avi';
  }

  export interface ConsultingDayFiles {
    times: number;
    files: Array<ConsultingFile>;
  }

  export type ConsultingFileList = Array<ConsultingDayFiles>;

  // MyFile //
  export interface MyFile {
    title: string;
    link: string;
  }

  export type MyFileList = Array<MyFile>;

  // Notice & News //
  export type NoticeNewsTab = 'notice' | 'news';
  export type NoticeList = Array<string>;
  export type NewsList = Array<string>;

  export interface NoticeNewsList {
    notice: NoticeList;
    news: NewsList;
  }

  // Dday //
  export interface Dday {
    name: string;
    targetDate: Date;
  }

  export type DdayList = Array<Dday>;

  // FAQ //
  export interface FAQ {
    id: string;
    title: string;
    author: string;
    answer: string;
    createdAt: string;
  }

  export type FAQList = Array<FAQ>;
}
