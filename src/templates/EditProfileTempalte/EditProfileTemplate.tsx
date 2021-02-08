import { FlexButton } from 'components/atoms/Button/Button';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import {
  ACADEMICSTATUSLIST,
  BANKLIST,
  DAYLIST,
  GENDERLIST,
  GRADELIST,
  MONTHLIST,
  SCHOOLTYPELIST,
  YEARLIST,
} from 'common/constants/SelectList';
import {
  StyledEditprofileTemplate,
  StyledPageTitle,
  StyledInfoForm,
  StyledInputBox,
} from './EditProfileTemplate.styled';

const EditProfileTempalte: React.FC = () => {
  return (
    <StyledEditprofileTemplate>
      <StyledPageTitle>개인 정보 수정</StyledPageTitle>
      <StyledInfoForm>
        <h3>- 필수정보 입력</h3>

        <StyledInputBox>
          <label htmlFor="name">이름</label>
          <Input id="name" width="150px" required placeholder="홍길동" />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="gender">성별</label>
          <Select id="gender" list={GENDERLIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label>생년월일</label>
          <Select list={YEARLIST} />
          <Select list={MONTHLIST} />
          <Select list={DAYLIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="address">주소 검색</label>
          <Input id="address" width="300px" required />
          <FlexButton theme="gray" width="80px" height="auto">
            검색
          </FlexButton>
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="address-detail">상세주소</label>
          <Input id="address-detail" width="300px" placeholder="101동 1001호" />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="phone">휴대폰 번호</label>
          <Input id="phone" width="200px" type="tel" required placeholder="'-' 없이 입력해주세요" />
          <FlexButton theme="gray" width="80px" height="auto">
            인증
          </FlexButton>
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="password">비밀번호 변경</label>
          <Input id="password" type="password" width="200px" placeholder="8자리 이상 입력해주세요" />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="password-check">비밀번호 확인</label>
          <Input id="password-check" width="200px" type="password" />
          <FlexButton theme="gray" width="80px" height="auto">
            확인
          </FlexButton>
        </StyledInputBox>
      </StyledInfoForm>

      <StyledInfoForm>
        <h3>- 추가 정보 입력(대학생 멘토, 컨설턴트만 입력해주세요)</h3>
        <h4>학교 정보</h4>

        <StyledInputBox>
          <label htmlFor="school-type">출신 고교(유형)</label>
          <Select id="school-type" list={SCHOOLTYPELIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="university">대학교</label>
          <Input id="university" width="130px" required placeholder="숭실대학교" />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="academic-status">학적구분</label>
          <Select id="academic-status" list={ACADEMICSTATUSLIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="enterance-year">입학년도</label>
          <Select id="enterance-year" list={YEARLIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="grade">학년</label>
          <Select id="grade" list={GRADELIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="major">전공</label>
          <Input id="major" width="130px" required placeholder="영문학과" />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="double-major">복수전공</label>
          <Input id="double-major" width="130px" placeholder="경영학과" />
        </StyledInputBox>

        <h4>계좌 정보</h4>
        <StyledInputBox>
          <label htmlFor="bank">은행명</label>
          <Select id="bank" list={BANKLIST} />
        </StyledInputBox>

        <StyledInputBox>
          <label htmlFor="account">계좌 번호</label>
          <Input id="account" width="300px" required placeholder="'-' 없이 입력해주세요" />
        </StyledInputBox>
      </StyledInfoForm>
    </StyledEditprofileTemplate>
  );
};

export default EditProfileTempalte;
