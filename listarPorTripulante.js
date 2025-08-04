const rl = require("./rl");
const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require("./exibirMenu");

function listarPorTripulante(exibirMenu, missoes) {
  console.log("\n======= LISTAR MISSÕES POR TRIPULANTE =======\n");

  if (missoes.length === 0) {
    console.log("Não há nenhuma missão cadastrada.");
    return exibirMenu();
  }

  rl.question("Informe o nome do tripulante: ", (nome) => {
    const nomeFormatado = nome.trim().toLowerCase();

    const missoesComTripulante = missoes.filter((missao) => {
      const tripulantes = missao.tripulantes
        .split(",")
        .map((t) => t.trim().toLowerCase());

      return tripulantes.includes(nomeFormatado);
    });

    if (missoesComTripulante.length === 0) {
      console.log(`Nenhuma missão encontrada para o tripulante "${nome}".`);
    } else {
      console.log(`\nMissões do tripulante "${nome}":\n`);
      missoesComTripulante.forEach((missao) => {
        console.log(
          `- ${missao.nome} (Destino: ${missao.destino}, Prioridade: ${missao.prioridade})`
        );
      });
    }

    exibirMenu();
  });
}

module.exports = listarPorTripulante;
