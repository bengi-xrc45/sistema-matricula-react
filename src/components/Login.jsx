import { useState } from "react";
import estudiantes from "../data/estudiantes.json";

function Login({ onLogin }) {
  const [id, setId] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!id.trim()) {
      setError("Por favor ingresa un ID");
      setTimeout(() => setError(""), 1000);
      return;
    }

    if (!/^\d+$/.test(id)) {
      setError("Error El ID solo debe contener números");
      setTimeout(() => setError(""), 1000);
      return;
    }

    const idNumerico = parseInt(id, 10);
    const est = estudiantes.find((e) => e.id === idNumerico);

    if (!est) {
      setError("Estudiante no encontrado.");
      setTimeout(() => setError(""), 1000);
      return;
    }

    setError("");
    onLogin(est);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100"
      style={{
        backgroundImage: "url('/img2.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        className="card-dark p-6"
        style={{ width: 800, maxWidth: "90%", padding: "30px" }}
      >
        <div className="row align-items-center">
          <div className="col-md-6">
            <video
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                borderRadius: "12px",
                maxHeight: "280px",
                objectFit: "cover",
              }}
            >
              <source src="/video_login.mp4" type="video/mp4" />
              Tu navegador no soporta video
            </video>
          </div>
          <div className="col-md-6">
            <h3 className="text-center mb-3 fw-bold fs-2">Bienvenidos</h3>
            <p className="text-center mb-4 text-secondary">
              Ingrese a la plataforma para realizar tu matrícula académica
            </p>

            {error && (
                  <div
                    className="text-danger text-center"
                    style={{ fontSize: "12px" }}
                  >
                    {error}
                  </div>
            )}
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                className="form-control mb-4"
                placeholder="ID estudiante"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <button className="btn btn-success w-100 mb-3">
                Iniciar Sesión
              </button>
            </form>

            <div className="text-center">
              <a
                href="#"
                className="text-decoration-none text-primary"
                style={{ fontSize: "13px" }}
              >
                ¿Olvidaste tu ID? Recuperar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
