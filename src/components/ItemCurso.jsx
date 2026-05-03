function ItemCurso({ curso, onAgregar, deshabilitado }) {
  const cupos = curso.limiteCupos - curso.matriculados;
  const porcentajeOcupado = (curso.matriculados / curso.limiteCupos) * 100;

  return (
    <div className="card-dark m-3 " style={{ width: 340 }}>
      <div className="d-flex justify-content-between align-items-start mb-2">
        <h5 className="mb-0">{curso.nombre}</h5>
        <span className={`badge ${cupos > 0 ? "badge-success" : "bg-danger"}`}>
          {cupos > 0 ? `${cupos} cupos` : "Sin cupos"}
        </span>
      </div>
      
      <small className="text-secondary">Código: {curso.codigo}</small>

      <div className="mt-3">
        <p className="mb-1">Créditos: <strong>{curso.creditos}</strong></p>
        <div className="progress" style={{ height: "5px" }}>
          <div 
            className="progress-bar " 
            style={{ width: `${porcentajeOcupado}%`}}
          ></div>
        </div>
        <small className="text-secondary">
          {curso.matriculados}/{curso.limiteCupos} matriculados
        </small>
      </div>

      <button
        className="btn btn-success w-100 mt-3"
        onClick={() => onAgregar(curso)}
        disabled={deshabilitado}
      >
        {deshabilitado ? "No disponible" : "Agregar"}
      </button>
    </div>
  );
}

export default ItemCurso;