$(document).ready(function () {
    var ctx = $("#mycanvas").get(0).getContext("2d");
    var data = [{
        value: 270,
        color: "red",
        highlight: "lightskyblue",
        lable: "html"
    },
    {
        value: 60,
        color: "blue",
        highlight: "lightskyblue",
        lable: "html"

    },
    {
        value: 40,
        color: "pink",
        highlight: "lightskyblue",
        lable: "html"
    },
    {
        value: 20,
        color: "yellow",
        highlight: "lightskyblue",
        lable: "html"
    }

    ];
    var chart = new Chart(ctx).Doughnut(data);

});