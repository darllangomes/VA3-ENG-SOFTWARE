import ilustrationImg  from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import Constants from '../Constants';
import '../styles/auth.scss';
import { Button } from '../Components/Button';

export function Home(){
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="ilustração Default para perguntas e respostas"/>
        <strong>{Constants.CRIE_SUA_SALA}</strong>
        <p>{Constants.TIRE_DUVIDAS}</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="LetMeAsk" />
            <button className="create-room">
              <img src={googleIconImg}/>
              {Constants.CRIE_SALA_COM_GOOGLE}
            </button>
          <div className="separator">
              {Constants.OU_ENTRE_EM_UMA_SALA}
          </div>
          <form>
            <input type="text" placeholder="Digite o código da sala"/>
            <Button>
              {Constants.ENTRAR_SALA}
            </Button>
          </form>
        </div>
      </main>
    </div>
  );
}