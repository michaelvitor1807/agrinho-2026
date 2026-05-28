// script.js
const ctxProducao = document.getElementById('graficoProducao').getContext('2d');
const graficoProducao = new Chart(ctxProducao, {
    type: 'line',
    data: {
        labels: ['2020', '2021', '2022', '2023', '2024', '2025'],
        datasets: [{
            label: 'Produção de alimentos (milhões de toneladas)',
            data: [50, 55, 53, 60, 62, 65],
            backgroundColor: 'rgba(76, 175, 80, 0.2)',
            borderColor: 'rgba(76, 175, 80, 1)',
            borderWidth: 2,
            fill: true
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'Produção Agrícola Anual' }
        }
    }
});

const ctxSustentavel = document.getElementById('graficoSustentavel').getContext('2d');
const graficoSustentavel = new Chart(ctxSustentavel, {
    type: 'pie',
    data: {
        labels: ['Uso Sustentável', 'Uso Convencional'],
        datasets: [{
            label: 'Práticas Agrícolas',
            data: [65, 35],
            backgroundColor: ['rgba(102, 187, 106, 0.7)', 'rgba(255, 152, 0, 0.7)'],
            borderColor: ['rgba(102, 187, 106, 1)', 'rgba(255, 152, 0, 1)'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'bottom' },
            title: { display: true, text: 'Práticas Agrícolas Sustentáveis (%)' }
        }
    }
});