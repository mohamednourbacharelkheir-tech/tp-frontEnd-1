import Content from "./Content.jsx";
import Aside from "./aside.jsx";
import Header from "./header.jsx";

    const etudiant = [
        { id: 1, nom: "youness", note: 15 ,resultat: "admis" },
        { id: 2, nom: "soukaina", note: 8,resultat: "redoublant" },
        { id: 3, nom: "toufik", note: 20,resultat: "admis" },
        { id: 4, nom: "zakaria", note: 9 ,resultat: "redoublant"},
        { id: 5, nom: "rania", note: 14,resultat: "admis" },
        { id: 6, nom: "ishaq", note: 7,resultat: "redoublant" },
        { id: 7, nom: "abderrahmane", note: 15 ,resultat: "redoublant"},
        { id: 8, nom: "adem", note: 3 ,resultat: "redoublant"},
        { id: 9, nom: "walid", note: 16 ,resultat: "admis"}
    ];

export default function App() {
  return (
    <>
      <Header />
      <div className="flex">
        <Aside />
        <Content etudiants={etudiant}/>
      </div>
    </>
    );
}