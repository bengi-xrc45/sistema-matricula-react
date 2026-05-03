import { useState, useEffect } from "react";
import estudiantes from "./data/estudiantes.json";
import cursosData from "./data/cursos.json";

import Login from "./components/Login";
import ListaCursos from "./components/ListaCursos";
import CursosSeleccionados from "./components/CursosSeleccionados";
import Resumen from "./components/ResumenMatricula";
import Toast from "./components/Toast";

function App() {
  const [estudiante, setEstudiante] = useState(null);
  const [seleccionados, setSeleccionados] = useState([]);
  const [cursosGuardados, setCursosGuardados] = useState([]);
  const [msg, setMsg] = useState("");
  const [cursos, setCursos] = useState(cursosData);

  useEffect(() => {
    if (estudiante) {
      const data = localStorage.getItem(`matricula_${estudiante.id}`);
      if (data) {
        const parsed = JSON.parse(data);
        setCursosGuardados(parsed.cursos || []);
        setSeleccionados([]);

        const nombresCursos = parsed.cursos.map((c) => c.nombre).join(", ");
        setMsg(
          `Bienvenido. Ya tienes ${parsed.cursos.length} cursos: ${nombresCursos}`,
        );
        setTimeout(() => setMsg(""), 4000);
      } else {
        setCursosGuardados([]);
        setSeleccionados([]);
      }
    }
  }, [estudiante]);

  if (!estudiante) {
    return <Login onLogin={setEstudiante} />;
  }

  if (!estudiante.matriculado) {
    return (
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card-dark text-center" style={{ maxWidth: 500 }}>
          <h2 className="text-danger">⛔ Acceso Denegado</h2>
          <p className="mt-3">
            Estimado(a) {estudiante.nombre}, no puedes realizar tu matrícula
            académica porque no estás matriculado en el período actual.
          </p>
          <button
            className="btn btn-primary mt-3"
            onClick={() => setEstudiante(null)}
          >
            Volver al inicio
          </button>
        </div>
      </div>
    );
  }
  const cursosFiltrados = cursos.filter(
    (c) =>
      c.semestre === estudiante.semestre &&
      !cursosGuardados.find((g) => g.id === c.id) &&
      !seleccionados.find((s) => s.id === c.id),
  );

  const total = seleccionados.reduce((a, c) => a + c.creditos, 0);
  const totalGuardado = cursosGuardados.reduce((a, c) => a + c.creditos, 0);

  const validar = (curso) => {
    const cursoActual = cursos.find((c) => c.id === curso.id);
    const cupos = cursoActual.limiteCupos - cursoActual.matriculados;

    return (
      cupos > 0 &&
      total + curso.creditos + totalGuardado <= estudiante.creditosPermitidos &&
      !seleccionados.find((c) => c.id === curso.id)
    );
  };

  const agregar = (curso) => {
    const cursoActual = cursos.find((c) => c.id === curso.id);
    const cupos = cursoActual.limiteCupos - cursoActual.matriculados;

    if (cupos <= 0) {
      setMsg(`${curso.nombre} - Sin cupos disponibles`);
      setTimeout(() => setMsg(""), 2000);
      return;
    }

    if (
      total + curso.creditos + totalGuardado >
      estudiante.creditosPermitidos
    ) {
      setMsg(
        `Excedes el límite de ${estudiante.creditosPermitidos} créditos`,
      );
      setTimeout(() => setMsg(""), 2000);
      return;
    }

    if (seleccionados.find((c) => c.id === curso.id)) {
      setMsg(`${curso.nombre} ya está seleccionado`);
      setTimeout(() => setMsg(""), 2000);
      return;
    }

    setSeleccionados([...seleccionados, curso]);
    setMsg(`✅ ${curso.nombre} agregado`);
    setTimeout(() => setMsg(""), 1500);
  };

  const eliminar = (id) => {
    const curso = seleccionados.find((c) => c.id === id);
    setSeleccionados(seleccionados.filter((c) => c.id !== id));
    setMsg(`❌ ${curso.nombre} eliminado`);
    setTimeout(() => setMsg(""), 1500);
  };

  const guardarMatricula = () => {
    if (seleccionados.length === 0 && cursosGuardados.length === 0) {
      setMsg("No hay cursos seleccionados para guardar");
      setTimeout(() => setMsg(""), 2000);
      return;
    }

    const todosLosCursos = [...cursosGuardados, ...seleccionados];

    localStorage.setItem(
      `matricula_${estudiante.id}`,
      JSON.stringify({
        estudianteId: estudiante.id,
        estudianteNombre: estudiante.nombre,
        cursos: todosLosCursos,
        fecha: new Date().toISOString(),
        totalCreditos: todosLosCursos.reduce((a, c) => a + c.creditos, 0),
      }),
    );

    setCursosGuardados(todosLosCursos);
    setSeleccionados([]);

    setMsg(`Matrícula guardada. Total cursos: ${todosLosCursos.length}`);
    setTimeout(() => setMsg(""), 2500);
  };

  const cerrarSesion = () => {
    setEstudiante(null);
    setSeleccionados([]);
    setCursosGuardados([]);
  };

  return (
    <div className="container py-4">
      <div className="header d-flex justify-content-between align-items-center">
        <div>
          <h3 className="mb-2">📚 Matrícula Académica</h3>
          <h4 className="mb-0">🎓 {estudiante.nombre}</h4>
          <p className="mb-1">
            Estado: <span className="fw-bold text-success">Matriculado</span>
          </p>
          <small className="text-secondary">
            {estudiante.carrera || "Ingeniería de Sistemas"} | Semestre:{" "}
            {estudiante.semestre}° | ID: {estudiante.id}
          </small>
          {cursosGuardados.length > 0 && (
            <p className="mt-2 mb-0 text-primary">
              Tienes {cursosGuardados.length} cursos matriculados
            </p>
          )}
          {cursosGuardados.length > 0 && (
            <div className="mt-2 p-2">
              <div className="d-flex flex-wrap gap-1 mt-1">
                {cursosGuardados.map((curso) => (
                  <span
                    key={curso.id}
                    className="badge bg-success"
                    style={{ fontSize: "11px" }}
                  >
                    {curso.nombre}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
        <button className="btn btn-outline-light btn-sm" onClick={cerrarSesion}>
          Cerrar sesión
        </button>
      </div>

      <Resumen
        total={total + totalGuardado}
        maximo={estudiante.creditosPermitidos}
      />

      <div className="row mt-4">
        <div className="col-md-8">
          <ListaCursos
            cursos={cursosFiltrados}
            onAgregar={agregar}
            validar={validar}
            seleccionados={seleccionados}
          />
        </div>
        <div className="col-md-4">
          <CursosSeleccionados
            seleccionados={seleccionados}
            onEliminar={eliminar}
          />
        </div>
      </div>

      <button
        className="btn btn-success w-100 mt-4 py-3"
        onClick={guardarMatricula}
        disabled={seleccionados.length === 0}
      >
        💾{" "}
        {seleccionados.length === 0
          ? "Selecciona cursos nuevos"
          : `Guardar ${seleccionados.length} curso(s) nuevo(s)`}
      </button>

      <Toast mensaje={msg} />
    </div>
  );
}

export default App;
