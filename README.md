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

## Login

<img width="1451" height="731" alt="image" src="https://github.com/user-attachments/assets/de8418c6-2d2f-46c6-b5a0-537e5d018daf" />

## Interfaz:

<img width="1793" height="951" alt="image" src="https://github.com/user-attachments/assets/be4bcedd-5773-4984-b9ba-0cfc7bc5c1bb" />

## _
<img width="1668" height="942" alt="image" src="https://github.com/user-attachments/assets/51e0a384-65b1-436b-879d-a9a7ec6e4ceb" />

## Matriculado: 

<img width="1627" height="863" alt="image" src="https://github.com/user-attachments/assets/4a2c5fdb-f7fc-4e8c-82e5-2e5f1a855f50" />

## localStorage:
<img width="1625" height="169" alt="image" src="https://github.com/user-attachments/assets/4e64df95-b8d7-46cf-a800-6162d1331a1a" />

## Estudiante 102, visualiza materias sin cupo, de tal modo que no puede matricular, el unico cupo lo tomo 101.

<img width="1657" height="912" alt="image" src="https://github.com/user-attachments/assets/65d46b4e-618f-4dfe-94e7-b2589814ac04" />

## Estuadiante 103, en estado: "No matriculado"

<img width="1029" height="568" alt="image" src="https://github.com/user-attachments/assets/6baaaef8-02af-4fee-8a60-bde7ce3ca078" />

