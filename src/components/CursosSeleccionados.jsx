function CursosSeleccionados({ seleccionados, onEliminar }) {
  const totalCreditos = seleccionados.reduce((sum, c) => sum + c.creditos, 0);

  return (
    <div className="card-dark">
      <h4 className="mb-4">Cursos seleccionados</h4>

      {seleccionados.length === 0 && (
        <p className="text-secondary text-center py-3">
          No hay cursos seleccionados
        </p>
      )}

      {seleccionados.map(c => (
        <div key={c.id} className="d-flex justify-content-between align-items-center mb-2 p-2" style={{ borderBottom: "1px solid #1e2436" }}>
          <div>
            <strong>{c.nombre}</strong>
            <br />
            <small className="text-secondary">{c.creditos} créditos</small>
          </div>
          <button
            className="btn btn-danger btn-sm"
            onClick={() => onEliminar(c.id)}
          >
            Quitar
          </button>
        </div>
      ))}

      {seleccionados.length > 0 && (
        <div className="mt-3 pt-2 text-center" style={{ borderTop: "1px solid #1e2436" }}>
          <strong>Total créditos: {totalCreditos}</strong>
        </div>
      )}
    </div>
  );
}

export default CursosSeleccionados;