import ItemCurso from "./ItemCurso";

function ListaCursos({ cursos, onAgregar, validar, seleccionados }) {
  if (cursos.length === 0) {
    return (
      <div className="card-dark text-center p-5">
        <h5>📭 No hay cursos disponibles para tu semestre</h5>
        <p className="text-secondary">Contacta con coordinación académica</p>
      </div>
    );
  }

  const disponibles = cursos.filter(
    c => !seleccionados.find(s => s.id === c.id)
  );

  return (
    <div>
      <h4 className="mb-3">📚 Cursos disponibles</h4>
      <div className="d-flex flex-wrap">
        {disponibles.map(curso => (
          <ItemCurso
            key={curso.id}
            curso={curso}
            onAgregar={onAgregar}
            deshabilitado={!validar(curso)}
          />
        ))}
      </div>
    </div>
  );
}

export default ListaCursos;