import ilustrationImg  from '../assets/illustration.svg';
import logoImg from '../assets/logo.svg';
import Constants from '../Constants';
import { Button } from '../Components/Button';
import '../styles/NewRoom.scss';

export function NewRoom(){
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="ilustração Default para perguntas e respostas"/>
        <strong>{Constants.CRIE_SUA_SALA}</strong>
        <p>{Constants.TIRE_DUVIDAS}</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="Letmeask"/>
          <h2>{Constants.CRIAR_NOVA_SALA}</h2>
          <form>
            <input type="text" placeholder="Digite o código da sala"/>
            <Button>
              {Constants.ENTRAR_SALA}
            </Button>
          </form>
          <p>{Constants.QUER_ENTRAR_SALA_EXISTENTE} <a href=".">{Constants.CLIQUE_AQUI}</a></p>
        </div>
      </main>
    </div>
  );
}