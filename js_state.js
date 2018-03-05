var getData = document.getElementById("stateTable");
var btn = document.getElementById("btn");
document.getElementById("count").innerHTML = 0;
document.getElementById("myInput").style.display = 'none';

btn.addEventListener("click" , function(){
     var myRequest = new XMLHttpRequest();
     myRequest.open('GET','https://ishika20.github.io/linkedin/states.json');
     myRequest.onload = function(){
     var myData = JSON.parse(myRequest.responseText);
	 console.log(myData);
     renderHTML(myData);
     };
     myRequest.send();
});
 function renderHTML(data){
	 var myString = "";
	 var i;
	 for(i = 0;i < data.length;i++)
	 {
		 myString += "<tr><td>" + data[i].State + "</td><td>" + data[i].Capital + "</td></tr>";
     }
    if(i == data.length){
		document.getElementById("count").innerHTML = i;
		document.getElementById("btn").style.display = 'none';
		document.getElementById("myInput").style.display = 'block';
	}
	getData.insertAdjacentHTML('beforeend' , myString);
 }
 
 function searchState(){
	 var input, state, table, i, tr, count = 0;
	 input = document.getElementById("myInput");
	 state = input.value.toUpperCase();
	 table = document.getElementById("stateTable");
	 tr = table.getElementsByTagName("tr");
	 for( i = 0;i < tr.length;i++)
	 {
		 var td1 = tr[i].getElementsByTagName("td")[0];
		 var td2 = tr[i].getElementsByTagName("td")[1];
		 if(td1+td2){
			 if((td1.innerHTML.toUpperCase().indexOf(state)+td2.innerHTML.toUpperCase().indexOf(state))>-2)
				{	
         			count++;
			        tr[i].style.display = "";
				}
		 else
		 {
			 tr[i].style.display = 'none';
		 }
		 document.getElementById("count").innerHTML = count;
	   }
    }
 }
  
