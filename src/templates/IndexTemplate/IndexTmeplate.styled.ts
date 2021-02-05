import styled from 'styled-components';

export const StyledIndexTemplate = styled.div`
  padding: 2.5rem 4.5rem;
`;

export const StyledDdayAlertSection = styled.section`
  margin-bottom: 3rem;
  display: flex;
  justify-content: space-between;

  .alert-box {
    width: 30%;
  }
`;

export const StyledMenuSection = styled.section`
  margin-bottom: 3rem;
  position: relative;

  .detail-btn {
    position: absolute;
    top: -2px;
    right: 0;
  }

  h1 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  h2 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.25rem;
    color: #909090;

    span {
      cursor: pointer;
    }

    .active {
      color: #000;
    }
  }
`;

export const StyledSNSSection = styled.section`
  h1 {
    margin-bottom: 1.5rem;
    font-weight: 600;
    font-size: 1.25rem;
  }

  p {
    margin-bottom: 1.5rem;
    color: #404040;
  }

  .sns-btn {
    margin-right: 1.5rem;
  }
`;

export const StyledTakingConsulting = styled.div`
  width: 100%;

  .head {
    display: flex;
    margin-bottom: 0.8rem;

    .item {
      text-align: center;
      font-weight: 600;
    }

    .item:nth-child(1) {
      width: 100%;
      margin-right: 1.5rem;
    }

    .item:nth-child(2) {
      width: 200px;
    }
  }

  .row {
    display: flex;
    margin-bottom: 0.8rem;

    .item {
      height: 70px;
      padding: 0 1rem;
      display: flex;
      border: none;
      border-radius: 10px;
      background-color: #f6f6f6;
      font-size: 0.9rem;
    }

    .item:nth-child(1) {
      width: 100%;
      margin-right: 1.5rem;
      align-items: center;
    }

    .item:nth-child(2) {
      width: 200px;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const StyledFile = styled.div`
  .row {
    display: flex;
    margin-bottom: 0.8rem;

    .item {
      height: 70px;
      display: flex;
      border: none;
      border-radius: 10px;
      background-color: #f6f6f6;
      font-size: 0.9rem;
    }

    .item:nth-child(1) {
      width: 100%;
      padding: 0 1rem;
      margin-right: 1.5rem;
      align-items: center;
    }

    .item:nth-child(2) {
      width: 200px;
      justify-content: center;
      align-items: center;
      background-color: transparent;
    }
  }
`;

export const StyledNoticeNews = styled.div`
  width: 100%;
  padding: 2rem;
  border: none;
  border-radius: 10px;
  background-color: #f6f6f6;

  ul {
    li {
      padding: 0.6rem 0;
      font-size: 0.9rem;
    }
  }
`;
