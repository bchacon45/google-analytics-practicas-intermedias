export interface User{
    identificador?: number;
    nombre: string;
    apellidos: string; 
    contrasenia: string;
    correo: string;
    telefono: number;
    fotografia: string;
    genero: number;
    fechaNacimiento: string;
    direccion: string;
    claseUsuario?: number;
    estadoUsuario?: number;
    identificadorOpr?: number;
    identificadorOperacion?: number;
    descripcionOperacion?: string;
}