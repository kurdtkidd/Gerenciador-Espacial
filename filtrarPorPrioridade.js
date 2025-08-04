const rl = require('./rl');
const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require('./exibirMenu');

function filtrarPorPrioridade(exibirMenu, missoes) {
  console.log("\n======= FILTRAR POR PRIORIDADE =======\n");

  if (missoes.length === 0) {
    console.log("Não há nenhuma missão cadastrada para filtrar.");
    return exibirMenu();
  }

  rl.question("Informe o nível de prioridade (1-5): ", (prioridade) => {
    const prioridadeFormatada = parseInt(prioridade);

    if (
      isNaN(prioridadeFormatada) ||
      prioridadeFormatada < 1 ||
      prioridadeFormatada > 5
    ) {
      console.log("Por favor, informe um número válido.");
      return filtrarPorPrioridade();
    }

    const missoesFiltradas = missoes.filter(
      (missao) => missao.prioridade === prioridadeFormatada
    );

    if (missoesFiltradas.length === 0) {
      console.log(
        `Nenhuma missão com prioridade ${prioridadeFormatada} foi encontrada.`
      );
    } else {
      console.log(`\nMissões com prioridade ${prioridadeFormatada}:\n`);
      missoesFiltradas.forEach((missao) => {
        console.log(`Nome da missão: ${missao.nome}`);
        console.log(`Prioridade: ${missao.prioridade}\n`);
      });
    }

    exibirMenu();
  });
}

module.exports = filtrarPorPrioridade;
