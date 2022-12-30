# Dogs
#### _Rede social para cães_
Projeto final do curso de React da Origamid.

![](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white) ![](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white) ![](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white) ![](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)

## Descrição
O projeto é uma *Single-Page Application* feita com componentes **React** e estilizados com CSS puro. O professor forneceu uma API feita no WordPress, para criação de usuários, autenticação, post de fotos, post de comentários e recuperação de senhas, através de requisições HTTP no banco de dados. A **Context API** foi utilizada para armazenar as informações de login do usuário, assim como os status de loading e o tratamento de erros.
A **React-Router** e a **Victory** foram as únicas bibliotecas externas utilizadas no projeto, sendo que a Victory foi importada utilizando o método *lazy*, para que os gráficos fossem gerados apenas quando renderizado o seu componente específico, melhorando o desempenho e consumo de memória da aplicação.

<img src="./src/assets/Anima.gif" alt="gif"/>


## Instruções
É possível verificar o conteúdo estudado durante o curso, selecionando a *branch* específica de cada aula e o histórico de [commits].

> Caso você seja um desenvolvedor, use as instruções abaixo para instalar as dependências e sugerir alterações para a aplicação.

Após baixar o projeto deste repositório, dentro do diretório do projeto você deve usar o comando `npm install` em um terminal, para gerar a pasta **node_modules**. Concluída a instalação das dependências do projeto, use o comando `npm start` para visualizar a aplicação na porta [localhost:3000](http://localhost:3000). A página irá recarregar a cada alteração feita no código e mostrará eventuais erros no console.
```sh
npm install
npm start
```

## Desafios das aulas

Ao longo do curso foram propostos vários desafios. A maioria eu consegui concluir com êxito, mas alguns usaram de métodos de JavaScript que eu ainda não conhecia.

| Aula | Tópico da aula (código) |
| ------ | ------ |
| [aula301](https://study-origamid-react-3x3dhhpes-pedropaivadev.vercel.app/) | React Hook [useState] |
| [auala302](https://study-origamid-react-jro42efrc-pedropaivadev.vercel.app/) | React Hook [useEffect] |
| [aula305](https://study-origamid-react-ebz4uyxmg-pedropaivadev.vercel.app/) | React Hook [useContext] |
| [aula401](https://study-origamid-react-kapm1uem3-pedropaivadev.vercel.app/) | Formulários [input] |
| [aula405](https://study-origamid-react-87ar2ilza-pedropaivadev.vercel.app/) | Formulários [checkbox] |
| [aula412](https://study-origamid-react-7vc1zjuht-pedropaivadev.vercel.app/) | Desafio [validação] |
| [aula606](https://study-origamid-react-hxadf0b06-pedropaivadev.vercel.app/) | Desafio [rotas] |

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

[commits]: <https://github.com/PedroPaivaDev/study-origamid-react/commits/main?before=b01f6f00b3aba7a575b729cb51dddb204caa7d61+35&branch=main&qualified_name=refs%2Fheads%2Fmain>

[useState]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/29a74074b92a4b7bb69c3493ad1e5995e3be8224>
[useEffect]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/670aa72e594e8ff10ac236acf6866b555dce5b61>
[useContext]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/4f771cdd66a654af780cf56f7586db5214b24db9>
[input]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/c4fd44fa50d97d61a9140170d6dca65953bfb535>
[checkbox]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/4267b8e513b38f8f0e90c5dabeb5cc38941388b4>
[validação]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/45c70e1c0b244fac11f5dcecc5a29ea6c5a969f2>
[rotas]: <https://github.com/PedroPaivaDev/study-origamid-react/commit/56eddc36d7de7a4c0c227f63a0ddc687bac8bde7>