import ConsultingTemplate from "templates/ConsultingTemplate/ConsultingTemplate";
import { tempConsultingList } from 'common/constants/TempData';

const Consulting: React.FC = () => {
  return <ConsultingTemplate consultingList={tempConsultingList} />;
};

export default Consulting;
