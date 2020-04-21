
//1)jquery
$( document ).ready(function() {
    load_movielist();
});
 
 
function load_movielist(){
    var movieList;
    var html;
    $("#load_movieList").click(function(){  
    
        var url="/visualize_pilot/restex";  
        //var params="param1="+param1+"¶m2="+param1;  
  
        $.ajax({      
            type:"POST",  
            url:url,      
            //data:params,      
            success:function(args){
                movieList = args;
                for(var i=0;i<args.length;i++){
                    html = "<tr>"
                            + "<td>" + args[i].movie_name + "</td>" 
                            + "<td>" + args[i].director + "</td>"
                            + "<td>" + args[i].type + "</td>"
                            "</tr>";
                    $("#movieList").append(html);
                }
                
                console.log(args);
            },   
            beforeSend:function(){
                $("#movieList").empty();  
            },
            error:function(e){  
                alert(e.responseText);  
            }  
        });  
      
    });
}

/*

//2)pure javascript
document.addEventListener('DOMContentLoaded', function () {
	load_movielist();
});

function load_movielist(){
	var movieList;
	var html="";
	var movieList_item;
	
	//서버로 요청하기전에 실행되는 함수(데이터 조회시 로딩)
	var beforeSend=function(){
		movieList_item=document.getElementById("movieList");
		movieList_item.innerHTML=null;
	};
	
	
	document.getElementById("load_movieList").addEventListener('click',function(){
		var url="/visualize_pilot/restex";
				
		//XMLHttpRequest 객체 생성
		var xhttp;
		if(window.XMLHttpRequest){
		    xhttp = new XMLHttpRequest();
		}else{
		    // IE5, IE6 경우
		    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		
		//서버로 보낸 요청에 대한 응답을 받았을 때
		xhttp.onreadystatechange = function(){
		     if (xhttp.readyState == 4){
		    	 if(xhttp.status == 200){
		    		 console.log(xhttp.responseText);
			          movieList=JSON.parse(xhttp.responseText);
			          
			          for (var i = 0; i < movieList.length; i++) {
							
							html += "<tr>"
			                        + "<td>" + movieList[i].movie_name + "</td>" 
			                        + "<td>" + movieList[i].director + "</td>"
			                        + "<td>" + movieList[i].type + "</td>"
			                        "</tr>";

						}
			          movieList_item.innerHTML=html; 
		    	 }
		          					
		     }else{
		    	 //오류
		    	  console.log('Error: '+xhttp.status);
		    	 // alert(xhttp.responseText);
		     }
		  }
		    
		//Ajax 서버요청
		beforeSend();
		xhttp.open('POST', url, true);
		xhttp.setRequestHeader('Content-Type', 'application/json');
		xhttp.send();
	});
}*/
