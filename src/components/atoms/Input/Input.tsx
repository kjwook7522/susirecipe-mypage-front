import { StyledInput } from './Input.styled';

interface Props {
  id?: string;
  name?: string;
  width?: string;
  type?:
    | 'text'
    | 'password'
    | 'email'
    | 'number'
    | 'checkbox'
    | 'range'
    | 'file'
    | 'radio'
    | 'range'
    | 'submit'
    | 'tel'
    | 'color';
  className?: string;
  value?: string;
  placeholder?: string;
  backgroundColor?: string;
  required?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  maxLength?: number;
  minLength?: number;
  onClick?: (event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ type = 'text', ...props }) => {
  return <StyledInput type={type} {...props} />;
};

export default Input;
