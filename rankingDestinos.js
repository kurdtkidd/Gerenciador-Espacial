const { missoes, missoesConcluidas } = require("./missoes");
const exibirMenu = require("./exibirMenu");

function rankingDestinos(exibirMenu, missoes) {
  console.log("\n======= RANKING DE DESTINOS =======\n");

  if (missoes.length === 0) {
    console.log("Não há nenhuma missão cadastrada.");
    return exibirMenu();
  }

  const destinoContagem = {};

  missoes.forEach((missao) => {
    const destino = missao.destino;

    if (!destinoContagem[destino]) {
      destinoContagem[destino] = {
        quantidade: 0,
        missoes: [],
      };
    }

    destinoContagem[destino].quantidade += 1;
    destinoContagem[destino].missoes.push(missao.nome);
  });

  const ranking = Object.entries(destinoContagem).sort(
    (a, b) => b[1].quantidade - a[1].quantidade
  );

  ranking.forEach(([destino, info], index) => {
    console.log(`Rank ${index + 1}: ${destino}`);
    console.log(`Total de missões: ${info.quantidade}`);
    console.log("Missões:");
    info.missoes.forEach((nome) => {
      console.log(`- ${nome}`);
    });
    console.log("");
  });

  exibirMenu();
}

module.exports = rankingDestinos;
