import React from 'react';
import { UserTab, UserType } from '@objects';
import { StyledUserTypeToggle, StyledTypeButton } from './UserTypeToggle.styled';

interface Props {
  userTypeList: Array<UserType>;
  activeUserType: UserTab;
  handleUserType: React.Dispatch<React.SetStateAction<UserTab>>;
}

const UserTypeToggle: React.FC<Props> = ({ userTypeList, activeUserType, handleUserType }: Props) => (
  <StyledUserTypeToggle>
    {userTypeList.map(userType => (
      <StyledTypeButton
        key={userType.value}
        active={activeUserType === userType.value}
        type="button"
        onClick={() => handleUserType(userType.value)}
      >
        {userType.name}
      </StyledTypeButton>
    ))}
  </StyledUserTypeToggle>
);

export default React.memo(UserTypeToggle);
