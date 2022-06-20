export class BioterioModel{
  id: number;
  nome: string;
  departamento: string;
  especies: string[];

  constructor(id:number, nome: string, departamento: string, especies: string[]){
    this.id = id;
    this.nome = nome;
    this.departamento = departamento;
    this.especies = especies;
  }
}
