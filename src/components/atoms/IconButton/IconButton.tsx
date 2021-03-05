import { StyledIconButton } from './IconButton.styled';

interface Props {
  color?: string;
  onClick?: React.MouseEventHandler<HTMLSpanElement>;
}

const IconButton: React.FC<Props> = ({ children, ...props }) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};

export default IconButton;
