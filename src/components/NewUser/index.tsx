import React, { useCallback, useState, useEffect, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container } from '../styles/Form';
import { Users } from './styles';

interface IUsers {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  ages: number;
  cpf: string;
  address: string;
  avatar: string;
}

const NewUser = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [ages, setAges] = useState('');
  const [cpf, setCpf] = useState('');
  const [address, setAddress] = useState('');
  const loadUsers = localStorage.getItem('users');
  const [users, setUsers] = useState<IUsers[]>();

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      if (
        firstName === '' ||
        lastName === '' ||
        email === '' ||
        ages === '' ||
        cpf === '' ||
        address === ''
      ) {
        setError(true);
        return;
      }

      setError(false);

      const users = localStorage.getItem('users');

      let dataUsers = [];
      const id = uuidv4();

      const newUser = {
        id,
        firstName,
        lastName,
        email,
        ages,
        cpf,
        address,
        avatar: `https://avatars.dicebear.com/api/male/${id}.svg`,
      };

      if (!users) {
        dataUsers = [newUser];
      } else {
        const parseUsers = JSON.parse(users);
        dataUsers = [...parseUsers, newUser];
      }

      localStorage.setItem('users', JSON.stringify(dataUsers));

      setSuccess(true);

      setFirstName('');
      setLastName('');
      setEmail('');
      setAges('');
      setCpf('');
      setAddress('');
    },
    [firstName, lastName, email, ages, cpf, address]
  );

  useEffect(() => {
    if (loadUsers) {
      setUsers(JSON.parse(loadUsers));
    }
  }, [loadUsers]);

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
            name="firstName"
            value={firstName}
            placeholder="Nome"
            onChange={(event) => setFirstName(event.target.value)}
          />
          <input
            name="lastName"
            placeholder="Sobrenome"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <input
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <input
            name="ages"
            value={ages}
            placeholder="Idade"
            onChange={(event) => setAges(event.target.value)}
          />
          <input
            name="cpf"
            placeholder="CPF"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
          />
          <input
            name="address"
            placeholder="Endereço"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
          <button type="submit">CADASTRAR USUÁRIO</button>
        </form>
      </section>
      {users?.length !== 0 && (
        <Users>
          <ul>
            {users?.map((user) => (
              <li key={user.id}>
                <img src={user.avatar} alt={user.firstName} />
                <div>
                  <strong>{`${user.firstName} ${user.lastName}`}</strong>
                  <small>{user.email}</small>
                </div>
              </li>
            ))}
          </ul>
        </Users>
      )}
    </Container>
  );
};

export default NewUser;
