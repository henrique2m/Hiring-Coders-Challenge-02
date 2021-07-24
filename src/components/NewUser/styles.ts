import styled from 'styled-components';

export const Users = styled.footer`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  ul {
    width: 40rem;
    min-height: 50px;
    list-style: none;
    display: flex;
    flex-direction: column;
    margin-top: 60px;
  }

  li {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: #fff;
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 10px;

    border-left: 1px solid #ff3366;
  }

  li strong {
    font-size: 16px;
    font-weight: bold;
  }

  li small {
    font-size: 14px;
  }

  li strong,
  small {
    color: #292929;
  }

  ul li img {
    width: 50px;
    height: 50px;
    border: 1px solid #ff3366;
    border-radius: 50%;
  }

  ul li div {
    display: flex;
    min-height: 50px;
    flex-direction: column;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-left: 1px solid #ff3366;
    margin-left: 10px;
  }
`;
