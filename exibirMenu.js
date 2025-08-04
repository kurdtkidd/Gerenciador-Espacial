const rl = require("./rl");
const { missoes, missoesConcluidas } = require("./missoes");
const adicionarMissao = require("./adicionarMissao");
const listarMissoesEmAndamento = require("./listarMissoesAndamento");
const listarMissoesConcluidas = require("./listarMissoesConcluidas");
const editarMissao = require("./editarMissao");
const atualizarStatus = require("./atualizarStatus");
const filtrarPorPrioridade = require("./filtrarPorPrioridade");
const rankingDestinos = require("./rankingDestinos");
const listarPorTripulante = require("./listarPorTripulante");

function exibirMenu() {
  console.log("======= GERENCIADOR DE MISSÕES ESPACIAIS =======\n");
  console.log("1 - Adicionar missão");
  console.log("2 - Listar missões em andamento");
  console.log("3 - Listar missões concluídas");
  console.log("4 - Editar missão existente");
  console.log("5 - Marcar como concluída");
  console.log("6 - Filtrar por prioridade");
  console.log("7 - Ranking de destinos");
  console.log("8 - Listar por tripulante");
  console.log("9 - Sair do Sistema");

  rl.question("Escolha uma das opções: ", (opcao) => {
    const opcaoFormatada = parseInt(opcao);

    switch (opcaoFormatada) {
      case 1:
        adicionarMissao(exibirMenu, missoes);
        break;
      case 2:
        listarMissoesEmAndamento(exibirMenu, missoes);
        break;
      case 3:
        listarMissoesConcluidas(exibirMenu, missoesConcluidas);
        break;
      case 4:
        editarMissao(exibirMenu, missoes);
        break;
      case 5:
        atualizarStatus(exibirMenu, missoes, missoesConcluidas);
        break;
      case 6:
        filtrarPorPrioridade(exibirMenu, missoes);
        break;
      case 7:
        rankingDestinos(exibirMenu, missoes);
        break;
      case 8:
        listarPorTripulante(exibirMenu, missoes);
        break;
      case 9:
        console.log("Saindo do sistema...");
        rl.close();
        break;
      default:
        console.log("Opção inválida, tente novamente.");
        exibirMenu();
        break;
    }
  });
}

module.exports = exibirMenu;
