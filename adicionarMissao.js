const rl = require('./rl');
const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require('./exibirMenu');


function adicionarMissao(exibirMenu, missoes) {
  console.log("\n======= CADASTRO DE MISSÃO =======\n");

  rl.question("Informe o nome da missão: ", (nome) => {
    rl.question("Informe o destino (ex: Marte): ", (destino) => {
      function perguntarPrioridade() {
        rl.question(
          "Informe o nível de prioridade da missão (1-5): ",
          (prioridade) => {
            const prioridadeFormatada = parseInt(prioridade);

            if (
              isNaN(prioridadeFormatada) ||
              prioridadeFormatada < 1 ||
              prioridadeFormatada > 5
            ) {
              console.log("Informe um valor entre 1 e 5.");
              perguntarPrioridade();
            } else {
              rl.question("Informe o nome dos tripulantes: ", (tripulantes) => {
                missoes.push({
                  nome: nome,
                  destino: destino,
                  prioridade: prioridadeFormatada,
                  tripulantes: tripulantes,
                  status: false,
                });

                console.log("Missão cadastrada com sucesso.\n");
                exibirMenu();
              });
            }
          }
        );
      }

      perguntarPrioridade();
    });
  });
}

module.exports = adicionarMissao;
