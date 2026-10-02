export default function StudentCard(props) {
    return (
        <div
            className={
                props.note >= 10
                    ? "rounded-lg bg-green-400 p-5 text-white"
                    : "rounded-lg bg-red-400 p-5 text-black"
            }
        >
            <h3 className="text-xl font-bold">
                {props.nom}
            </h3>

            <p>ID : {props.id}</p>
            <p>Note : {props.note}</p>
            <p>Résultat : {props.resultat}</p>
        </div>
    );
}