import React, { useCallback, useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container } from '../styles/Form';

const NewProduct = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (product === '' || description === '' || price === '') {
        setError(true);
        return;
      }

      setError(false);

      const products = localStorage.getItem('products');

      let dataProducts = [];

      const NewProduct = {
        id: uuidv4(),
        product,
        description,
        price,
      };

      if (!products) {
        dataProducts = [NewProduct];
      } else {
        const parseProducts = JSON.parse(products);
        dataProducts = [...parseProducts, NewProduct];
      }

      localStorage.setItem('products', JSON.stringify(dataProducts));

      setSuccess(true);

      setProduct('');
      setDescription('');
      setPrice('');
    },
    [product, description, price]
  );

  return (
    <Container>
      <section>
        <form
          onSubmit={handleSubmit}
          onFocus={() => {
            setSuccess(false);
          }}
        >
          {success && <span>Cadastro realizado com sucesso!</span>}
          {error && <span className="error">Preencha todos campos.</span>}
          <input
            name="product"
            value={product}
            placeholder="Produto"
            onChange={(event) => setProduct(event.target.value)}
          />
          <input
            name="description"
            placeholder="Descrição"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
          />
          <input
            name="price"
            placeholder="Preço"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />

          <button type="submit">CADASTRAR PRODUTO</button>
        </form>
      </section>
      <footer></footer>
    </Container>
  );
};

export default NewProduct;
