export const lineChartData = {
    labels:[
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
    ],
    datasets: [
        {
            label: "Turbidity",
            data: [12, 19, 3, 5, 2, 3, 10],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1
        },
        {
            label: "Temperature",
            data: [24, 27, 23, 30, 26, 24, 29],
            fill: false,
            borderColor: "rgb(54, 162, 235)",
            tension: 0.1
        },
        {
            label: "TDS",
            data: [15, 17, 10, 12, 19, 14, 12],
            fill: false,
            borderColor: "rgb(255, 99, 132)",
            tension: 0.1
        },        
        {
            label: "Ammonia(NH3)",
            data: [15, 27, 10, 12, 29, 14, 12],
            fill: false,
            borderColor: "rgb(45, 99, 132)",
            tension: 0.1
        },
        {
            label: "PH",
            data: [5, 7, 10, 2, 9, 4, 12],
            fill: false,
            borderColor: "rgb(22, 99, 132)",
            tension: 0.1
        }
    ]
}