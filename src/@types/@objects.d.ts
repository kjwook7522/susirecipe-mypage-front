declare module '@objects' {
  // Button //
  export type ButtonColors = 'black' | 'red' | 'lightred' | 'sky' | 'kobalt' | 'kakao' | 'gray' | 'insta';

  export interface ButtonTheme {
    bgColor: string;
    hoverColor: string;
    textColor: string;
  }

  // Input //
  export type InputType =
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'checkbox'
    | 'range'
    | 'file'
    | 'radio'
    | 'range'
    | 'submit'
    | 'tel'
    | 'color';

  // NavMenu //
  export type NavMenuTab = null | 'dashboard' | 'myinfo' | 'consulting' | 'useinfo' | 'videoclass';
  export type NavSubMenuList = Array<NavSubMenu>;

  export interface NavSubMenu {
    name: string;
    link: string;
  }

  // Todo //
  export type TodoList = Array<Todo>;
  export interface Todo {
    id: string;
    text: string;
    targetDate: Date;
  }

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

  export interface ConsultingDiaryTab {
    consulting: boolean;
    diary: boolean;
  }

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
  export interface NoticeNewsTab {
    notice: boolean;
    news: boolean;
  }
  export interface Notice {
    id: string;
    title: string;
    content: string;
    createdAt: number;
  }
  export interface News {
    id: string;
    title: string;
    content: string;
    createdAt: number;
  }
  export type NoticeList = Array<Notice>;
  export type NewsList = Array<News>;

  export interface NoticeNewsList {
    notice: NoticeList;
    news: NewsList;
  }

  // Dday //
  export interface Dday {
    id: string;
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

  // Auth //
  export type AuthTab = 'login' | 'join';

  // User //
  export type UserTab = 'STUDENT' | 'PARENT' | 'MENTOR' | 'CONSULTANT';

  export interface UserType {
    name: string;
    value: UserTab;
  }
}
