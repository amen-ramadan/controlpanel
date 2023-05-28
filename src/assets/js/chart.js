import "../../../node_modules/chart.js/dist/chart.min.js";

(function () {
    var ctx = document.getElementById('example-chart').getContext('2d');
    var chart = new Chart(ctx, {    
        type: 'line',
		// datasets  و ليس data 
        data: { 
            labels: ["يناير", "فبراير", "مارس", "أبريل", "ماي", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"],
          //  من المفترض أن تكون هناdatasets
            datasets: [{
                label: 'My First dataset',
                backgroundColor: "#5241b2",
                borderColor: '#5241b2',
                data: [0, 10, 5, 2, 20, 30, 45],
                lineTension: 0.2,
            }]
        },

        options: {
            legend: {
                display: false
            },
            scales: {
                yAxes: [{
                    display: false
                }],
                xAxes: [{
                    position: "top"
                }]
            }
        }
    });

    const navigation = document.querySelector(".c-table__navigation");
    const randomArray = (mylength, max) => Array.from({ length: mylength }, () => Math.round(Math.random() * max));
    navigation.addEventListener("click", () => {
        chart.data.datasets[0].data = randomArray(12, 1200);
        chart.update();
    })

})();