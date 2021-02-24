import { StyledFAQTemplate, StyledPageTitle, StyledFAQBoardSection, StyledSearchBar } from './FAQTemplate.styled';
import { FaSearch } from 'react-icons/fa';

const FAQTemplate: React.FC = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  }
  return (
    <StyledFAQTemplate>
      <StyledPageTitle>FAQ</StyledPageTitle>
      <StyledFAQBoardSection>
        <StyledSearchBar onSubmit={handleSubmit}>
          <select>
            <option value="">제목</option>
            <option value="">작성자</option>
            <option value="">내용</option>
          </select>
          <input type="text" placeholder="검색" />
          <button>
            <FaSearch />
          </button>
        </StyledSearchBar>
        123
      </StyledFAQBoardSection>
    </StyledFAQTemplate>
  );
};

export default FAQTemplate;
