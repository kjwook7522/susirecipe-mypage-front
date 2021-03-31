import React, { useCallback } from 'react';
import Checkbox from 'components/atoms/Checkbox/Checkbox';
import { StyledServiceAgreements, StyledAllAgreementBox, StyledAgreementBox } from './ServiceAgreements.styled';

interface Props {
  termOfServiceAgreement: boolean;
  privacyPolicyAgreement: boolean;
  receiveMarketingAgreement: boolean;
  setTermOfServiceAgreement: React.Dispatch<React.SetStateAction<boolean>>;
  setPrivacyPolicyAgreement: React.Dispatch<React.SetStateAction<boolean>>;
  setReceiveMarketingAgreement: React.Dispatch<React.SetStateAction<boolean>>;
}

const ServiceAgreements: React.FC<Props> = ({
  termOfServiceAgreement,
  privacyPolicyAgreement,
  receiveMarketingAgreement,
  setTermOfServiceAgreement,
  setPrivacyPolicyAgreement,
  setReceiveMarketingAgreement,
}: Props) => {
  const handleAllAgreement = useCallback(() => {
    if (termOfServiceAgreement && privacyPolicyAgreement && receiveMarketingAgreement) {
      setTermOfServiceAgreement(false);
      setPrivacyPolicyAgreement(false);
      setReceiveMarketingAgreement(false);
    } else {
      setTermOfServiceAgreement(true);
      setPrivacyPolicyAgreement(true);
      setReceiveMarketingAgreement(true);
    }
  }, [
    termOfServiceAgreement,
    privacyPolicyAgreement,
    receiveMarketingAgreement,
    setTermOfServiceAgreement,
    setPrivacyPolicyAgreement,
    setReceiveMarketingAgreement,
  ]);

  return (
    <StyledServiceAgreements>
      <StyledAllAgreementBox>
        <Checkbox
          id="agree-all"
          agreementTheme="all"
          checked={termOfServiceAgreement && privacyPolicyAgreement && receiveMarketingAgreement}
          onChange={handleAllAgreement}
        >
          모두 선택
        </Checkbox>
      </StyledAllAgreementBox>
      <StyledAgreementBox>
        <Checkbox
          id="term-of-service-agreement"
          agreementTheme="required"
          checked={termOfServiceAgreement}
          onChange={() => setTermOfServiceAgreement(prev => !prev)}
        >
          서비스 이용약관 동의
        </Checkbox>
        <Checkbox
          id="privacy-policy-agreement"
          agreementTheme="selected"
          checked={privacyPolicyAgreement}
          onChange={() => setPrivacyPolicyAgreement(prev => !prev)}
        >
          개인정보 처리방침 동의
        </Checkbox>
        <Checkbox
          id="receive-marketing-agreement"
          agreementTheme="selected"
          checked={receiveMarketingAgreement}
          onChange={() => setReceiveMarketingAgreement(prev => !prev)}
        >
          마케팅 수신 동의
        </Checkbox>
      </StyledAgreementBox>
    </StyledServiceAgreements>
  );
};

export default React.memo(ServiceAgreements);
