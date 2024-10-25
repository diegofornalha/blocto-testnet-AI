# Iniciando com Create React App

Este projeto foi inicializado com [Create React App](https://github.com/facebook/create-react-app).

## Visão Geral do Projeto

Este projeto é um aplicativo React que interage com a Flow blockchain usando a Blocto Wallet. Ele permite autenticação de usuários, envio de transações, implantação de contratos e adição de tokens.

## Scripts Disponíveis

No diretório do projeto, você pode executar:

### `yarn start`

Executa o aplicativo no modo de desenvolvimento.

- Abra [http://localhost:3000](http://localhost:3000/) para visualizá-lo no navegador.
- A página será recarregada quando você fizer alterações.
- Você também pode ver erros de lint no console.

### `yarn test`

Inicia o executor de testes no modo interativo de observação.

- Veja a seção sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests) para mais informações.

### `yarn run build`

Compila o aplicativo para produção na pasta `build`.

- Ele empacota corretamente o React no modo de produção e otimiza a compilação para obter o melhor desempenho.
- A compilação é minificada e os nomes dos arquivos incluem hashes.
- Seu aplicativo está pronto para ser implantado!

Veja a seção sobre [implantação](https://facebook.github.io/create-react-app/docs/deployment) para mais informações.

### `yarn run eject`

**Nota: esta é uma operação sem volta. Uma vez que você `eject`, não pode voltar atrás!**

- Se você não estiver satisfeito com a ferramenta de compilação e as escolhas de configuração, pode `eject` a qualquer momento. Este comando removerá a dependência única de compilação do seu projeto.
- Em vez disso, ele copiará todos os arquivos de configuração e as dependências transitivas (webpack, Babel, ESLint, etc.) diretamente para o seu projeto, para que você tenha controle total sobre eles. Todos os comandos, exceto `eject`, ainda funcionarão, mas agora eles apontarão para os scripts copiados, permitindo que você os modifique. A partir deste ponto, você estará por conta própria.
- Você não precisa usar `eject` nunca. O conjunto de recursos fornecidos é adequado para pequenos e médios projetos de implantação, e você não deve se sentir obrigado a usar esta funcionalidade. No entanto, entendemos que esta ferramenta não seria útil se você não pudesse personalizá-la quando estivesse pronto para isso.

## Estrutura do Projeto

- **src/index.js**: Ponto de entrada do aplicativo, configurando a conexão com a Flow Testnet.
- **src/App.js**: Componente principal que organiza outros componentes.
- **src/Authenticate.js**: Gerencia a autenticação do usuário.
- **src/SendTransaction.js**: Permite o envio de transações na Flow blockchain.
- **src/DeployContract.js**: Facilita a implantação de contratos na Flow blockchain.
- **src/AddTokenBrasil.js**: Adiciona o Token Brasil à conta do usuário.

## Aprenda Mais

Você pode aprender mais na [documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started).

Para aprender React, consulte a [documentação do React](https://reactjs.org/).

### Recursos Adicionais

- [Divisão de Código](https://facebook.github.io/create-react-app/docs/code-splitting)
- [Analisando o Tamanho do Pacote](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
- [Criando um Progressive Web App](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)
- [Configuração Avançada](https://facebook.github.io/create-react-app/docs/advanced-configuration)
- [Implantação](https://facebook.github.io/create-react-app/docs/deployment)

## Contribuição

Se você deseja contribuir para este projeto, sinta-se à vontade para abrir issues ou pull requests. Agradecemos seu interesse e ajuda!

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.
