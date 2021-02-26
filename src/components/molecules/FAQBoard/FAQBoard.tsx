import React from 'react';
import { StyledFAQBoard, StyledHiddenRow, StyledHeaderRow, StyledBodyRow } from './FAQBoard.styled';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import { useState } from 'react';

const FAQBoard: React.FC = () => {
  const [activeTab, setActiveTab] = useState(-1);

  const handleTab = (idx: number) => {
    if (activeTab !== idx) {
      setActiveTab(idx);
    } else {
      setActiveTab(-1);
    }
  };

  const tempList = [
    {
      id: '1',
      title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
      editor: '김재욱',
      answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
      createdAt: '2021.02.24',
    },
    {
      id: '2',
      title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
      editor: '김재욱',
      answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
      createdAt: '2021.02.24',
    },
    {
      id: '3',
      title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
      editor: '김재욱',
      answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
      createdAt: '2021.02.24',
    },
    {
      id: '4',
      title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
      editor: '김재욱',
      answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
      createdAt: '2021.02.24',
    },
    {
      id: '5',
      title: 'Q. 수시레시피 개인정보 입력을 안하면 LMS 사용을 못하나요?',
      editor: '김재욱',
      answer: 'A. sdfasfdsasdsadfasdfdsafsadfdsafadsfads',
      createdAt: '2021.02.24',
    },
  ];

  return (
    <StyledFAQBoard>
      <thead>
        <StyledHeaderRow>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
        </StyledHeaderRow>
      </thead>

      <tbody>
        {tempList.map((faq, idx) => (
          <React.Fragment key={faq.id}>
            <StyledBodyRow onClick={() => handleTab(idx)}>
              <td>{faq.id}</td>
              <td>
                {faq.title}
                {activeTab === idx ? <FiChevronUp className="more-icon" /> : <FiChevronDown className="more-icon" />}
              </td>
              <td>{faq.editor}</td>
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
    </StyledFAQBoard>
  );
};

export default FAQBoard;
