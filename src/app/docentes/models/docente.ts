export class DocenteModel {
  id: number;
  nome: string;
  matricula: string;
  nascimento: string;
  departamento: string;

  constructor(id: number, nome: string, matricula: string, nascimento: string, departamento: string) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.nascimento = nascimento;
    this.departamento = departamento;
  }
}
