# Sistema de Matriculación Académica

Aplicación web desarrollada en React que permite a un estudiante
seleccionar y matricular cursos según su semestre académico.

Incluye validaciones de créditos, disponibilidad de cupos
y persistencia de datos en localStorage.

## Demo

https://sistema-matricula-react.vercel.app/

## Tecnologías

- React
- Bootstrap

## Instalación y ejecución

1. Clonar el repositorio:

2. Instalar dependencias:

npm install
npm install bootstrap

3. Ejecutar el proyecto:

npm run dev

4. Abrir en navegador:

http://localhost:5173


## Uso

1. Ingresar con un ID de estudiante:
   - 101
   - 102
   - 103 (No matriculado por Default)

2. Seleccionar cursos disponibles según el semestre.

3. Confirmar la matrícula.

4. Visualizar los cursos seleccionados.

## D. técnicas

- Los datos se simulan mediante archivos JSON según requerimiento (cursos.json, estudiantes.json).
- Se implementó filtrado de cursos por semestre del estudiante.
- Ver cursos seleccionados 
- Ver total de créditos seleccionados
- No dejar seleccionar más créditos de los permitidos
- No dejar seleccionar cursos sin cupos
- No dejar seleccionar el mismo curso dos veces
- Se utilizó localStorage para persistir la matrícula.
- Iniciar sesión con ID
- Guardar matrícula en el navegador (localStorage)
- Cerrar sesión

