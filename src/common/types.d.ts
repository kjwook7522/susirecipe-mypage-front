interface NavSubMenu {
  name: string;
  link: string;
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