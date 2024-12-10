import { useState } from "react";
import { Header } from "../../components/Header";
import background from "../../assets/background.png";
import ItemList from "../../components/ItemList";
import "./styles.css";



function App() {
  const { user, setUser} = useState('');
  const { Currentuser, setCurrentUser} = useState(null);
  const { repos, setRepos} = useState(null);

  const handleGetData = async () => {
    const userData = await fetch(`https://api.github.com/users/${user}`);
    const newUser = await userData.json();

    if(newUser.name){
      const {avatar_url, name, bio} = newUser;
      setCurrentUser({avatar_url, name, bio});

      const reposData = await fetch(`https://api.github.com/users/${user}`);
      const newRepos = await reposData.json();

      if(newRepos.length){
         setRepos(newRepos);
      }
    }
  };

  return (
    <div className="App">
      <Header />
      <div className="conteudo">
        <img src={background} className="background" alt="backgroud app" />
        <div className="info">
          <div>
            <input name="usuario" 
            value={user} 
            onChange={(event) => setUser(event.target.value)} 
            placeholder="@username" />
            <button onClick={handleGetData}>Buscar</button>
          </div>
          {currentUser?.name ? (
            <>
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
          </>
          ): null}
          {repos?.length ? (
          <div>
            <h4 className="repositorio">Repositórios</h4>
            <ItemList title="Teste 1" description="teste de descrição" />
            <ItemList title="Teste 1" description="teste de descrição" />
            <ItemList title="Teste 1" description="teste de descrição" />
          </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;