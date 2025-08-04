const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require('./exibirMenu');

function listarMissoesEmAndamento(exibirMenu, missoes) {
  console.log("\n======= LISTAR MISSÕES EM ANDAMENTO =======\n");

  if (missoes.length === 0) {
    console.log("Não existem missões cadastradas.");
  } else {
    missoes.forEach((missao, index) => {
      console.log(
        `\nÍndice: ${index + 1}\nNome da missão: ${
          missao.nome
        }\nDestino da missão: ${missao.destino}` +
          `\nPrioridade da missão: ${missao.prioridade}\nTripulantes: ${missao.tripulantes}` +
          `\nConcluída: ${missao.status}\n`
      );
    });
  }

  exibirMenu();
}

module.exports = listarMissoesEmAndamento;
