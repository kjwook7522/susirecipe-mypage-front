import FAQBoard from 'components/molecules/FAQBoard/FAQBoard';
import { StyledFAQTemplate, StyledPageTitle, StyledFAQBoardSection } from './FAQTemplate.styled';

const FAQTemplate: React.FC = () => {
  return (
    <StyledFAQTemplate>
      <StyledPageTitle>FAQ</StyledPageTitle>

      <StyledFAQBoardSection>
        <FAQBoard />
      </StyledFAQBoardSection>
    </StyledFAQTemplate>
  );
};

export default FAQTemplate;
