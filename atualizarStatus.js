const rl = require("./rl");
const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require("./exibirMenu");

function atualizarStatus(exibirMenu, missoes, missoesConcluidas) {
  console.log("\n======= ATUALIZAR STATUS =======\n");

  if (missoes.length === 0) {
    console.log("Não há nenhuma missão cadastrada para atualizar o status.");
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

  rl.question(
    "\nDigite o número da missão que deseja marcar como concluída: ",
    (indice) => {
      const i = parseInt(indice) - 1;

      if (isNaN(i) || i < 0 || i >= missoes.length) {
        console.log("Índice inválido.");
        return atualizarStatus();
      }

      rl.question(
        "Tem certeza que deseja marcar essa missão como concluída? (S/N): ",
        (opcao) => {
          const opcaoFormatada = opcao.toLowerCase();

          if (opcaoFormatada === "s") {
            const missaoConcluida = missoes.splice(i, 1)[0];
            missaoConcluida.status = true;
            missoesConcluidas.push(missaoConcluida);
            console.log(
              `Missão "${missaoConcluida.nome}" marcada como concluída com sucesso.`
            );
            exibirMenu();
          } else if (opcaoFormatada === "n") {
            exibirMenu();
          } else {
            console.log("Informe uma opção válida.");
            atualizarStatus();
          }
        }
      );
    }
  );
}

module.exports = atualizarStatus;
