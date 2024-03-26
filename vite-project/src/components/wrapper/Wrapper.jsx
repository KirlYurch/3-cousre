import { WrapperStyled } from "./Wrapper.Styled";

export default function Wrapper({ children }) {
  return (
  <WrapperStyled>
    {children}
    </WrapperStyled>
  );
}
