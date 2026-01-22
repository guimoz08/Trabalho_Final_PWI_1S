const select = document.getElementById("quarto");
const lista = document.getElementById("listaReservas");

// Preencher select dos quartos
quartos.forEach(q => {
  select.innerHTML += `<option value="${q.id}">${q.tipo}</option>`;
});

// Mostrar mensagem Bootstrap
function mostrarMensagem(texto, tipo) {
  const div = document.getElementById("mensagem");

  div.innerHTML = `
    <div class="alert alert-${tipo} alert-dismissible fade show" role="alert">
      ${texto}
      <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    </div>
  `;

  setTimeout(() => {
    div.innerHTML = "";
  }, 3000);
}

// Criar reserva
function criarReserva() {
  const cliente = document.getElementById("cliente").value;
  const quartoId = Number(select.value);
  const inicio = document.getElementById("inicio").value;
  const fim = document.getElementById("fim").value;

  if (!cliente || !inicio || !fim) {
    mostrarMensagem("Preencha todos os campos!", "warning");
    return;
  }

  reservas.push({
    id: reservas.length + 1,
    quartoId,
    cliente,
    dataInicio: inicio,
    dataFim: fim
  });

  guardarReservas();
  mostrarReservas();
  mostrarMensagem("Reserva criada com sucesso!", "success");

  // Limpar campos
  document.getElementById("cliente").value = "";
  document.getElementById("inicio").value = "";
  document.getElementById("fim").value = "";
}

// Cancelar reserva
function cancelarReserva(id) {
  reservas = reservas.filter(r => r.id !== id);
  guardarReservas();
  mostrarReservas();
  mostrarMensagem("Reserva cancelada com sucesso!", "danger");
}

// Listar reservas
function mostrarReservas() {
  lista.innerHTML = "";

  reservas.forEach(r => {
    lista.innerHTML += `
      <li class="list-group-item d-flex justify-content-between align-items-center">
        <div>
          <strong>${r.cliente}</strong><br>
          ${r.dataInicio} → ${r.dataFim}
        </div>
        <button class="btn btn-danger btn-sm" onclick="cancelarReserva(${r.id})">
          Cancelar
        </button>
      </li>
    `;
  });
}

mostrarReservas();
