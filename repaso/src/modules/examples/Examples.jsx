import { useState } from "react";

export default function Examples(){
     //Estados
    const [flag, setFlag] = useState(false);
    const [list, setList] = useState(['Ana', 'Luisa', 'Pepe', 'Juan', 'Roberto']);
    const [users, setUsers] = useState([

        {
            id: 1,
            name: 'Luisa',
            status: false
        },

        {
            id: 1,
            name: 'Roberto',
            status: true
        },

        {
            id: 1,
            name: 'Daniel',
            status: true
        }
    ]);

    //Funcion para cambiar valor
    const handleValue = () => setFlag(!flag);    

    return <main className="p-4">
        <h3>Estructura condicional</h3>
        <hr />
        {flag ? (
        <div className="alert alert-success">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat dolorum molestias impedit in laudantium similique, beatae aliquid, tempora veritatis commodi quibusdam nemo ab magnam pariatur quisquam architecto. Eos, inventore iste?</div>
        ) : (
        <div className="alert alert-danger">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa mollitia culpa cumque necessitatibus similique quis totam, impedit, nihil laudantium ea voluptatum unde autem, dolorem earum aspernatur quos aperiam quibusdam molestiae. </div>
        )}
        <button onClick = {() => handleValue()} type="button" className="btn btn-secondary mb-3">Cambiar valor</button>

        <h3 className="mt-4">Estructura iterada</h3>
        <hr />
        <div className="row g-3">
            {list.map((item, index) => (
                <div key = {index}className="col-3 mt-4"> 
                <div className="card border-0 shadow mt-3">
                    <div className="card-body">
                        <h4>{item}</h4>
                    </div>
                </div>
            </div>
            ))}
        </div>

         <h3 className="mt-4">Estructura mezcladas</h3>
        <hr />
        <div className="row g-3">
            {users.map((user) => (
                <div key={user.id} className="col-3 mt-4"> 
                <div className="card border-0 shadow mt-3">
                    <div className="card-body">
                        <h4>{user.name}</h4>
                        {user.status ? (
                        <span className="badge bg-success">Activo</span>
                        ) : (
                        <span className="badge bg-danger">Inactivo</span>
                        )}
                    </div>
                </div>
            </div>
            ))}
        </div>
    </main>;
}