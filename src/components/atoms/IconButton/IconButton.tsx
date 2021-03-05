import { StyledIconButton } from './IconButton.styled';

interface Props {
  color?: string;
  clickRef?: React.RefObject<any>;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const IconButton: React.FC<Props> = ({ children, clickRef, ...props }) => {
  return <StyledIconButton ref={clickRef} {...props}>{children}</StyledIconButton>;
};

export default IconButton;
