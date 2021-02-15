import { StyledMenuPopup } from './MenuPopup.styled';

interface Props {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  active?: boolean;
  menuList: Array<string>;
}

const MenuPopup: React.FC<Props> = ({ menuList, ...props }) => {
  return (
    <StyledMenuPopup {...props}>
      {menuList.map((menu, idx) => (
        <li key={idx}>{menu}</li>
      ))}
    </StyledMenuPopup>
  );
};

export default MenuPopup;
