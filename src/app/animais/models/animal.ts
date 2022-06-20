export class AnimalModel{
  id: number;
  especie: string;
  quantidade: number;
  justificativa: string;

  constructor(id:number, especie: string, quantidade: number, justificativa: string){
    this.id = id;
    this.especie = especie;
    this.quantidade = quantidade;
    this.justificativa = justificativa;
  }
}
