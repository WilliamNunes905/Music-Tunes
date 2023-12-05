import { useEffect, useState } from 'react';
import Header from '../../components/Header';
import NavBar from '../../components/NavBar';
import { getUser } from '../../services/userAPI';
import { UserType } from '../../types';

function Perfil() {
  const initialUser = {
    name: '',
    image: '',
    description: '',
  };
  const [user, setUser] = useState<UserType>(initialUser);

  useEffect(() => {
    const getApi = async () => {
      const response = await getUser();
      setUser(response);
    };
    getApi();
  }, []);

  return (
    <div>
      <Header>Perfil</Header>
      <NavBar />
      <h2>
        Seja bem-vindo:
        {' '}
        { user?.name }
      </h2>
    </div>
  );
}

export default Perfil;
