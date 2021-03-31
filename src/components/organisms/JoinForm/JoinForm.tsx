import React, { useCallback, useRef, useState } from 'react';
import { UserTab } from '@objects';
import { SignUp } from '@api';
import axios from 'axios';
import sha256 from 'sha256';
import UnderlineInput from 'components/atoms/UnderlineInput/UnderlineInput';
import UserTypeToggle from 'components/molecules/UserTypeToggle/UserTypeToggle';
import ServiceAgreements from 'components/molecules/ServiceAgreements/ServiceAgreements';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { UserTypeList } from 'common/constants/UserType';
import { apiAdress } from 'common/constants/ApiAdress';
import { useInput } from 'hooks/useInput';
import { StyledCheckMessage, StyledJoinForm, StyledMarginBox } from './JoinForm.styled';

const JoinForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [name, handleName] = useInput('');
  const [phone, handlePhone] = useInput('');
  const [termOfServiceAgreement, setTermOfServiceAgreement] = useState(false);
  const [privacyPolicyAgreement, setPrivacyPolicyAgreement] = useState(false);
  const [receiveMarketingAgreement, setReceiveMarketingAgreement] = useState(false);

  const [emailStatus, setEmailStatus] = useState({ isDuplicated: false, isValid: false, message: '' });
  const [passwordStatus, setPasswordStatus] = useState({ isOverSix: false, isValid: false, message: '' });
  const [passwordCheckStatus, setPasswordCheckStatus] = useState({ visible: false, isValid: false, message: '' });

  const [userType, setUserType] = useState<UserTab>('STUDENT');

  const emailValidTimer = useRef<number>();

  const handleSubmit: React.FormEventHandler = event => {
    event.preventDefault();

    if (!emailStatus.isValid) {
      alert('이메일이 올바르지 못합니다');
      return;
    }

    if (emailStatus.isDuplicated) {
      alert('중복된 이메일 계정이 있습니다');
      return;
    }

    if (!passwordStatus.isOverSix || !passwordStatus.isValid) {
      alert('비밀번호가 올바르지 못합니다');
      return;
    }

    if (!passwordCheckStatus.isValid) {
      alert('비밀번호 확인이 올바르지 못합니다');
      return;
    }

    if (!termOfServiceAgreement) {
      alert('서비스 이용약관 동의가 필수입니다');
      return;
    }

    const cryptoPassword = sha256(password);

    const body: SignUp = {
      email,
      password: cryptoPassword,
      name,
      phoneNumber: phone,
      type: userType,
      termOfServiceAgreement,
      privacyPolicyAgreement,
      receiveMarketingAgreement,
    };

    axios
      .post(`${apiAdress}/auth/signup`, body)
      .then(res => {
        alert('회원가입이 정상적으로 완료되었습니다');
        localStorage.setItem('accessToken', res.data.data.accessToken);
        localStorage.setItem('refreshToken', res.data.data.refreshToken);
        window.location.pathname = '/';
      })
      .catch(err => {
        alert(`회원가입에 실패하였습니다\nERROR: ${err.response.status}\nMESSAGE: ${err.response.data.message}`);
      });
  };

  const handleEmail: React.ChangeEventHandler<HTMLInputElement> = useCallback(event => {
    const { value } = event.target;
    setEmail(value);
    handleEmailStatus(value);

    // set some time interval
    setEmailStatus(prev => ({ ...prev, isDuplicated: false }));
    window.clearTimeout(emailValidTimer.current);
    emailValidTimer.current = window.setTimeout(() => isEmailDuplicated(value), 1000);
  }, []);

  const handlePassword: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      const { value } = event.target;
      setPassword(value);
      handlePasswordStatus(value);
      handlePasswordCheckStatus(value, passwordCheck);
    },
    [passwordCheck]
  );

  const handlePasswordCheck: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    event => {
      const { value } = event.target;
      setPasswordCheck(value);
      handlePasswordCheckStatus(password, value);
    },
    [password]
  );

  const handleEmailStatus = (_email: string) => {
    // handle email type
    const regExp = /^[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,4}$/i;
    if (regExp.test(_email)) {
      setEmailStatus(prev => ({ ...prev, isValid: true }));
    } else {
      setEmailStatus(prev => ({ ...prev, isValid: false, message: '이메일 형태로 입력해주세요' }));
    }
  };

  const handlePasswordStatus = (_password: string) => {
    const regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{6,20}$/;

    if (regExp.test(_password)) {
      setPasswordStatus(prev => ({ ...prev, isValid: true }));
    } else {
      setPasswordStatus(prev => ({ ...prev, isValid: false, message: '영문, 숫자 조합으로 만들어주세요' }));
    }

    if (_password.length < 6) {
      setPasswordStatus(prev => ({ ...prev, isOverSix: false, message: '비밀번호는 6자 이상이여야 합니다' }));
    } else {
      setPasswordStatus(prev => ({ ...prev, isOverSix: true }));
    }
  };

  const handlePasswordCheckStatus = (_password: string, _passwordCheck: string) => {
    // handle visible
    if (_passwordCheck) {
      setPasswordCheckStatus(prev => ({ ...prev, visible: true }));
    } else {
      setPasswordCheckStatus(prev => ({ ...prev, visible: false }));
    }

    // handle match correct
    if (_password === _passwordCheck) {
      setPasswordCheckStatus(prev => ({ ...prev, isValid: true, message: '비밀번호가 일치합니다' }));
    } else {
      setPasswordCheckStatus(prev => ({ ...prev, isValid: false, message: '비밀번호가 일치하지 않습니다' }));
    }
  };

  const isEmailDuplicated = (_email: string) => {
    const body = { email: _email };
    axios
      .post(`${apiAdress}/auth/email/duplicate`, body)
      .then(res => {
        if (res.status === 204) {
          setEmailStatus(prev => ({ ...prev, isDuplicated: false }));
        }
      })
      .catch(err => {
        if (err.response.status === 409) {
          setEmailStatus(prev => ({ ...prev, isDuplicated: true, message: '중복된 가입 이메일이 존재합니다' }));
        }
      });
  };

  return (
    <StyledJoinForm onSubmit={handleSubmit}>
      <h1>이메일 계정 입력</h1>
      <UnderlineInput
        value={email}
        required
        name="email"
        type="email"
        placeholder="abcd@susirecipe.com"
        onChange={handleEmail}
      />
      <StyledCheckMessage visible={!emailStatus.isValid || emailStatus.isDuplicated}>
        {emailStatus.message}
      </StyledCheckMessage>
      <StyledMarginBox margin={2} />

      <h1>비밀번호 입력</h1>
      <UnderlineInput
        value={password}
        name="password"
        type="password"
        minLength={6}
        maxLength={20}
        placeholder="6-20자 영문, 숫자 조합"
        onChange={handlePassword}
      />
      <StyledCheckMessage visible={!passwordStatus.isOverSix || !passwordStatus.isValid}>
        {passwordStatus.message}
      </StyledCheckMessage>
      <StyledMarginBox margin={2} />

      <h1>비밀번호 확인</h1>
      <UnderlineInput
        value={passwordCheck}
        required
        name="password-check"
        type="password"
        minLength={6}
        maxLength={20}
        onChange={handlePasswordCheck}
      />
      <StyledCheckMessage visible={passwordCheckStatus.visible} status={passwordCheckStatus.isValid}>
        {passwordCheckStatus.message}
      </StyledCheckMessage>
      <StyledMarginBox margin={2} />

      <h1>이름</h1>
      <UnderlineInput value={name} required name="name" placeholder="김수시" onChange={handleName} />
      <StyledMarginBox margin={3} />

      <h1>휴대전화</h1>
      <UnderlineInput
        value={phone}
        required
        name="phone"
        type="tel"
        placeholder="'-'없이 입력해주세요"
        onChange={handlePhone}
      />
      <StyledMarginBox margin={3} />

      <h1>회원 유형</h1>
      <UserTypeToggle userTypeList={UserTypeList} activeUserType={userType} handleUserType={setUserType} />
      <StyledMarginBox margin={2} />

      <ServiceAgreements
        termOfServiceAgreement={termOfServiceAgreement}
        privacyPolicyAgreement={privacyPolicyAgreement}
        receiveMarketingAgreement={receiveMarketingAgreement}
        setTermOfServiceAgreement={setTermOfServiceAgreement}
        setPrivacyPolicyAgreement={setPrivacyPolicyAgreement}
        setReceiveMarketingAgreement={setReceiveMarketingAgreement}
      />
      <StyledMarginBox margin={2} />

      <FlexButton width="100%" height="50px" theme="sky">
        회원가입
      </FlexButton>
    </StyledJoinForm>
  );
};

export default JoinForm;
