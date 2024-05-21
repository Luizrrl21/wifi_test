// URL do servidor que você quer acessar (o exemplo usa o Google)
const serverUrl = "https://www.google.com";

// URL do cors-anywhere proxy
const corsAnywhereUrl = "https://cors-anywhere.herokuapp.com/";

// Função para verificar se a internet está lenta
function checkInternetSpeed() {
  // Verificando se o navegador está online
  const isOnline = navigator.onLine;

  if (isOnline) {
    const startTime = performance.now(); // Tempo inicial

    // Fazendo uma solicitação HTTP simples ao servidor via cors-anywhere proxy
    fetch(corsAnywhereUrl + serverUrl, { method: "HEAD" })
      .then((response) => {
        const endTime = performance.now(); // Tempo final
        const elapsedTime = endTime - startTime; // Tempo total

        // Definindo um limite de tempo (em milissegundos)
        const speedThreshold = 500; // 500 milissegundos (0.5 segundos)

        // Verificando se o tempo de resposta é maior que o limite
        if (elapsedTime > speedThreshold) {
          document.getElementById("status-text").textContent =
            "A conexão está lenta";
          document
            .getElementById("status-text")
            .classList.remove("status-good", "status-offline");
          document.getElementById("status-text").classList.add("status-bad");
        } else {
          document.getElementById("status-text").textContent =
            "A conexão está rápida";
          document
            .getElementById("status-text")
            .classList.remove("status-bad", "status-offline");
          document.getElementById("status-text").classList.add("status-good");
        }
      })
      .catch((error) => {
        console.error("Erro ao verificar velocidade da internet:", error);
        document.getElementById("status-text").textContent =
          "Erro ao verificar velocidade";
        document
          .getElementById("status-text")
          .classList.remove("status-good", "status-bad");
        document.getElementById("status-text").classList.add("status-offline");
      });
  } else {
    document.getElementById("status-text").textContent =
      "Desconectado da internet";
    document
      .getElementById("status-text")
      .classList.remove("status-good", "status-bad");
    document.getElementById("status-text").classList.add("status-offline");
  }
}

// Chamando a função para verificar a velocidade da internet inicialmente
checkInternetSpeed();

// Adicionando um atraso de 2 segundos e chamando novamente para garantir a detecção correta do status inicial
setTimeout(checkInternetSpeed, 2000);

// Adicionando um ouvinte de evento para detectar mudanças no status de conexão
window.addEventListener("online", checkInternetSpeed);
window.addEventListener("offline", checkInternetSpeed);
