 
import { useState } from "react";
import StudentCard from "./studentCard.jsx";
//import Student from "./student.jsx";
 
export default function Content(props) {
 
    const [id, setId] = useState("");
    const [nom, setNom] = useState("");
    const [note, setNote] = useState("");
    const [etudiants, setEtudiants] = useState([
      {id:1, nom:"med-nour", note:20},
      {id:2, nom:"rania", note:16},
      {id:3, nom:"abdo", note:18},
      {id:4, nom:"sajid", note:8},
      {id:5, nom:"walid", note:20},
    ])
 
 
    function ajouter() {
      const newObj = {id:id, nom:nom, note:note}
      setEtudiants([...etudiants, newObj])
      setId("");
      setNom("");
      setNote("");
    }
 
    function modifier(){
      const newObj = {id:id, nom:nom, note:note}
      setEtudiants(etudiants.map(function(item){
        if(item.id == id){
          return newObj
        }
        return item
      }))
    }
 
    function supprimer(){
      const newObj = {id:id, nom:nom, note:note}
      setEtudiants(etudiants.filter(function(item){
        if(item.id != id){
          return item
        }
      }))
    }
    function afficher(item){
        setId(item.id)
        setNom(item.nom)
        setNote(item.note)

    }
 
    return (
        <main className="min-h-screen flex-1 bg-slate-50 p-8">
 
            <div className="mb-8">
 
                <h2 className="text-3xl font-bold text-slate-800">
                    Liste des étudiants
                </h2>
 
            </div>
 
            <div className="mt-8 rounded-xl bg-white p-6 shadow-sm">
 
                <h3 className="mb-5 text-xl font-bold text-slate-800">
                    Ajouter un etudiant
                </h3>
 
 
                <div className="grid gap-4 md:grid-cols-3">
 
                 
                    <input type="text" placeholder="ID" value={id} onChange={function (event) {setId(event.target.value);}}
                        className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
 
                    <input type="text" placeholder="Nom" value={nom} onChange={function (event) {setNom(event.target.value);}}
                        className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
 
 
                    <input type="number" placeholder="Note" value={note} onChange={function (event) {setNote(event.target.value);}}
                        className="rounded-lg border border-slate-300 px-4 py-2 outline-none focus:border-blue-500"
                    />
 
 
                    <button
                        onClick={ajouter}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                        Ajouter
                    </button>
 
                    <button
                        onClick={modifier}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                        Modifier
                    </button>
                   
                    <button
                        onClick={supprimer}
                        className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white hover:bg-blue-700">
                        Supprimer
                    </button>
                </div>
 
            </div>
 
 
 
            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
 
            {etudiants.map(function(item){
                return (
                    
                      <div key={item.id} className={`rounded-xl p-5 shadow ${ item.note >= 10 ? "bg-green-600" : "bg-red-600"}`} onClick={() => afficher(item)}>
                        <h3 className="text-lg font-bold">
                          {item.nom}
                        </h3>
 
                        <p className="mt-2 text-slate-500">
                          Note : {item.note} / 20
                        </p>
                      </div>
                )
 
                })}
 
            </div>
 
        </main>
    );
}
 
 
 