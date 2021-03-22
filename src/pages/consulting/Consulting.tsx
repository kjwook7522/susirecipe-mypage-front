import React from 'react'
import ConsultingTemplate from "templates/ConsultingTemplate/ConsultingTemplate";
import { tempConsultingList } from 'common/constants/TempData';

const Consulting: React.FC = () => <ConsultingTemplate consultingList={tempConsultingList} />

export default Consulting;
