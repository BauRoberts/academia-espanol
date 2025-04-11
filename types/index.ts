// Interfaces para el modelo de profesor
export interface Profesor {
  id: string;
  nombre: string;
  especialidades: string[];
  descripcion: string;
  imagen: string;
}

// Interfaces para testimonios
export interface Testimonio {
  id: string;
  texto: string;
  autor: string;
  pais: string;
}

// Otras interfaces que puedas necesitar
