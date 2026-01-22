const quartos = [
  { id: 1, tipo: "Single", preco: 50 },
  { id: 2, tipo: "Double", preco: 80 },
  { id: 3, tipo: "Suite", preco: 120 }
];

// Carregar reservas do localStorage
let reservas = JSON.parse(localStorage.getItem("reservas")) || [
  {
    id: 1,
    quartoId: 1,
    cliente: "Ana Costa",
    dataInicio: "2025-02-10",
    dataFim: "2025-02-15"
  },
  {
    id: 2,
    quartoId: 3,
    cliente: "Pedro Silva",
    dataInicio: "2025-05-01",
    dataFim: "2025-05-06"
  }
];

// Guardar no localStorage
function guardarReservas() {
  localStorage.setItem("reservas", JSON.stringify(reservas));
}

