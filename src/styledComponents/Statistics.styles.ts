import styled from "styled-components";

// Definindo as tipagens para os props
interface StatItemProps {
  type: "created" | "completed"; // Tipando as opções de tipo
}

export const StatsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 46rem;
  font-size: 14px;
`;

export const StatItem = styled.strong<StatItemProps>`
  display: flex;
  align-items: center;
  color: ${(props) => (props.type === "created" ? "var(--blue)" : "var(--purple)")};
  gap:5px;
  
  span {
    padding:0 10px;
    background: var(--gray-400);
    color: var(--gray-100);
    min-width: 1.5625rem;
    min-height: 1.1875rem;
    width:max-content;
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
