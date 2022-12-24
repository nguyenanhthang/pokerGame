import styled from "styled-components";

export const ListTaskContainer = styled.div`
    background:#ffff;
    width:500px;
    height:500px;
`


export const Container = styled.div`
  display: flex;
`;

export const TaskList = styled.div`
    border: #fbbc1a 1px solid;
    display: flex;
    flex-direction: column;
    background: transparent;
    min-width: 341px;
    border-radius: 5px;
    padding: 15px 15px;
    margin-right: 45px;
`;

export const TaskColumnStyles = styled.div`
  margin: 8px;
  display: flex;
  width: 100%;
  min-height: 80vh;
`;

export const Title = styled.span`
  color: #10957d;
  background: rgba(16, 149, 125, 0.15);
  padding: 2px 10px;
  border-radius: 5px;
  align-self: flex-start;
`;