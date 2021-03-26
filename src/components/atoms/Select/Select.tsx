import React from 'react';
import { StyledSelect } from './Select.styled';

interface Props {
  id?: string;
  className?: string;
  value?: string;
  list: Array<string>;
}

const Select: React.FC<Props> = ({ list, id, className, value }: Props) => (
  <StyledSelect id={id} className={className}>
    {list.map(item => (
      <option key={item} value={value}>
        {item}
      </option>
    ))}
  </StyledSelect>
);

export default React.memo(Select);
