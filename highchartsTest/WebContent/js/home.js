	$(function () {

			   $('#chart1').highcharts({
				   title: {
					    text: '나라별 기온',
						x: -20 //center
				   },
				   
		           subtitle: {
		              text: '-시간대 별 기온-',
		                 x: -20
		           },

				   xAxis: {  //x축
		            categories: ['8시', '9시', '10시', '12시', '13시', '14시']
					},

			       yAxis: {  //y축
			            title: {
	                    text: '단위 (°C)'
	                },

	                plotLines: [{   //선
	                    value: 0,
	                    width: 1,
	                    color: '#808080'
	                }]
		            },

		            tooltip: {
		                valueSuffix: '°Cas'
		            },

		            legend: {  //범례
		                layout: 'vertical',
		                align: 'right',
		                verticalAlign: 'middle',
		                borderWidth: 0
		            },

		            series: [{   //값
		                name: 'Tokyo',
		                data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5]
		            }, {
		                name: 'New York',
		                data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0]
		            },{
		                name: 'New York2',
		                data: [1, 2, 7, 3, 4, 10]
		            }, {
		                name: 'Berlin',
		                data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0]
		            }, {
		                name: 'London',
		                data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2]
		            }]
		        });
		    });