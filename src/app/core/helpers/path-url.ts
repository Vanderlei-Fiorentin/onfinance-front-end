import { environment } from 'src/environments/environment';

export class PathUrl {
    
    public AGENCIAS = `${environment.API}/agencias`;    
    public BANCOS = `${environment.API}/bancos`;
    public BANDEIRAS = `${environment.API}/bandeiras`;
    public CARTOES_CREDITO = `${environment.API}/cartoes`;
    public CATEGORIAS = `${environment.API}/categorias`;
    public CONTAS_CORRENTE = `${environment.API}/contas`;
    public DASHBOARD = `${environment.API}/dashboard`;
    public DOCUMENTOS_PARC_LANCTO_CONTABEIS = `${environment.API}/documentos-parcelas`;
    public EXTRATOS_BANCARIOS = `${environment.API}/extratos-bancarios`;
    public EXTRATOS_BANCARIOS_FILTRO = `${environment.API}/extratos-bancarios/filtro`;
    public EMPRESAS = `${environment.API}/empresas`;
    public FATURAS = `${environment.API}/faturas`;
    public FATURAS_BY_FILTRO = `${environment.API}/faturas/filtro`;
    public HISTORICO_LANCAMENTOS = `${environment.API}/historico-lanctos`;
    public LANCTOS_CONTABEIS = `${environment.API}/lanctos-contabeis`;
    public LANCTOS_CONTABEIS_FATURAS = `${environment.API}/lanctos-contabeis/faturas`;
    public LANCTOS_CONTABEIS_PARCELAS = `${environment.API}/lanctos-contabeis/parcelas`;
    public LOGIN = `${environment.API}/login`;
    public LOGIN_ALTERAR_SENHA = `${environment.API}/login/alterar-senha`;
    public LOGIN_REDEFINIR_SENHA = `${environment.API}/login/redefinir-senha`;
    public PERFIL_USUARIO = `${environment.API}/perfil-usuario`;
    public PERMISSOES = `${environment.API}/permissoes`;
    public PERMISSOES_ROLES = `${environment.API}/permissoes-roles`;
    public PRODUTOS_LANCTO_SAIDA = `${environment.API}/produtos-lancto-saida`;
    public PRODUTOS_LANCTO_SAIDA_LIST = `${environment.API}/produtos-lancto-saida/list`;
    public UNIDADES_MEDIDAS = `${environment.API}/unidades`;
    public PAGAMENTOS = `${environment.API}/pagamentos`;
    public PARCELAS_LANCTO_CONTABIL = `${environment.API}/parcelas-lancto-contabil`;
    public PARCELAS_LANCTO_CONTABIL_ABERTO_BY_LANCTO = `${environment.API}/parcelas-lancto-contabil/abertas`;    
    public PARCELAS_LANCTO_CONTABIL_BY_FATURA = `${environment.API}/parcelas-lancto-contabil/fatura`;
    public PARCELAS_LANCTO_CONTABIL_BY_FILTRO = `${environment.API}/parcelas-lancto-contabil/filtro`;
    public PARCELAS_LANCTO_CONTABIL_DESVINCULADAS = `${environment.API}/parcelas-lancto-contabil/desvinculadas`;
    public PARCELAS_LANCTO_CONTABIL_DESVINCULAR = `${environment.API}/parcelas-lancto-contabil/desvincular`;
    public PARCELAS_LANCTO_CONTABIL_VINCULAR = `${environment.API}/parcelas-lancto-contabil/vincular`;
    public PRODUTOS = `${environment.API}/produtos`;
    public USUARIOS = `${environment.API}/usuarios`;
    public USUARIOS_ROLES = `${environment.API}/usuarios-roles`;
    public EVENTOS = `${environment.API}/eventos`;
    public EVENTOS_LANCTO_ENTRADA = `${environment.API}/eventos-lancto-entrada`;
    public EVENTOS_LANCTO_ENTRADA_LIST = `${environment.API}/eventos-lancto-entrada/list`;    
    public SAIDAS_LANCTO_ENTRADA = `${environment.API}/saidas-lancto-entrada`;
    public SAIDAS_LANCTO_ENTRADA_LIST = `${environment.API}/saidas-lancto-entrada/list`;
    public RENEGOCIAR_PARCELAS = `${environment.API}/renegociar-parcelas`;
    public TRANSFERENCIA_BANCARIA = `${environment.API}/transferencias-bancarias`;
    public ROLES = `${environment.API}/roles`;

}