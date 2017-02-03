export class Libro {
        Id: number;
        Nombre: string;
        Fecha: string;
        constructor(val: any) {
                this.Id = val.id;
                this.Nombre = val.Nombre;
                this.Fecha = val.Fecha;
        }
}
