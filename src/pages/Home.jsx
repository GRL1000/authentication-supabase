import googlelogo from "../assets/logogoogle.png";
import { Perfil } from "../components/Perfil";
import { UserAuth } from "../context/AuthContext";
export function Home() {

  const {user, signout} = UserAuth();

  return ( <div className="App">
   <Perfil foto={user.picture} name={user.name} email={user.email}/>

  <p></p>
  <img src={googlelogo} className="logo google" alt="React logo" />
  <div className="card">
    <button onClick={signout}>Cerrar sesión</button>
    <p>IT. NEXT</p>
  </div>
  <p className="read-the-docs">
    Supabase implementa todo el poder de PostgreSQL
  </p>
</div>);
}
