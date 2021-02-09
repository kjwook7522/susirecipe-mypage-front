import DdayAlert from 'components/atoms/DdayAlert/DdayAlert';
import { StyledDdayBoard } from './DdayBoard.styled';

interface Props {
  ddayList: Array<React.ReactNode>;
}

// ** 현재 DdayBoard는 DdayAlert를 3개만 받습니다 ** //

const DdayBoard: React.FC<Props> = ({ ddayList }) => {
  return (
    <StyledDdayBoard>
      <div className="dday-box">
        <DdayAlert>{ddayList[0]}</DdayAlert>
      </div>
      <div className="dday-box">
        <DdayAlert>{ddayList[1]}</DdayAlert>
      </div>
      <div className="dday-box">
        <DdayAlert>{ddayList[2]}</DdayAlert>
      </div>
    </StyledDdayBoard>
  );
};

export default DdayBoard;
