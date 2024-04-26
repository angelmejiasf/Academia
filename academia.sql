-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 12-03-2024 a las 18:57:15
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `academia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumnos`
--

CREATE TABLE `alumnos` (
  `id_alumno` int(11) NOT NULL,
  `nombre_alumno` varchar(255) NOT NULL,
  `direccion_alumno` varchar(255) NOT NULL,
  `media_alumno` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `alumnos`
--

INSERT INTO `alumnos` (`id_alumno`, `nombre_alumno`, `direccion_alumno`, `media_alumno`) VALUES
(1, 'Concha Estruch Vidal ', 'C. del perdido, 6', 5.9),
(2, 'Enrique Morón Perdomo', 'Av de las Aguas,8', 7.8),
(3, 'Pablo Molina', 'C. San Franciso', 7.5),
(4, 'María Alejo', 'C. Fidel Martin Ines', 9.6),
(5, 'Rosa Valenciano', 'D. de los Rios ', 8.3),
(6, 'Gloria Gomez', 'Av. de Toledo', 9.5),
(7, 'Miguel Sánchez ', 'Av. Francisco Aguirre,90', 8.1),
(8, 'Cristina Yelmo', 'C. Alférez Provisional, 34 ', 8.9),
(9, 'Angel Mejias ', 'C. del perdido, 6', 5.9);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id_curso` int(11) NOT NULL,
  `nombre_curso` varchar(255) NOT NULL,
  `precio_curso` float NOT NULL,
  `duracion_curso` int(11) NOT NULL,
  `profesoreIdProfesor` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id_curso`, `nombre_curso`, `precio_curso`, `duracion_curso`, `profesoreIdProfesor`) VALUES
(1, 'Informática  ', 150, 6, 1),
(2, 'Economía', 90, 4, 3),
(3, 'Geometria  ', 75, 2, 4),
(4, 'Filosofia', 175, 9, 4),
(5, 'Dibujo', 50, 1, 5),
(6, 'Dibujo Avanzado', 200, 9, 6),
(7, 'Geografía', 200, 10, 2),
(8, 'Mecánica Cuántica', 300, 10, 1),
(9, 'Bases de Datos', 250, 9, 1),
(10, 'Lenguajes de Marcas', 450, 15, 2),
(11, 'JavaScript', 1000, 12, 2),
(12, 'CSS', 150, 5, 2),
(13, 'CSS Avanzado', 800, 22, 2),
(14, 'BootStrap', 375, 6, 3),
(15, 'Angular', 12, 8, 4),
(16, 'Curso Modificado', 160, 6, 1),
(17, 'Curso Prueba', 160, 6, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `matriculas`
--

CREATE TABLE `matriculas` (
  `nota` float NOT NULL,
  `cursoIdCurso` int(11) NOT NULL,
  `alumnoIdAlumno` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `matriculas`
--

INSERT INTO `matriculas` (`nota`, `cursoIdCurso`, `alumnoIdAlumno`) VALUES
(7, 1, 1),
(8, 1, 2),
(6, 1, 3),
(9, 2, 1),
(4, 3, 4),
(6, 11, 1),
(7, 11, 2),
(8, 11, 3),
(9, 11, 4),
(7, 11, 5),
(9, 11, 6),
(5, 12, 1),
(9, 12, 2),
(5, 12, 4),
(9, 12, 5),
(8, 12, 6),
(9, 12, 7),
(10, 12, 8),
(7, 13, 8),
(6, 14, 2),
(8, 14, 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `profesores`
--

CREATE TABLE `profesores` (
  `id_profesor` int(11) NOT NULL,
  `nombre_profesor` varchar(255) NOT NULL,
  `direccion_profesor` varchar(255) NOT NULL,
  `edad_profesor` int(11) NOT NULL,
  `telefono_profesor` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `profesores`
--

INSERT INTO `profesores` (`id_profesor`, `nombre_profesor`, `direccion_profesor`, `edad_profesor`, `telefono_profesor`) VALUES
(1, 'Alicia Gámez Gonzáles   ', 'C/ Camino El Rio 12    San Fernando     Madrid   2   ', 55, '555 888 555'),
(2, 'Juan Alfar Sala', ' C/ Las Hojas 110 Fuensalida Toledo', 40, '555 858 475'),
(3, 'Barbara Flores Sanz   ', ' C/ Alameda 11    Talavera     Toledo   ', 40, '555 888 555'),
(4, 'Blanca Gala Sopena   ', ' Av. Las Cruces,10 Lagartera Toledo   ', 29, '555 888 555'),
(5, 'Blanca Pérez López   ', ' C. De Los Cármenes,33 Torrijos Toledo   ', 35, '888 555 555'),
(6, 'Gloria Martín Sánchez   ', ' C Los Ciruelos 22 Oropesa Toledo   ', 30, '888 555 333'),
(7, 'Angel Mejias  ', 'C/ Angel', 40, '555 888 555');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  ADD PRIMARY KEY (`id_alumno`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id_curso`),
  ADD KEY `profesoreIdProfesor` (`profesoreIdProfesor`);

--
-- Indices de la tabla `matriculas`
--
ALTER TABLE `matriculas`
  ADD PRIMARY KEY (`cursoIdCurso`,`alumnoIdAlumno`),
  ADD KEY `alumnoIdAlumno` (`alumnoIdAlumno`);

--
-- Indices de la tabla `profesores`
--
ALTER TABLE `profesores`
  ADD PRIMARY KEY (`id_profesor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `alumnos`
--
ALTER TABLE `alumnos`
  MODIFY `id_alumno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id_curso` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `profesores`
--
ALTER TABLE `profesores`
  MODIFY `id_profesor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD CONSTRAINT `cursos_ibfk_1` FOREIGN KEY (`profesoreIdProfesor`) REFERENCES `profesores` (`id_profesor`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Filtros para la tabla `matriculas`
--
ALTER TABLE `matriculas`
  ADD CONSTRAINT `matriculas_ibfk_1` FOREIGN KEY (`cursoIdCurso`) REFERENCES `cursos` (`id_curso`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `matriculas_ibfk_2` FOREIGN KEY (`alumnoIdAlumno`) REFERENCES `alumnos` (`id_alumno`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
