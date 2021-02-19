import styled from 'styled-components';

export const StyledConsultingTemplate = styled.div`
  padding: 2.5rem 4.5rem;
`;

export const StyledHeader = styled.h1`
  margin-bottom: 1.5rem;
  font-size: 1rem;

  b {
    font-weight: 700;
  }
`;

export const StyledConsultingListSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  .list-item {
    width: 23%;
    margin-bottom: 2rem;

    @media (max-width: 1600px) {
      width: 31%;
    }

    @media (max-width: 1280px){
      width: 48%;
    }
  }
`;
