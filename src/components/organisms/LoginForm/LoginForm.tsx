import React, { useState } from 'react';
import { SignIn } from '@api';
import axios from 'axios';
import sha256 from 'sha256';
import UnderlineInput from 'components/atoms/UnderlineInput/UnderlineInput';
import FlexButton from 'components/atoms/FlexButton/FlexButton';
import { apiAdress } from 'common/constants/ApiAdress';
import { useInput } from 'hooks/useInput';
import { StyledLoginForm, StyledMarginBox, StyledCheckMessage, StyledLoginButtonWrapper } from './LoginForm.styled';

const LoginForm: React.FC = () => {
  const [email, handleEmail] = useInput('');
  const [password, handlePassword] = useInput('');

  const [isLoginFailed, setIsLoginFailed] = useState(false);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = event => {
    event.preventDefault();

    const cryptoPassword = sha256(password);

    const body: SignIn = {
      email,
      password: cryptoPassword,
    };

    axios
      .post(`${apiAdress}/auth/signin`, body)
      .then(res => {
        localStorage.setItem('accessToken', res.data.data.accessToken);
        localStorage.setItem('refreshToken', res.data.data.refreshToken);
        window.location.pathname = '/';
      })
      .catch(err => {
        if (err.response.status === 404) {
          setIsLoginFailed(true);
        }
      });
  };

  return (
    <StyledLoginForm onSubmit={handleSubmit}>
      <h1>아이디(이메일)</h1>
      <UnderlineInput value={email} onChange={handleEmail} />
      <StyledMarginBox margin={2} />

      <h1>비밀번호</h1>
      <UnderlineInput value={password} type="password" onChange={handlePassword} />
      <StyledCheckMessage visible={isLoginFailed}>가입되지 않은 계정이거나 잘못된 비밀번호입니다</StyledCheckMessage>
      <StyledMarginBox margin={2} />

      <StyledLoginButtonWrapper>
        <FlexButton width="120px" height="40px" theme="sky">
          로그인
        </FlexButton>
      </StyledLoginButtonWrapper>
    </StyledLoginForm>
  );
};

export default LoginForm;
