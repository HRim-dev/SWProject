$(function () {
		var url="/highchart_pilot/restex2";
	
                $.getJSON(url, function(data) {
                    // Populate series
                	var processed_json = new Array();
                   
                    	for (i = 0; i < data.length; i++){
                          
                        		processed_json.push([data[i].quality, data[i].totalCount]);
                        	 
                        }
                    
                	
                 
                    // draw chart
                    	$('#qualityCountContainer').highcharts({
                    	    chart: {
                    	      plotBackgroundColor: null,
                    	      plotBorderWidth: null,
                    	      plotShadow: false,
                    	      type: 'pie'
                    	    },
                    	    title: {
                    	      text: 'Count grouped by wine quality'
                    	    },
                    	    tooltip: {
                    	    	pointFormat: 'Quality {point.x}: <b>{point.percentage:.1f}%</b><br>total: {point.total}'
                    	      
                    	    },
                    	    accessibility: {
                    	        point: {
                    	            valueSuffix: '%'
                    	        }
                    	    },
                    	    plotOptions: {
                    	      pie: {
                    	    	  allowPointSelect: true,
                    	          cursor: 'pointer',
                    	          dataLabels: {
                    	          enabled: true,
                    	          format: '<b>Quality {point.x}</b>:<br>{point.percentage:.1f} %',
                    	        }
                    	      }
                    	    },
                    	    series: [{
                    	    	name: '',
                    	      colorByPoint: true,
                    	      data: processed_json
                    	    }]
                    	  });
            });
              
                
});