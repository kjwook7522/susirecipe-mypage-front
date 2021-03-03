import React, { useCallback, useState } from 'react';
import { useClickOutside } from 'hooks/useClickOutside';

interface Props {
  buttonComponent: React.FC<{
    onClick?: (event: React.MouseEvent<any, MouseEvent>) => void;
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

  const togglePopup = useCallback(() => {
    setIsPopup(prev => !prev);
  }, []);
  return (
    <>
      <ButtonComponent clickRef={buttonRef} onClick={togglePopup} {...buttonProps}>
        {buttonChildren}
      </ButtonComponent>
      {isPopup && <PopupComponent clickRef={popupRef} cancleCallback={() => setIsPopup(false)} {...popupProps} />}
    </>
  );
};

export default ButtonPopup;
