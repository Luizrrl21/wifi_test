// Função para verificar se a internet está lenta
function checkInternetSpeed() {
    const startTime = performance.now(); // Tempo inicial

    // Fazendo uma solicitação HTTP simples a um servidor externo (Google)
    fetch('https://www.google.com', { method: 'HEAD' })
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
