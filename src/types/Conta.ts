import { TipoTransacao } from "./TipoTransacao.js"
import { Transacao } from "./Transacao.js"

let saldo: number = 5000

const Conta = {
  getSaldo() {
    return saldo
  },

  getDataAcesso() {
    return new Date()
  },

  registrarTransacao(novaTransacao: Transacao): void {
    if (novaTransacao.tipoTransacao == TipoTransacao.DEPOSITO) {
      saldo += novaTransacao.valor
    } else if (novaTransacao.tipoTransacao == TipoTransacao.TRANSFERENCIA || novaTransacao.tipoTransacao == TipoTransacao.PAGAMENTO_BOLETO) {
      saldo -= novaTransacao.valor
    } else {
      alert('Tipo de Transação inválido!')
      return
    }

    console.log(novaTransacao)
  }
}

export default Conta