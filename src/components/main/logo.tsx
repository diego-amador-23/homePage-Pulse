import styled from "styled-components";
import LogoImg from "../../assets/LOGO-ROMI-PULSE-AZUL.svg";

const LogoContainer = styled.div`
  display: flex; // Permite centralizar o logo
  justify-content: center; // Centraliza o logo horizontalmente
  width: 100%; // Garante que o contêiner ocupe toda a largura
`;

const Logo = styled.img`
  width: 100%; // Faz com que o logo ocupe 100% da largura do contêiner
  max-width: 300px; // Define um tamanho máximo para o logo
  height: auto; // Mantém a proporção da imagem
  margin: 4rem 0; // Mantém o espaçamento em cima e embaixo
`;

function LogoMain() {
  return (
    <LogoContainer>
      <Logo src={LogoImg} alt="Logo Romi Connect" />
    </LogoContainer>
  );
}

export default LogoMain;
