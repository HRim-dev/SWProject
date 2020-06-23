$(function () {
				var url = "/highchart_pilot/restex";
                
				
                
                $.getJSON(url, function(data) {
                    // Populate series
                	var processed_json = new Array();
                    for (j=0; j<10; j++) {
                    	var arr = new Array();
                    	for (i = 0; i < data.length; i++){
                            
                        	if (data[i].quality==j) {
                               	arr.push([data[i].pH, data[i].fixed_acidity]);
                        	}   
                        }
                    	processed_json.push(arr);
                    }
                	
                 
                    // draw chart
                    $('#pHFixedContainer').highcharts({
                    chart: {
                        type: 'scatter',
                        zoomType: 'xy'
                    },
                    title: {
                        text: "pH - FixedAcidity data"
                    },
                    xAxis: {
                        title: {
                            enabled: true,
                            text: 'pH'
                        },
                        startOnTick: true,
                        endOnTick: true,
                        showLastLabel: true
                    },
                    yAxis: {
                        title: {
                            text: 'Fixed Acidity'
                        }
                    },
                    legend: {
                        layout: 'vertical',
                        align: 'right',
                        verticalAlign: 'top',
                        x: 0,
                        y: 70,
                        floating: true,
                        backgroundColor: Highcharts.defaultOptions.chart.backgroundColor,
                        borderWidth: 1
                    },
                    plotOptions: {
                        scatter: {
                            marker: {
                                radius: 3,
                                states: {
                                    hover: {
                                        enabled: true,
                                        lineColor: 'rgb(100,100,100)'
                                    }
                                }
                            },
                            states: {
                                hover: {
                                    marker: {
                                        enabled: false
                                    }
                                }
                            },
                            tooltip: {
                                headerFormat: '<b>{series.name}</b><br>',
                                pointFormat: 'pH : {point.x} , FixedAcidity : {point.y}'
                            }
                        }
                    },
                    series: [{
	                    name: 'Quality 0',
                        data: processed_json[0]
                    }, {
	                    name: 'Quality 1',
                        data: processed_json[1]
                    }, {
	                    name: 'Quality 2',
                        data: processed_json[2]
                    }, {
	                    name: 'Quality 3',
                        data: processed_json[3]
                    }, {
	                    name: 'Quality 4',
                        data: processed_json[4]
                    }, {
	                    name: 'Quality 5',
                        data: processed_json[5]
                    }, {
	                    name: 'Quality 6',
                        data: processed_json[6]
                    }, {
	                    name: 'Quality 7',
                        data: processed_json[7]
                    }, {
	                    name: 'Quality 8',
                        data: processed_json[8]
                    }, {
	                    name: 'Quality 9',
                        data: processed_json[9]
                    }, ]
                }); 
                  
            });
              
                
});