function myfunction1(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;

     b1=document.getElementById("b1").value;
     b2=document.getElementById("b2").value;
     b3=document.getElementById("b3").value;
     b4=document.getElementById("b4").value;
     b5=document.getElementById("b5").value;
     b6=document.getElementById("b6").value;
     b7=document.getElementById("b7").value;
     b8=document.getElementById("b8").value;
     b9=document.getElementById("b9").value;

     var btnb1,btnb2,btnb3,btnb4,btnb5,btnb6,btnb7,btnb8,btnb9;

     btnb1=document.getElementById("b1");
     btnb2=document.getElementById("b2");
     btnb3=document.getElementById("b3");
     btnb4=document.getElementById("b4");
     btnb5=document.getElementById("b5");
     btnb6=document.getElementById("b6");
     btnb7=document.getElementById("b7");
     btnb8=document.getElementById("b8");
     btnb9=document.getElementById("b9");
     
     if (b1==b2 && b2==b3){
         successfully(b1,b2,b3);  
     } 
      else if(b1==b4 && b4==b7){
        successfully(b1,b4,b7);
      } 
      
      else if(b1==b5 && b5==b9) {
        successfully(b1,b5,b9);
    }
    else if (b2==b5 && b5==b8) {
        successfully(b2,b5,b8);
        }
    else if (b3==b6 && b6==b9) {
        successfully(b3,b6,b9);
        } 
    else if (b3==b5 && b5==b7) {
        successfully(b3,b5,b7);
        }
    else if(b4==b5 && b5==b6){
        successfully(b4,b5,b6);
        }
      
    else if (b7==b8 && b8==b9){
        successfully(b7,b8,b9);    
     }   
     else if(b1,b2,b3,b4,b5,b6,b7,b8,b9){
        document.getElementById('print').innerHTML="Match draw";
     } 
}


function successfully(v1,v2,v3){

    if(v1=='X' && v2=='X' && v3=='X'){
        document.getElementById('print').innerHTML="Player X win"; 
        document.ATTRIBUTE_NODE("input").disabled=true;
    }
    else if(v1=='O' && v2=='O' && v3 =='O'){
        document.getElementById('print').innerHTML="Player O win";
        document.ATTRIBUTE_NODE("input").disabled=true;
    }
    else{
        if(flag==1){
            document.getElementById('print').innerHTML="Player O Turn";
        }
        else{
            document.getElementById('print').innerHTML="Player X Turn";
        }
    }
  
}



function myfunction2(){
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9='';
}

flag = 1;

function myfunction3(){
    if(flag==1){
        document.getElementById("b1").value = "X"; 
        // document.getElementById("b1").disabled = true; 
        document.getElementById("b1").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b1").value = "O"; 
        document.getElementById("b1").disabled = true; 
        flag = 1;
    }
}
function myfunction4(){
    if(flag==1){
        document.getElementById("b2").value = "X"; 
        // document.getElementById("b2").disabled = true; 
        document.getElementById("b2").style.backgroundColor='green';

        flag = 0;
    }
    else{
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1;
    }  
}

function myfunction5(){
    if(flag==1){
        document.getElementById("b3").value = "X"; 
        // document.getElementById("b3").disabled = true; 
        document.getElementById("b3").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1;
    }  
}

function myfunction6(){
    if(flag==1){
        document.getElementById("b4").value = "X"; 
        // document.getElementById("b4").disabled = true; 
        document.getElementById("b4").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1;
    }  
}

function myfunction7(){
    if(flag==1){
        document.getElementById("b5").value = "X"; 
        // document.getElementById("b5").disabled = true; 
        document.getElementById("b5").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1;
    }  
}

function myfunction8(){
    if(flag==1){
        document.getElementById("b6").value = "X"; 
        // document.getElementById("b6").disabled = true; 
        document.getElementById("b6").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1;
    }  
}

function myfunction9(){
    if(flag==1){
        document.getElementById("b7").value = "X"; 
        // document.getElementById("b7").disabled = true;
        document.getElementById("b7").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1;
    }  
}

function myfunction10(){
    if(flag==1){
        document.getElementById("b8").value = "X"; 
        // document.getElementById("b8").disabled = true; 
        document.getElementById("b8").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1;
    }  
}


function myfunction11(){
    if(flag==1){
        document.getElementById("b9").value = "X"; 
        // document.getElementById("b9").disabled = true; 
        document.getElementById("b9").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1;
    }  
}
