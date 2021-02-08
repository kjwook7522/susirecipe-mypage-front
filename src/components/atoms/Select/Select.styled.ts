import styled from 'styled-components';

export const StyledSelect = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: url('/icons/chevron-down.svg') 90% center no-repeat;
  background-size: 1rem;
  background-color: #fff;
  padding: 0.5rem;
  padding-right: 30px;
  border: none;
  border-radius: 7px;

  &:focus {
    outline: none;
    box-shadow: 0 0 5px #3d3d3d;
  }
`;
