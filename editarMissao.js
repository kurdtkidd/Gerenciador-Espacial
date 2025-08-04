const rl = require("./rl");
const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require("./exibirMenu");

function editarMissao(exibirMenu, missoes) {
  console.log("\n======= EDITAR MISSÃO =======\n");

  if (missoes.length === 0) {
    console.log("Não há nenhuma missão cadastrada para editar.");
    return exibirMenu();
  }

  console.log("Missões cadastradas:");
  missoes.forEach((missao, index) => {
    console.log(
      `\nÍndice: ${index + 1}\nNome da missão: ${
        missao.nome
      }\nDestino da missão: ${missao.destino}` +
        `\nPrioridade da missão: ${missao.prioridade}\nTripulantes: ${missao.tripulantes}` +
        `\nConcluída: ${missao.status}\n`
    );
  });

  rl.question("\nDigite o número da missão que deseja editar: ", (indice) => {
    const i = parseInt(indice) - 1;

    if (isNaN(i) || i < 0 || i >= missoes.length) {
      console.log("Índice inválido.");
      return editarMissao();
    }

    console.log("\n======= OPÇÕES DE EDIÇÃO DA MISSÃO =======\n");
    console.log("1 - Alterar nome da missão");
    console.log("2 - Alterar o destino da missão");
    console.log("3 - Alterar a prioridade da missão");
    console.log("4 - Alterar os integrantes da missão");

    menuEditar();

    function menuEditar() {
      rl.question("Informe o número da opção que deseja editar: ", (opcao) => {
        const opcaoFormatada = parseInt(opcao);

        switch (opcaoFormatada) {
          case 1:
            alterarNome();
            break;
          case 2:
            alterarDestino();
            break;
          case 3:
            alterarPrioridade();
            break;
          case 4:
            alterarTripulantes();
            break;
          default:
            console.log("Digite uma opção válida.");
            menuEditar();
            break;
        }
      });
    }

    function alterarNome() {
      rl.question("Informe o novo nome: ", (novoNome) => {
        missoes[i].nome = novoNome;
        console.log("Nome alterado com sucesso.");
        perguntarMaisEdicoes();
      });
    }

    function alterarDestino() {
      rl.question("Informe o novo destino: ", (novoDestino) => {
        missoes[i].destino = novoDestino;
        console.log("Destino alterado com sucesso.");
        perguntarMaisEdicoes();
      });
    }

    function alterarPrioridade() {
      rl.question("Informe a nova prioridade: ", (novaPrioridade) => {
        missoes[i].prioridade = parseInt(novaPrioridade);
        console.log("Prioridade alterada com sucesso.");
        perguntarMaisEdicoes();
      });
    }

    function alterarTripulantes() {
      rl.question("Informe os novos tripulantes: ", (novosTripulantes) => {
        missoes[i].tripulantes = novosTripulantes;
        console.log("Tripulantes alterados com sucesso.");
        perguntarMaisEdicoes();
      });
    }

    function perguntarMaisEdicoes() {
      rl.question("Deseja alterar mais alguma coisa? (S/N): ", (opcao) => {
        const opcaoFormatada = opcao.toLowerCase();
        if (opcaoFormatada === "s") {
          menuEditar();
        } else if (opcaoFormatada === "n") {
          exibirMenu();
        } else {
          console.log("Informe uma resposta válida.");
          perguntarMaisEdicoes();
        }
      });
    }
  });
}

module.exports = editarMissao;
