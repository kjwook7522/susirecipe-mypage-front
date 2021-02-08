import { StyledSelect } from './Select.styled';

interface Props {
  list: Array<string>;
}

const Select: React.FC<Props> = ({ list }) => {
  return (
    <StyledSelect>
      {list.map((item, idx) => (
        <option key={idx}>{item}</option>
      ))}
    </StyledSelect>
  );
};

export default Select;
