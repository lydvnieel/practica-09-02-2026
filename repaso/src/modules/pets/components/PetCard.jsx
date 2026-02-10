export default function PetCard({pet}) {
    const handleStatus = status => {
        switch(status){
            case 'IN_ADOPTION':
                return (<span className="badge" style={{ backgroundColor: "#2196F3" }}>En adopcion</span>)

            case 'IN_PROCESS':
                return (<span className="badge" style={{ backgroundColor: "#FFD700" }}>En proceso de adopcion</span>)

            case 'ADOPTED':
                return (<span className="badge" style={{ backgroundColor: "#2E7D32" }}>Adoptado</span>)

            default:
        }
    }

    const handleGender = gender => {
        if(gender){
            return (<span className="badge" style={{ backgroundColor: "#58B0FF" }}><i className="bi bi-gender-male"></i>&nbsp;Macho</span>)
        }else{
            return (<span className="badge" style={{ backgroundColor: "#FF87FF" }}><i className="bi bi-gender-female"></i>&nbsp;Hembra</span>)
        }
    }
  return (
    <article className="col-3">
      <div className="card shadow-sm rounded 4-4 border-2">
        <div className="card-body mt-4">
          <div className="w-100 mb-4" style={{ height: 250 }}>
            <img className="img-fluid rounded-3" width={175}  src={!!pet ? pet.img_url : ''} alt="" />
          </div>

          <h4>
            <i className="bi bi-bluesky"></i>&nbsp;
            <span>[pet.name]</span>
          </h4>

          <p>
            <span className="fw-bold">Edad:</span>&nbsp;
            <span>{!!pet ? `${pet.age} año(s)` : '0 años'}</span>
          </p>

          <p>
            <span className="fw-bold">Raza:</span>&nbsp;
            <span>{!!pet ? pet.breed  : 'raza_mascota'}</span>
          </p>

          <p>
            <span className="fw-bold">Sexo:</span>&nbsp;
            {!!pet ? (handleGender(pet.gender)) : (<></>)}
          </p>

          <p>
            <span className="fw-bold">Estado:</span>&nbsp;
            {!!pet ? (handleStatus(pet.status)) : (<></>)}
          </p>
          <div className="text-end">
            <button type="button" className="btn btn-primary"> Solicitar adopcion</button>
          </div>
        </div>
      </div>
    </article>
  );
}
