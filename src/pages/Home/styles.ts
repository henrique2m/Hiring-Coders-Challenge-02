import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BoxButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;

  button {
    width: 100px;
    height: 100px;

    font-size: 16px;
    font-weight: bold;
    border-radius: 5px;
    margin-right: 10px;
    background: #ff3366;
    cursor: pointer;
    transition: background 0.2s;

    &:hover {
      background: #fff;
      color: #ff3366;
    }
  }
`;
