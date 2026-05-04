function Toast({ mensaje }) {
  if (!mensaje) return null;


  let bgColor = "#6c63ff";
  if (mensaje.includes("✅")) bgColor = "#00d26a";
  if (mensaje.includes("❌")) bgColor = "#ff4757";
  
  return (
    <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 1050 }}>
      <div 
        className="card-dark shadow" 
        style={{ 
          background: bgColor, 
          color: "white",
          padding: "12px 24px",
          borderRadius: "12px",
          animation: "slideIn 0.3s ease"
        }}
      >
        {mensaje}
      </div>
      <style>
        {`
          @keyframes slideIn {
            from {
              transform: translateX(100%);
              opacity: 0;
            }
            to {
              transform: translateX(0);
              opacity: 1;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Toast;