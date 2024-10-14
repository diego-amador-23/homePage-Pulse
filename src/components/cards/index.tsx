import styled from "styled-components";
import Card from "./card";
import { cardData } from "./card";

const CardsContainer = styled.div`
  display: flex;
  align-items: flex-start; // Alinha os itens ao topo
  justify-content: center; // Alinhamento central
  gap: 1em; // Espaçamento entre os cards
  flex-wrap: wrap; // Permite que os cards se movam para a próxima linha

  @media (max-width: 768px) {
    justify-content: space-around; // Alinhamento em múltiplas colunas em telas menores
  }
`;

function Cards() {
  return (
    <CardsContainer>
      {cardData.map((card) => (
        <Card
          key={card.title} // Certifique-se de que `title` é único. Use `index` como fallback se necessário.
          image={card.image}
          title={card.title}
          text={card.text}
          color={card.color}
        />
      ))}
    </CardsContainer>
  );
}
export default Cards;
