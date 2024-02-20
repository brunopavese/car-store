const enviarEmail = require('./envia-email.js')
const db = require('./db.js')

function pegarDiaDaSemana() {
  const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
  const diaDaSemana = new Date().getDay()

  return diasDaSemana[diaDaSemana]
}

function enviarEmailsParaLista(tabelaEmails) {
  const listaDestinatarios = tabelaEmails.filter((cliente) => cliente.receberEmailsPromocionais)

  listaDestinatarios.forEach(destinatario => {
    const retorno = enviarEmail(destinatario.email, 'CarStore: Seu Carro Novo te Espera!', criarCorpoDoEmail())
    if (retorno.status === 'Error') {
      console.log('\x1b[31m%s\x1b[0m', 'Ocorreu um erro no envio', `{ Mensagem: ${retorno.message} }`)
    } else {
      console.log('\x1b[32m%s\x1b[0m', `${retorno.message}`)
    }
  })
}

function pegarCarrosMaisVendidos(tabelaCarros) {
  const carrosOrdenados = tabelaCarros.sort((a, b) => b.totalVendas - a.totalVendas)

  return carrosOrdenados.slice(0, 3)
}

function pegarCarrosLancamentos(tabelaCarros) {
  const carrosOrdenados = tabelaCarros.sort((a, b) => {
    if (a.ano > b.ano) {
      return -1;
    } else if (a.ano < b.ano) {
      return 1;
    } else {
      if (a.mes > b.mes) {
        return -1;
      } else if (a.mes < b.mes) {
        return 1;
      } else {
        return 0;
      }
    }
  })

  return carrosOrdenados.slice(0, 3)
}

function precoEmBRL(valor) {
  return valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

function criarCorpoDoEmail() {
  const maisVendidos = pegarCarrosMaisVendidos(db.carros)
  const lancamentos = pegarCarrosLancamentos(db.carros)

  const corpoDoEmail =
    `
  Prepare-se para dirigir a emoção dos seus sonhos! A CarStore chegou com tudo para revolucionar sua experiência na compra do seu carro novo. Aqui, você encontra uma seleção impecável de veículos 0km e seminovos, das melhores marcas e modelos, com condições de pagamento que cabem no seu bolso.
  
  Descubra a Emoção dos Novos Lançamentos:
  
  ${lancamentos[0].marca + ' ' + lancamentos[0].modelo}: Design inovador, tecnologia de ponta e desempenho inigualável. Este carro vai te conquistar!
  Apenas ${precoEmBRL(lancamentos[0].preco)} à vista
  ${lancamentos[1].marca + ' ' + lancamentos[1].modelo}: Conforto e segurança para toda a família, com um design elegante e moderno.
  Apenas ${precoEmBRL(lancamentos[1].preco)} à vista
  ${lancamentos[2].marca + ' ' + lancamentos[2].modelo}: Aventura e liberdade te esperam com este modelo robusto e versátil.
  Apenas ${precoEmBRL(lancamentos[2].preco)} à vista
  
  Mais Vendidos:
  
  ${maisVendidos[0].marca + ' ' + maisVendidos[0].modelo}: O carro mais querido do Brasil, agora com ofertas imperdíveis.
  Apenas ${precoEmBRL(maisVendidos[0].preco)} à vista
  ${maisVendidos[1].marca + ' ' + maisVendidos[1].modelo}: Excelente custo-benefício e economia de combustível.
  Apenas ${precoEmBRL(maisVendidos[1].preco)} à vista
  ${maisVendidos[2].marca + ' ' + maisVendidos[2].modelo}: Tecnologia e conectividade para você dirigir com o máximo de conforto e segurança.
  Apenas ${precoEmBRL(maisVendidos[2].preco)} à vista
  
  Condições Irresistíveis:
  
  Entrada facilitada: Parcelamos sua entrada em até 24 vezes sem juros.
  Financiamento: Taxas de juros especiais e prazos longos para você pagar com tranquilidade.
  
  Venha conhecer a CarStore e realize o sonho do seu carro novo!
  
  CarStore: Seu Carro Novo, Sua Nova História!
  
  Não perca tempo! Esta é a sua chance de realizar o sonho do seu carro novo. Entre em contato com a CarStore agora mesmo e agende uma visita.
  
  Atenciosamente,
  
  Equipe CarStore
  `
  return corpoDoEmail
}

function main() {
  const diaDaSemana = pegarDiaDaSemana()
  diaDaSemana === 'Segunda-feira' ? enviarEmailsParaLista(db.emails) : console.log(`Hoje é ${diaDaSemana}, não é dia de enviar emails`)
}

main()
