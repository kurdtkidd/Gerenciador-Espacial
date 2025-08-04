const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require('./exibirMenu');

function listarMissoesConcluidas(exibirMenu, missoesConcluidas) {
  console.log("\n======= LISTAR MISSÕES CONCLUÍDAS =======\n");

  if (missoesConcluidas.length === 0) {
    console.log("Não existem missões concluídas cadastradas.");
  } else {
    missoesConcluidas.forEach((missao, index) => {
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

module.exports = listarMissoesConcluidas;
