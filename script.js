// URL do servidor que você quer acessar (o exemplo usa o Google)
const serverUrl = 'https://www.google.com';

// URL do cors-anywhere proxy
const corsAnywhereUrl = 'https://cors-anywhere.herokuapp.com/';

// Função para verificar se a internet está lenta
function checkInternetSpeed() {
    const startTime = performance.now(); // Tempo inicial

    // Fazendo uma solicitação HTTP simples ao servidor via cors-anywhere proxy
    fetch(corsAnywhereUrl + serverUrl, { method: 'HEAD' })
        .then(response => {
            const endTime = performance.now(); // Tempo final
            const elapsedTime = endTime - startTime; // Tempo total

            // Definindo um limite de tempo (em milissegundos)
            const speedThreshold = 500; // 500 milissegundos (0.5 segundos)

            // Verificando se o tempo de resposta é maior que o limite
            if (elapsedTime > speedThreshold) {
                document.getElementById('status-text').textContent = 'A conexão está lenta';
            } else {
                document.getElementById('status-text').textContent = 'A conexão está rápida';
            }
        })
        .catch(error => {
            console.error('Erro ao verificar velocidade da internet:', error);
            document.getElementById('status-text').textContent = 'Erro ao verificar velocidade';
        });
}

// Chamando a função para verificar a velocidade da internet
checkInternetSpeed();
