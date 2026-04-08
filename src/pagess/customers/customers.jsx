import { Messagerie } from "../../composants/comments/messagerie";
import { MessagerieHeader } from "../../composants/comments/messagerieHeader";
import { Utilisateurs } from "../../composants/comments/utilisateurs";

export const Clients = () => {
  return (
    <div className="flex flex-col gap-2 h-screen">
      <div>
        <MessagerieHeader />
      </div>
      <div className="flex gap-2 ">
        <Utilisateurs />
        <Messagerie />
      </div>
    </div>
  );
};
