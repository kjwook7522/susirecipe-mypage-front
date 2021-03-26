import {
  DdayList,
  ConsultingPreviewList,
  MyFileList,
  NoticeList,
  NewsList,
  FAQList,
  TodoList,
  ConsultingFileList,
} from '@objects';

export const tempDday: DdayList = [
  {
    id: 'w3ffsa3',
    name: '대학수능능력시험',
    targetDate: new Date(2021, 10, 18),
  },
  {
    id: 'fs43sfe',
    name: '수시원서 마감',
    targetDate: new Date(2021, 8, 14),
  },
  {
    id: 'he4aw3a3',
    name: '9월 모의고사',
    targetDate: new Date(2021, 8, 1),
  },
];

export const tempConsultingList: ConsultingPreviewList = [
  {
    id: '7aefc65dc',
    title: '1. 수시레시피 면접 컨설팅',
    consultant: '김동빈 컨설턴트',
    totalTimes: 10,
    totalHours: 20,
    currentTimes: 7,
    currentHours: 14,
    startDate: new Date(),
    endDate: new Date(),
    progressDay: 86,
  },
  {
    id: '2b7fcc6c7',
    title: '2. 수시지원 솔루션 컨설팅',
    consultant: '김동빈 컨설턴트',
    totalTimes: 10,
    totalHours: 20,
    currentTimes: 7,
    currentHours: 14,
    startDate: new Date(),
    endDate: new Date(),
    progressDay: 86,
  },
  {
    id: '298faf773',
    title: '3. 자기소개서 컨설팅',
    consultant: '김동빈 컨설턴트',
    totalTimes: 10,
    totalHours: 20,
    currentTimes: 7,
    currentHours: 14,
    startDate: new Date(),
    endDate: new Date(),
    progressDay: 86,
  },
];

export const tempMyFilesList: MyFileList = [
  {
    title: '1. 수시레시피 면접 컨설팅.hwp',
    link: '#1',
  },
  {
    title: '2. 1회차 일지록.hwp',
    link: '#2',
  },
];

export const tempNoticeList: NoticeList = [
  { id: '2000', title: '6.2 수시레시피 수강생 전원 이벤트', content: '', createdAt: 1616482559692 },
  { id: '2001', title: '수시 6개 합격 시 수강 금액 20% 추가 할인 이벤트', content: '', createdAt: 1616482559693 },
  { id: '2002', title: '6.1 10:00 - 17:00 마이페이지 서버 점검', content: '', createdAt: 1616482559694 },
  { id: '2003', title: '김동빈 컨설턴트가 알려주는 학생부 관리 비법', content: '', createdAt: 1616482559695 },
];

export const tempNewsList: NewsList = [
  { id: '3000', title: '올해 9월 모의고사 난이도 상승으로 수험생 곤란', content: '', createdAt: 1616482559696 },
  { id: '3001', title: '정시 확대로 인해 바뀐 입시 전략', content: '', createdAt: 1616482559697 },
];

export const tempFAQlist: FAQList = [
  {
    id: '1',
    title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
    author: '김재욱',
    answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
    createdAt: '2021.02.24',
  },
  {
    id: '2',
    title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
    author: '김재욱',
    answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
    createdAt: '2021.02.24',
  },
  {
    id: '3',
    title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
    author: '김재욱',
    answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
    createdAt: '2021.02.24',
  },
  {
    id: '4',
    title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
    author: '김재욱',
    answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
    createdAt: '2021.02.24',
  },
  {
    id: '5',
    title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
    author: '김재욱',
    answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
    createdAt: '2021.02.24',
  },
];

export const tempTodayTodo: TodoList = [
  { id: 'sefcdase', text: '김윤환 컨설턴트와 컨설팅 예약', targetDate: new Date() },
];
export const tempMonthTodo: TodoList = [
  { id: 'f3seffse', text: '8일 김윤환 컨설턴트와 컨설팅', targetDate: new Date() },
  { id: '32fawefa', text: '15일 자기소개서 제출하기', targetDate: new Date() },
  { id: 'kr675jt6', text: '22일 면접 준비하기', targetDate: new Date() },
  { id: 'sh5r5sgw', text: '29일 김윤환 컨설턴트와 컨설팅', targetDate: new Date() },
];

export const tempConsultingFileList: ConsultingFileList = [
  {
    times: 1,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 2,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 3,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 4,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 5,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 6,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 7,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 8,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 9,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 10,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
  {
    times: 11,
    files: [
      {
        id: '1000',
        name: '경영학과 면접질문 TOP100.doc',
        data: undefined,
        fileType: 'doc',
      },
      {
        id: '1001',
        name: '경영학과 합격생 생기부.hwp',
        fileType: 'hwp',
      },
    ],
  },
];
