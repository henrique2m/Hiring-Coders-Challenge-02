import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  padding-top: 42px;

  section {
    width: 40rem;
    border-radius: 10px;
  }

  section form {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 10px;

    background: #ff3366;
  }

  section form span {
    font-size: 14px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background: #88e340;
    border-radius: 10px;
  }

  section form span.error {
    background: #ff6347;
  }

  section form input,
  button {
    width: 100%;
    height: 54px;
    margin-top: 10px;
    color: #292929;
    font-size: 18px;
    border-radius: 10px;
  }

  section form input {
    padding-left: 10px;
  }

  section form button {
    background: #292929;
    color: #fff;
    font-weight: bold;
    transition: background 0.2s;
    cursor: pointer;

    &:hover {
      color: #292929;
      background: #fff;
    }
  }
`;
