import styled from "styled-components";
const AchievementsContainer = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(135deg, #6b73ff, #000dff);
  min-height: 100vh;
`;

const Header = styled.h1`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #ffffff;
`;

const CardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

export { AchievementsContainer, Header, CardsWrapper };
