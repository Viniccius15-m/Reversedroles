// Função para calcular o tempo desde a data inicial
function calculateTime() {
    const startDate = new Date("2022-10-26T00:00:00");
    const now = new Date();
    const difference = now - startDate;

    const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    document.getElementById("countdown").innerHTML = `${years} anos, ${months} meses, ${days} dias, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Atualiza o contador de tempo a cada segundo
setInterval(calculateTime, 1000);

// Função para revelar o texto
function revealText() {
    const secretText = document.getElementById("secret-text");
    secretText.style.display = "block";
    setTimeout(() => {
        secretText.style.opacity = 1;
    }, 100);
}