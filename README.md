# nac02-microservicos-send-email

## A Aplicação está deployada no Heroku
### https://nac02-microservicos.herokuapp.com

## Rotas:

```bash
[ POST ] - /send-email
body: {
  "from": "deadringerthresh@gmail.com",
  "to": "email@gmail.com",
  "subject": "Email de teste",
  "text": "Aula de Microserviços"
}

[ GET ] - /list-all-emails
response: [
  {
    "_id": "61750d6a0fcf6c3133ca36bc",
    "from": "deadringerthresh@gmail.com",
    "to": "daniel.brz2009@gmail.com",
    "subject": "Email de teste",
    "text": "Aula de Microserviços"
  },
  {
    "_id": "6175112863b95d646ecba9bf",
    "from": "deadringerthresh@gmail.com",
    "to": "deadringerthresh@gmail.com",
    "subject": "Email de teste",
    "text": "Aula de Microserviços"
  },
  ....etc....
]

[ GET ] - /list-received-emails/[ :userEmail ]
response: [
  {
    "_id": "61750d6a0fcf6c3133ca36bc",
    "from": "deadringerthresh@gmail.com",
    "to": [ :userEmail ],
    "subject": "Email de teste",
    "text": "Aula de Microserviços"
  },
  {
    "_id": "6175112863b95d646ecba9bf",
    "from": "deadringerthresh@gmail.com",
    "to": [ :userEmail ],
    "subject": "Email de teste",
    "text": "Aula de Microserviços"
  },
  ....etc....
]
```

## Integrantes:

Daniel Marques Pinto - RM 81839

Gabriel Bolognesi Andrade - RM 83719

Gustavo Gomes da Silva Fileto - RM 81208

Henrique Sales Kouyoumdjian - RM 81872

Vinicius Paes Moura - RM 82974
