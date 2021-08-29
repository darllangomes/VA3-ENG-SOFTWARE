import ilustrationImg  from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import googleIconImg from '../assets/google-icon.svg';
import Constants from '../Constants';
import '../styles/auth.scss';
export function Home(){
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="ilustração Default para perguntas e respostas"/>
        <strong>{Constants.CRIE_SUA_SALA}</strong>
        <p>{Constants.TIRE_DUVIDAS}</p>
      </aside>
      <main>
        <div>
          <img src={logoImg} alt="LetMeAsk" />
          <button>
            <img src={googleIconImg} alt="Google"/>
            {Constants.CRIE_SALA_COM_GOOGLE}
          </button>
          <div>
            {Constants.ENTRE_EM_UMA_SALA}
          </div>
          <form>
            <input type="text" placeholder="Digite o código da sala"/>
          </form>
        </div>
      </main>
    </div>
  );
}