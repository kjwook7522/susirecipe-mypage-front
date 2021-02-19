import {
  StyledConsultingHeader,
  StyledConsultingProgramTemplate,
  StyledProgramTitle,
  StyledProgramPeriod,
} from './ConsultingProgramTemplate.styled';

interface Props {
  consulting: Consulting;
}

const ConsultingProgramTemplate: React.FC<Props> = ({ consulting }) => {
  return (
    <>
      <StyledConsultingHeader>
        <StyledProgramTitle>
          <img src={process.env.PUBLIC_URL + '/images/default_profile_img.jpg'} alt="profile_img" />
          <div>
            <h1>{consulting.title}</h1>
            <h2>{consulting.consultant}</h2>
          </div>
        </StyledProgramTitle>
        <StyledProgramPeriod>
          <span>2021.05.28 ~ 2022.02.01</span>
        </StyledProgramPeriod>
      </StyledConsultingHeader>

      <StyledConsultingProgramTemplate></StyledConsultingProgramTemplate>
    </>
  );
};

export default ConsultingProgramTemplate;
