import { Transacao } from "../types/Transacao.js"
import { TipoTransacao } from "../types/TipoTransacao.js"
import Conta from "../types/Conta.js"
import SaldoComponent from "./saldo-component.js"
import ExtratoComponent from "./extrato-component.js"

const elementoFormulario = document.querySelector<HTMLFormElement>('.block-nova-transacao form')
elementoFormulario.addEventListener('submit', (event) => {
  try {
    event.preventDefault()
    if (!elementoFormulario.checkValidity()) {
      alert('Por favor, preencha todos os campos da transação!')
      return
    }
  
    const inputTipoTransacao = elementoFormulario.querySelector<HTMLSelectElement>('#tipoTransacao')
    const inputValor = elementoFormulario.querySelector<HTMLInputElement>('#valor')
    const inputData = elementoFormulario.querySelector<HTMLInputElement>('#data')
  
    let tipoTransacao: TipoTransacao = inputTipoTransacao.value as TipoTransacao
    let valor: number = inputValor.valueAsNumber
    let data: Date = new Date(inputData.value + ' 00:00:00')
  
    const novaTransacao: Transacao = {
      tipoTransacao: tipoTransacao,
      valor: valor,
      data: data
    }
  
    Conta.registrarTransacao(novaTransacao)
    SaldoComponent.atualizar()
    ExtratoComponent.atualizar()
    elementoFormulario.reset()
  } catch (erro) {
    alert(erro.message)
  }
})
