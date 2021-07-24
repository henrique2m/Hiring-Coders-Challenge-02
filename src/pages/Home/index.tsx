import React, { useState, useCallback } from 'react';
import NewUser from '../../components/NewUser';
import NewProduct from '../../components/NewProduct';

import { Container, BoxButtons } from './styles';

const Home = () => {
  const [page, setPage] = useState(true);

  const handleTogglePage = useCallback(() => {
    setPage(!page);
  }, [page]);

  return (
    <Container>
      <BoxButtons>
        <button onClick={handleTogglePage}>Novo Usuário</button>
        <button onClick={handleTogglePage}>Novo Produto</button>
      </BoxButtons>

      {page ? <NewUser /> : <NewProduct />}
    </Container>
  );
};

export default Home;
