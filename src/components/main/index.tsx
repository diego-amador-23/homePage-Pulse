import styled from "styled-components";
import Cards from "../cards";
import LogoMain from "./logo";

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; // Centraliza os filhos (incluindo o logo e os cards)
  width: 100%; // Garante que o contêiner ocupe toda a largura
`;

function Main() {
  return (
    <MainContainer>
      <LogoMain />
      <Cards />
    </MainContainer>
  );
}
export default Main;
