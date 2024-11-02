
# App TO DO List

Este repositório contém o código fonte do aplicativo "TO DO List", desenvolvido em React Native. O app permite aos usuários criar e marcar como concluídas suas tarefas diárias, definir prioridade, definir prazo, além de exibir uma tela de detalhe de cada tarefa, permitindo que adicione itens à tarefa.

### Tecnologias Utilizadas

* React Native: Framework para construção de aplicativos mobile nativos utilizando JavaScript e React.
* Expo: Plataforma de código aberto para criar aplicativos nativos universais para Android, iOS e web com JavaScript e React.
* TypeScript: Superconjunto de JavaScript, ou seja, um conjunto de ferramentas e formas mais eficientes de escrever código JavaScript, adicionando recursos que não estão presentes de maneira nativa na linguagem.
* Node.JS: Ambiente de execução do código JavaScript do lado servidor (server side), que na prática se reflete na possibilidade de criar aplicações standalone (autossuficientes) em uma máquina servidora, sem a necessidade do navegador.
* Supabase: Alternativa de código aberto ao Firebase. Ele oferece banco de dados Postgres, autenticação, APIs instantâneas, Edge Functions, assinaturas em tempo real, armazenamento e embeddings de vetor.

### Pré-requisitos
* Node.js e yarn (ou npm): Instale as últimas versões em https://nodejs.org/.
* Expo CLI: Instale globalmente com npm install -g expo-cli.
* Um emulador ou dispositivo físico: Configure um emulador do Android ou iOS, ou conecte seu dispositivo físico ao computador.

### Instalação
Clone o repositório:
```
git clone https://github.com/VictorCMarquesDEV/react-native-app-todolist.git
```


Instale as dependências:
```
cd react-native-app-todolist
```
```
yarn
```

Configure o banco de dados:
* Crie um banco de dados: Siga as instruções do seu banco de dados para criar um novo banco. Estou utilizando o Supabase.
* Configure o seu banco: Crie um arquivo .env no projeto e configure as informações de conexão do seu banco de dados.

.env:

```
SUPABASE_URL=your_supabase_url
SUPABASE_ANONKEY=your_supabase_anonkey
```


### Execução
Inicie o servidor de desenvolvimento:
```
npx expo start
```

Escolha a plataforma: Siga as instruções no terminal para escolher se deseja executar o app em um emulador ou dispositivo físico.

### Estrutura do Projeto
* assets: Contém os assets (imagens, ícones, etc.).
* src: Contém os components, context, screens e utils.
* components: Contém os componentes reutilizáveis do aplicativo.
* context: Contém o contexto do aplicativo.
* screens: Contém as telas do aplicativo.
* utils: Contém tudo que for auxiliar do aplicativo.

# Use o código com cuidado!
