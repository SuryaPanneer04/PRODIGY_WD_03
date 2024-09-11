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

    //Checking player x win or not 

    if ((b1=='X'|| b1=='X') && (b2=='X'||b2=='X') && (b3=='X'||b3=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb1.style.color='red';
        btnb2.style.color='red';
        btnb3.style.color='red'; 
    }

    else if((b1=='X'||b1=='X') && (b4=='X'||b4=='X') && (b7='X'||b7=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb1.style.color='red';
        btnb4.style.color='red';
        btnb7.style.color='red';
    }
   
    else if((b1=='X'||b1=='X') && (b5=='X'||b5=='X')&& (b9='X'||b9=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;

        btnb1.style.color='red';
        btnb5.style.color='red';
        btnb9.style.color='red';
    }

    else if((b2=='X'||b2=='X') && (b5=='X'||b5=='X')&& (b8='X'||b8=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb1.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb7.disabled = true;
        btnb9.disabled = true;

        btnb2.style.color='red';
        btnb5.style.color='red';
        btnb8.style.color='red';
    }

    else if((b3=='X'||b3=='X') && (b6=='X'||b6=='X')&& (b9='X'||b9=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;

        btnb3.style.color='red';
        btnb6.style.color='red';
        btnb9.style.color='red';
    }
    else if((b3=='X'||b3=='X') && (b5=='X'||b5=='X')&& (b7='X'||b7=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb3.style.color='red';
        btnb5.style.color='red';
        btnb7.style.color='red';
    }
   
    else if((b4=='X'||b4=='X') && (b5=='X'||b5=='X')&& (b6='X'||b6=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb4.style.color='red';
        btnb5.style.color='red';
        btnb6.style.color='red';
    }

    else if((b9=='X'||b9=='X') && (b8=='X'||b8=='X') && (b7='X'||b7=='X')){
        document.getElementById('print').innerHTML="Player X win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;

        btnb9.style.color='red';
        btnb8.style.color='red';
        btnb7.style.color='red';
    }
       
       
    //checking for player O win or not



    else if ((b1=='O'|| b1=='O') && (b2=='O'||b2=='O') && (b3=='O'||b3=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;  
        btnb7.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb1.style.color='red';
        btnb2.style.color='red';
        btnb3.style.color='red';
    }

    else if((b1=='O'||b1=='O') && (b4=='O'||b4=='O')&& (b7='O'||b7=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb1.style.color='red';
        btnb4.style.color='red';
        btnb7.style.color='red';
    }
   
    else if((b1=='O'||b1=='O') && (b5=='O'||b5=='O')&& (b9='O'||b9=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;

        btnb1.style.color='red';
        btnb5.style.color='red';
        btnb9.style.color='red';
    }

    else if((b2=='O'||b2=='O') && (b5=='O'||b5=='O')&& (b8='O'||b8=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb1.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb7.disabled = true;
        btnb9.disabled = true;

        btnb2.style.color='red';
        btnb5.style.color='red';
        btnb8.style.color='red';
    }

    else if((b3=='O'||b3=='O') && (b6=='O'||b6=='O')&& (b9='O'||b9=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;

        btnb3.style.color='red';
        btnb6.style.color='red';
        btnb9.style.color='red';
    }
    else if((b3=='O'||b3=='O') && (b5=='O'||b5=='O')&& (b7='O'||b7=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb4.disabled = true;
        btnb6.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb3.style.color='red';
        btnb5.style.color='red';
        btnb7.style.color='red';
    }
   
    else if((b4=='O'||b4=='O') && (b5=='O'||b5=='O')&& (b6='O'||b6=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb7.disabled = true;
        btnb8.disabled = true;
        btnb9.disabled = true;

        btnb4.style.color='red';
        btnb5.style.color='red';
        btnb6.style.color='red';
    }

    else if((b7=='O'||b7=='O') && (b8=='O'||b8=='O')&& (b9='O'||b9=='O')){
        document.getElementById('print').innerHTML="Player O win";
        btnb1.disabled = true;
        btnb2.disabled = true;
        btnb3.disabled = true;
        btnb4.disabled = true;
        btnb5.disabled = true;
        btnb6.disabled = true;

        btnb7.style.color='red';
        btnb8.style.color='red';
        btnb9.style.color='red';
    }

    else if((b1=='X'||b1=='O') && (b2=='X'||b2=='O') && (b3=='X'||b3=='O') && (b4=='X'||b4=='O') && (b5=='X'||b5=='O')
    
     && (b6=='X'|| b6=="O") && (b7=='X'||b7=='O') && (b8=='X'||b8=='O') && (b9=='X'|| b9=='O')){

        document.getElementById('print').innerHTML="Match draw!"
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