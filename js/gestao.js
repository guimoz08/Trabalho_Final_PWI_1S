function dias(inicio, fim) {
  return (new Date(fim) - new Date(inicio)) / (1000 * 60 * 60 * 24);
}

function totalMes(mes) {
  let total = 0;

  reservas.forEach(r => {
    const d = new Date(r.dataInicio);
    if (d.getMonth() + 1 === mes) {
      const q = quartos.find(q => q.id === r.quartoId);
      total += dias(r.dataInicio, r.dataFim) * q.preco;
    }
  });

  return total;
}

let totalAno = 0;
const lista = document.getElementById("meses");

for (let m = 1; m <= 12; m++) {
  const t = totalMes(m);
  totalAno += t;

  lista.innerHTML += `
    <li class="list-group-item">
      Mês ${m}: €${t.toFixed(2)}
    </li>
  `;
}

document.getElementById("ano").textContent = totalAno.toFixed(2);
