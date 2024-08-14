export type Base = {
    title: string,
    questions: Pergunta[],
    results: Resultado,
  };
  
  export type Resultado ={
    A: string,
    B: string,
  }
  
  export type Pergunta = {
    id: number,
    question: string,
    options: Opcao[],
  };
  
  export  type Opcao = {
    id: number,
    name: string,
    alias: string
  };