class Usuario {
  constructor(correo,nombre,n_usos) {
    this.correo = correo;
    this.nombre = nombre;
    this.n_usos = n_usos;
  }

  getCorreo(){
    return correo;
  }
  setCorreo(Correo){
    correo = Correo;
  }
  getNombre(){
    return nombre;
  }
  setNombre(Nombre){
    nombre = Nombre;
  }
  getN_usos(){
    return n_usos;
  }
  setN_usos(n_usos){
    n_usos+1;
  }



}
