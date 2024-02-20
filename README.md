# CarStore - Projeto Final

## Sobre

Este repositório contém o projeto de uma funcionalidade de disparo de email, desenvolvido como projeto final individual do módulo de Lógica de Programação do curso **Santander Coders 2023**, ministrado pela [AdaTech](https://ada.tech/).

## Como rodar o projeto
#### Para rodar o projeto é necessário ter o [Node.Js](https://nodejs.org/en) instalado em sua máquina

1. Rode o projeto utilizando o script abaixo
```
npm run dev
```

## Desafio proposto

Você foi contratado como programador para uma grande rede de lojas de automóveis (CarStore) e o seu primeiro desafio é construir a funcionalidade de enviar um e-mail, todas as segundas-feiras, para os clientes que visitaram as lojas no último mês, informando-os sobre os novos veículos e os mais vendidos, bem como as condições para aquisição

### Informações

- Como não haverá acesso a banco de dados, uma lista (array) de emails deverá ser criada, onde estarão armazenados os emails dos clientes.

- A lista de emails armazenará, além do email de cada cliente, uma flag com a decisão do cliente sobre receber ou não comunicações de marketing.

- Será fornecida uma função, no arquivo "envia-email.js", que fará o envio "fake" do e-mail para um cliente.

#### Dado o escopo global da aplicação, pede-se desenvolver cada subtarefa visando, ao final, a entrega completa da funcionalidade:

1. Criar uma função para verificar o dia da semana atual, que será levado em conta para o disparo dos emails.

2. Criar uma função para montar o corpo do e-mail a ser enviado.

3. Criar uma função para enviar o e-mail para cada um dos clientes da lista, levando em conta a sua decisão sobre receber comunicações de marketing.

4. Tratar o retorno de erro ou sucesso da função "enviarEmail", de maneira a exibir uma mensagem amigável ao usuário no console.



### Desenvolvido por: [Bruno Pavese](https://github.com/brunopavese)