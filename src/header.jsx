import ofpptLogo from "./assets/ofppt.png";
export default function Header() {
    return (

        <header className="bg-blue-700 flex items-center p-5 gap-75 " >

            <img
                src={ofpptLogo}
                alt="Logo OFPPT"
                className="w-20 h-auto"
            />

        

            <h1 className="text-2xl font-bold text-black">
                Gestion des étudiants
            </h1>



        </header>
    );
}