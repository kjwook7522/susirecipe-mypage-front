import styled from 'styled-components';

export const StyledConsultingCard = styled.div`
  width: 100%;
  padding: 0.4em;
  display: inline-block;
  border: none;
  border-radius: 10px;
  background-color: #f6f6f6;
  box-sizing: border-box;
  box-shadow: rgba(0, 0, 0, 0.15) 0px 2px 8px;
`;

export const StyledThumbnailWrapper = styled.div`
  width: 100%;
  position: relative;

  &::before {
    content: '';
    display: block;
    padding-top: 100%;
  }

  img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const StyledConsultingContent = styled.div`
  padding: 0.5em;
  display: flex;
  justify-content: space-between;
`;

export const StyledConsultingInfo = styled.div`
  h1 {
    margin-bottom: 0.3rem;
    font-weight: 600;
    font-size: 0.85rem;
  }

  h2 {
    color: #404040;
    font-size: 0.75rem;
  }
`;

export const StyledConsultingBtnWrapper = styled.div`
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin: 0.2rem 0;
  }
`;
