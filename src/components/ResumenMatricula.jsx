function ResumenMatricula({ total, maximo }) {
  const restantes = maximo - total;
  const porcentaje = (total / maximo) * 100;

  let color = "#00d26a"; 
  let color2 = "#6c63ff";
  if (porcentaje > 80) color = "#ffa502"; 
  if (porcentaje >= 100) color = "#6c63ff"; 

  return (
    <div className="card-dark">
      <h5 className="mb-3">Resumen de créditos</h5>
      <div className="d-flex justify-content-between mb-2">
        <span>Total seleccionados:</span>
        <strong style={{ color }}>{total} / {maximo}</strong>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div 
          className="progress-bar" 
          style={{ width: `${porcentaje}%`, background: color }}
        ></div>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <small className="text-secondary">Restantes: {restantes} créditos</small>
        <small className="text-secondary">{Math.round(porcentaje)}% usado</small>
      </div>
    </div>
  );
}

export default ResumenMatricula;