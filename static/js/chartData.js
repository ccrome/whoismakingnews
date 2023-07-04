$(
    function () {
	var ctx = document.getElementById('basicChart');
	var myChart = new Chart(ctx, {
	    type: 'bar',
	    data: {
		labels: ['10-June-19', '11-June-19', '12-June-19', '13-June-19', '14-June-19', '15-June-19'],
		datasets: [{
		    label: '# of Commits',
		    data: [0, 24, 94, 21, 25, 34],
		    backgroundColor: [
			'rgba(255, 99, 132, 0.2)',
			'rgba(54, 162, 235, 0.2)',
			'rgba(255, 206, 86, 0.2)',
			'rgba(75, 192, 192, 0.2)',
			'rgba(153, 102, 255, 0.2)',
			'rgba(255, 159, 64, 0.2)'
		    ],
		    borderColor: [
			'rgba(255, 99, 132, 1)',
			'rgba(54, 162, 235, 1)',
			'rgba(255, 206, 86, 1)',
			'rgba(75, 192, 192, 1)',
			'rgba(153, 102, 255, 1)',
			'rgba(255, 159, 64, 1)'
		    ],
		    borderWidth: 1
		}]
	    }
	});
    }
);
