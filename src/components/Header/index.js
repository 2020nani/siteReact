import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container, ConteudoLogado, Profile } from '../Header/styles';
import { signOut} from '../../store/modules/auth/actions'

export default function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user)
  const signed = useSelector(state => state.auth.signed)
  function Signout(){
    dispatch(signOut())
  }
  return (

    <Container> 
      {!signed ?
      <div>
      <Link to = '/login' > <button> Entrar </button> </Link >
      <button onClick ={() => Signout() }>sair</button>
      </div>
    :
    <ConteudoLogado><span>{user.email}</span>
    <Link to = '/profile' ><button >Perfil</button> </Link>
    <button onClick ={() => Signout() }>sair</button>
    </ConteudoLogado>
    }
    </Container>

  );

}
