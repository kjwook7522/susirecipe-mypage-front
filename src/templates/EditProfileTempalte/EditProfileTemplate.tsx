import React from 'react';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import Input from 'components/atoms/Input/Input';
import Select from 'components/atoms/Select/Select';
import InputBox from 'components/molecules/InputBox/InputBox';
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
import { StyledEditprofileTemplate, StyledPageTitle, StyledInfoForm } from './EditProfileTemplate.styled';

const EditProfileTempalte: React.FC = () => (
  <StyledEditprofileTemplate>
    <StyledPageTitle>개인 정보 수정</StyledPageTitle>
    <StyledInfoForm>
      <h3>- 필수정보 입력</h3>

      <InputBox label="이름" labelFor="name">
        <Input id="name" width="150px" required placeholder="홍길동" />
      </InputBox>

      <InputBox label="성별" labelFor="gender">
        <Select id="gender" list={GENDERLIST} />
      </InputBox>

      <InputBox label="생년월일">
        <Select list={YEARLIST} />
        <Select list={MONTHLIST} />
        <Select list={DAYLIST} />
      </InputBox>

      <InputBox label="주소 검색" labelFor="address">
        <Input id="address" width="300px" required />
        <FlexButton theme="gray" width="80px" height="auto">
          검색
        </FlexButton>
      </InputBox>

      <InputBox label="상세주소" labelFor="address-detail">
        <Input id="address-detail" width="300px" placeholder="101동 1001호" />
      </InputBox>

      <InputBox label="휴대폰 번호" labelFor="phone">
        <Input id="phone" width="200px" type="tel" required placeholder="'-' 없이 입력해주세요" />
        <FlexButton theme="gray" width="80px" height="auto">
          인증
        </FlexButton>
      </InputBox>

      <InputBox label="비밀번호 변경" labelFor="password">
        <Input id="password" type="password" width="200px" placeholder="8자리 이상 입력해주세요" />
      </InputBox>

      <InputBox label="비밀번호 확인" labelFor="password-check">
        <Input id="password-check" width="200px" type="password" />
        <FlexButton theme="gray" width="80px" height="auto">
          확인
        </FlexButton>
      </InputBox>
    </StyledInfoForm>

    <StyledInfoForm>
      <h3>- 추가 정보 입력(대학생 멘토, 컨설턴트만 입력해주세요)</h3>
      <h4>학교 정보</h4>

      <InputBox label="출신 고교(유형)" labelFor="school-type">
        <Select id="school-type" list={SCHOOLTYPELIST} />
      </InputBox>

      <InputBox label="대학교" labelFor="university">
        <Input id="university" width="130px" required placeholder="숭실대학교" />
      </InputBox>

      <InputBox label="학적구분" labelFor="academic-status">
        <Select id="academic-status" list={ACADEMICSTATUSLIST} />
      </InputBox>

      <InputBox label="입학년도" labelFor="enterance-year">
        <Select id="enterance-year" list={YEARLIST} />
      </InputBox>

      <InputBox label="학년" labelFor="grade">
        <Select id="grade" list={GRADELIST} />
      </InputBox>

      <InputBox label="전공" labelFor="major">
        <Input id="major" width="130px" required placeholder="영문학과" />
      </InputBox>

      <InputBox label="복수전공" labelFor="double-major">
        <Input id="double-major" width="130px" placeholder="경영학과" />
      </InputBox>

      <h4>계좌 정보</h4>
      <InputBox label="은행명" labelFor="bank">
        <Select id="bank" list={BANKLIST} />
      </InputBox>

      <InputBox label="계좌 번호" labelFor="account">
        <Input id="account" width="300px" required placeholder="'-' 없이 입력해주세요" />
      </InputBox>
    </StyledInfoForm>
  </StyledEditprofileTemplate>
);

export default EditProfileTempalte;
