import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";



function App() {
  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="backgroud app" />
        <div className="info">
          <div>
            <input name="usuario" placeholder="@username" />
            <button>Buscar</button>
          </div>
          <div className="perfil">
            <img src="src/assets/134736070.jpg" 
            className="profile" alt="imagem de perfil" />
          </div>
          <div>
            <h3>Evellyn Silva</h3>
            <span>@EveeSilvaa</span>
            <p>Descrição</p>
          </div>
          <hr />
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste 1" description="teste de descrição" />
            <ItemList title="Teste 1" description="teste de descrição" />
            <ItemList title="Teste 1" description="teste de descrição" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;