import styled from "styled-components";

interface wrapperProps{
    width?: string;
    height?:string;
    margintop?:string;
}

interface StyledWrapperFillProps extends wrapperProps
{
    isfinished:string;

}

export const StyledWrapper = styled.div<wrapperProps>`
  display: flex;
  justify-content: center;
  padding: 10px;
  align-items:center;
  margin-top: ${(props) => props.margintop};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;


export const StyledWrapperFill = styled(StyledWrapper)<StyledWrapperFillProps>`
    background: var(--gray-500);
    color: ${(props) => props.isfinished=="false"?"var(--gray-100)":"var(--gray-300)"};
    text-decoration:  ${(props) => props.isfinished=="false"?"none":"line-through"};
    border: 1 px solid var(gray-400);
    border-radius: 8px;
    justify-content: space-between;
    
`

export const StyledWrapperColumn = styled(StyledWrapper)`
    flex-direction: column;
    color: var(--gray-300);
    gap: 5px;
    
    
`