//AOS animation
jQuery(document).ready(function () {
    $('.loader').fadeOut("slow");

    $('#dataTable').DataTable();
});

window.addEventListener('DOMContentLoaded', event => {

    // Toggle the side navigation
    const sidebarToggle = document.body.querySelector('#sidebarToggle');
    if (sidebarToggle) {
        // Uncomment Below to persist sidebar toggle between refreshes
        // if (localStorage.getItem('cat|sidebar-toggle') === 'true') {
        //     document.body.classList.toggle('cat-sidenav-toggled');
        // }
        sidebarToggle.addEventListener('click', event => {
            event.preventDefault();
            document.body.classList.toggle('cat-sidenav-toggled');
            localStorage.setItem('cat|sidebar-toggle', document.body.classList.contains('cat-sidenav-toggled'));
        });
    }
});

$(function () {
    $('input[name="daterangepicker"]').daterangepicker({
        opens: 'left'
    }, function (start, end, label) {
        console.log("A new date selection was made: " + start.format('DD-MM-YYYY') + ' to ' + end.format('DD-MM-YYYY'));
    });
});


$(function () {
    $('input[name="datapicker"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        minYear: 1901,
        maxYear: parseInt(moment().format('YYYY'), 10)
    });
});

//file uploader
$('#file-upload').change(function () {
    var filepath = this.value;
    var m = filepath.match(/([^\/\\]+)$/);
    var filename = m[1];
    $('#filename').html(filename);
});

//bar chartjs
var ctxBar = document.getElementById("barChartJs").getContext('2d');
var barChart = new Chart(ctxBar, {
    type: 'bar',
    data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        defaultFontFamily: 'inherit',
        datasets: [{
            data: [10, 15, 7, 12, 85, 10, 50],
            label: "Custom",
            backgroundColor: 'rgba(204,5,0,0.2)',
            borderColor: '#cc0500',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(204,5,0,1)',
            hoverBackgroundColor: 'rgba(204,5,0,0.4)',
            hoverBorderColor: 'rgba(204,5,0,1)',
        }, {
            label: "Admin",
            data: [20, 30, 5, 3, 15, 5, 0],
            backgroundColor: 'rgba(204,5,0,0.2)',
            borderColor: '#cc0500',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(204,5,0,1)',
            hoverBackgroundColor: 'rgba(204,5,0,0.4)',
            hoverBorderColor: 'rgba(204,5,0,1)',
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#cc0500',
            bodyFontColor: '#000000',
            backgroundColor: '#ffffff',
            titleFontFamily: 'inherit',
            bodyFontFamily: 'inherit',
            cornerRadius: 3,
            intersect: false,
        },
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                fontFamily: 'inherit',
            },
        },
        layout: {
            padding: 10,
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: true,
            text: 'Crypto Currency'
        }
    }
});


//line chartjs
var ctxLine = document.getElementById("lineChartJs").getContext('2d');
var lineChart = new Chart(ctxLine, {
    type: 'line',
    data: {
        labels: ["2010", "2011", "2012", "2013", "2014", "2015", "2016"],
        defaultFontFamily: 'inherit',
        datasets: [{
            data: [10, 15, 7, 12, 85, 10, 50],
            label: "Custom",
            backgroundColor: 'rgba(204,5,0,0.2)',
            borderColor: '#cc0500',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(204,5,0,1)',
            hoverBackgroundColor: 'rgba(204,5,0,0.4)',
            hoverBorderColor: 'rgba(204,5,0,1)',
        }, {
            label: "Admin",
            data: [20, 30, 5, 3, 15, 5, 0],
            backgroundColor: 'rgba(204,5,0,0.2)',
            borderColor: '#cc0500',
            borderWidth: 1,
            pointStyle: 'circle',
            pointRadius: 5,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'rgba(204,5,0,1)',
            hoverBackgroundColor: 'rgba(204,5,0,0.4)',
            hoverBorderColor: 'rgba(204,5,0,1)',
        }]
    },
    options: {
        maintainAspectRatio: false,
        responsive: true,
        tooltips: {
            mode: 'index',
            titleFontSize: 12,
            titleFontColor: '#cc0500',
            bodyFontColor: '#000000',
            backgroundColor: '#ffffff',
            titleFontFamily: 'inherit',
            bodyFontFamily: 'inherit',
            cornerRadius: 3,
            intersect: false,
        },
        legend: {
            position: 'bottom',
            labels: {
                usePointStyle: true,
                fontFamily: 'inherit',
            },
        },
        layout: {
            padding: 10,
        },
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Month'
                }
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    drawBorder: true
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Value'
                }
            }]
        },
        title: {
            display: true,
            text: 'Stock Market'
        }
    }
});