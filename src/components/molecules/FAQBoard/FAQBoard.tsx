import React, { useState } from 'react';
import {
  StyledFAQBoard,
  StyledSearchBar,
  StyledTable,
  StyledHiddenRow,
  StyledHeaderRow,
  StyledBodyRow,
  StyledPagination,
  StyledPageButton,
  StyledArrowButton,
} from './FAQBoard.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { FaSearch, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { tempFAQlist } from 'common/constants/TempData';

const FAQBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages: number = 2;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  const handleTab = (idx: number) => {
    if (activeTab !== idx) {
      setActiveTab(idx);
    } else {
      setActiveTab(-1);
    }
  };

  const moveLeftPage = () => {
    if (currentPage === 1) {
      return;
    }
    setCurrentPage(prev => prev - 1);
  };

  const moveRightPage = () => {
    if (currentPage === totalPages) {
      return;
    }
    setCurrentPage(prev => prev + 1);
  };

  return (
    <StyledFAQBoard>
      <StyledSearchBar onSubmit={handleSubmit}>
        <select>
          <option value="title">제목</option>
          <option value="author">작성자</option>
          <option value="content">내용</option>
        </select>
        <input type="text" placeholder="검색" />
        <button>
          <FaSearch />
        </button>
      </StyledSearchBar>

      <StyledTable>
        <thead>
          <StyledHeaderRow>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>작성일</th>
          </StyledHeaderRow>
        </thead>

        <tbody>
          {tempFAQlist.map((faq, idx) => (
            <React.Fragment key={faq.id}>
              <StyledBodyRow onClick={() => handleTab(idx)}>
                <td>{faq.id}</td>
                <td>
                  {faq.title}
                  {activeTab === idx ? <FiChevronUp className="more-icon" /> : <FiChevronDown className="more-icon" />}
                </td>
                <td>{faq.author}</td>
                <td>{faq.createdAt}</td>
              </StyledBodyRow>

              <StyledHiddenRow active={activeTab === idx}>
                <td>
                  <div></div>
                </td>
                <td colSpan={3}>
                  <div>{faq.answer}</div>
                </td>
              </StyledHiddenRow>
            </React.Fragment>
          ))}
        </tbody>
      </StyledTable>

      <StyledPagination>
        <StyledArrowButton onClick={moveLeftPage}>
          <FaChevronLeft />
        </StyledArrowButton>

        <StyledPageButton active={currentPage === 1} onClick={() => setCurrentPage(1)}>
          1
        </StyledPageButton>
        <StyledPageButton active={currentPage === 2} onClick={() => setCurrentPage(2)}>
          2
        </StyledPageButton>

        <StyledArrowButton onClick={moveRightPage}>
          <FaChevronRight />
        </StyledArrowButton>
      </StyledPagination>
    </StyledFAQBoard>
  );
};

export default FAQBoard;
