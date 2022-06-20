export class DiscenteModel {
  id: number;
  nome: string;
  matricula: string;
  nascimento: string;
  curso: string;

  constructor(id: number, nome: string, matricula: string, nascimento: string, curso: string) {
    this.id = id;
    this.nome = nome;
    this.matricula = matricula;
    this.nascimento = nascimento;
    this.curso = curso;
  }
}
