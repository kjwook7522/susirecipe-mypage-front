import { useClickOutside } from 'hooks/useClickOutside';
import React, { useState } from 'react';

interface Props {
  buttonComponent: React.FC<{
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    clickRef?: React.RefObject<any>;
  }>;
  buttonProps?: any;
  buttonChildren?: React.ReactNode;
  popupComponent: React.FC<{ clickRef?: React.RefObject<any> }>;
  popupProps?: any;
}

const ButtonPopup: React.FC<Props> = ({ buttonComponent, buttonProps, buttonChildren, popupComponent, popupProps }) => {
  const ButtonComponent = buttonComponent;
  const PopupComponent = popupComponent;
  const [isPopup, setIsPopup] = useState(false);
  const [popupRef, buttonRef] = useClickOutside(() => setIsPopup(false));
  return (
    <>
      <ButtonComponent clickRef={buttonRef} onClick={() => setIsPopup(prev => !prev)} {...buttonProps}>
        {buttonChildren}
      </ButtonComponent>
      {isPopup && <PopupComponent clickRef={popupRef} {...popupProps} />}
    </>
  );
};

export default ButtonPopup;
