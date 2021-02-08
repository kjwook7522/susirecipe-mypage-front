import { StyledInputBox } from './InputBox.styled';

interface Props {
  label: string;
  labelFor?: string;
}

const InputBox: React.FC<Props> = ({ children, label, labelFor }) => {
  return (
    <StyledInputBox>
      <label htmlFor={labelFor}>{label}</label>
      {children}
    </StyledInputBox>
  );
};

export default InputBox;
