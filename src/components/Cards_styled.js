import { styled } from "styled-components";
// -----------------------------------------------------------------------------------------------
// -----------------------------CardLayout------------------------------------------------------
const CardLists = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  grid-gap: 20px;
`;

// -----------------------------------------------------------------------------------------------
// ----------------------------------Cards-------------------------------------------------------

const BootstrapCard = styled.div`
  width: 20rem;
  background: var(--bg-element1);
  border-radius: 4px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 4px 16px 0px;
  transition: box-shadow 0.25s ease-in 0s, transform 0.25s ease-in 0s;
  margin: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 15px;
`;

const CardBody = styled.div`
  border-top: solid 1px rgba(0, 0, 0, 0.1);
  padding: 10px;
`;

export { CardLists, BootstrapCard, CardBody };
