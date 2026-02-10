import { useEffect, useState } from "react";
import PetCard from "./components/PetCard";
import PetsController from "./pets.controller";

export default function Pets(){
    
    //Variables del componente
    const [petList, setPetList] = useState([]);
    
    //Funciones del componente
    const handleCallToApi = async () => setPetList(await PetsController.findall());
    
    //UseEffect para ciclo de vida del componente
    useEffect(() => {
        handleCallToApi();
    }, []);

    //Render del componente

    return (<main className="p-5">
        <h3>Lista de mascotas</h3>
        <hr />
        {petList.length === 0 ? (
            <div className="alert alert-secondary rounded-4">
                <span>De momento no hay mascotas</span>
            </div>
        ) : (
            <section className="row g-3">
                {petList.map(pet => (<PetCard pet = {pet}/>))}
            </section>
        )}
        
    </main>)
}