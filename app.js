let amigos = []

function adicionarAmigo() {

  let amigos = document.getElementById("amigo").value;

  if (amigos.trim() === "") {
    alert("Por favor, insira um nome.");
    return;
  }

  amigos.push(amigos);

  document.getElementById("amigo").value = "";

  atualizarListaAmigos();
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de adicionar os amigos
  
    for (let amigo of amigos) {
      const itemLista = document.createElement("li");
      itemLista.textContent = amigo;
      listaAmigos.appendChild(itemLista);
    }
  }

  function sortearAmigo() {
    if (amigos.length === 0) {
      alert("Adicione amigos para sortear.");
      return;
    }
  
    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];
  
    document.getElementById("resultadoSorteio").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
  }