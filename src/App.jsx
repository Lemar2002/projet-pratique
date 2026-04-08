import { useState } from "react";
import { Login } from "./composants/acceuil/Login";
import { NewUser } from "./composants/acceuil/newUser";
import DashboardLayout from "./layoutss/layout";
import { Principal } from "./principal";

function App() {
  //fonction pour se connecter
  const [connecte, setconnecte] = useState(false);

  const connexion = (valeur) => {
    setconnecte(valeur);
  };

  if (connecte === false) {
    return (
      <div className="">
        <NewUser connexion={connexion} />
      </div>
    );
  }
  return <Principal />;
}

export default App;
