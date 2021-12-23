export class EmpresaModel {

     id!: number;
     nome!: string;
     inscricao!: number;
     descricao!: string;

     constructor() { }

     static builder(empresa: EmpresaModel): EmpresaModel {
          var __empresa = new EmpresaModel();
          __empresa.id = empresa.id;
          __empresa.nome = empresa.nome;
          __empresa.inscricao = empresa.inscricao;
          __empresa.descricao = empresa.descricao;
          return __empresa;
     }

}