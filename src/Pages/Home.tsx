import googleIconImg from '../assets/google-icon.svg';
import Constants from '../Constants';
import '../styles/auth.css';
import { Button } from '../Components/Button';
import { useHistory } from 'react-router-dom';
import {auth, firebase} from '../services/firebase';
import {useContext} from 'react';

export function Home(){
  const history = useHistory();

  function handleCreateRoom(){
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
      console.log(result);
      history.push('/dashboard');
    });
      
  }



  return (
    <div id="page-auth">
      <aside>
        <strong>{Constants.TEXT_HOME}</strong>
      </aside>
      <main>
        <div className="main-content">
            <Button className="create-room" onClick={handleCreateRoom}>
              <img src={googleIconImg}/>
              {Constants.ENTRAR_COM_GOOGLE}
            </Button>
        </div>
      </main>
    </div>
  );
}