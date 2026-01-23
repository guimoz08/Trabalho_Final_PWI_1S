function dias(inicio, fim) {
  return (new Date(fim) - new Date(inicio)) / (1000 * 60 * 60 * 24);
}

function totalMes(mes) {
  let total = 0;

  reservas.forEach(r => {
    const d = new Date(r.dataInicio);

    if (d.getMonth() + 1 === mes) {
      const quarto = quartos.find(q => q.id === r.quartoId);
      total += dias(r.dataInicio, r.dataFim) * quarto.preco;
    }
  });

  return total;
}

const mesesNomes = [
  "Jan", "Fev", "Mar", "Abr", "Mai", "Jun",
  "Jul", "Ago", "Set", "Out", "Nov", "Dez"
];

let totais = [];
let totalAno = 0;

for (let m = 1; m <= 12; m++) {
  const t = totalMes(m);
  totais.push(t);
  totalAno += t;
}

document.getElementById("ano").textContent = totalAno.toFixed(2);

const ctx = document.getElementById("grafico");

new Chart(ctx, {
  type: "bar",
  data: {
    labels: mesesNomes,
    datasets: [{
      label: "Faturação (€)",
      data: totais,
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
