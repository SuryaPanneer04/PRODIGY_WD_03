function check(){
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
    
    
    
}


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

    if((b1,b2,b3) && b1==b2 && b2==b3){
    //if(b1==b2 && b2==b3){
         successfully(b1,b2,b3);
         console.log('I am here Sundar');
     } 
      else if((b1,b4,b7) && b1==b4 && b4==b7){
        console.log('I am here Surya');
        successfully(b1,b4,b7);
      } 
      
      else if((b1,b5,b9)&& b1==b5 && b5==b9) {
        console.log('I am here Priya');
        successfully(b1,b5,b9);
        
    }
    else if((b2,b5,b8)&&b2==b5 && b5==b8) {
        console.log('I am here Murugeswari');
        successfully(b2,b5,b8);
        }
    else if((b3,b6,b9)&&b3==b6 && b6==b9) {
        console.log('I am here Suganya');
        successfully(b3,b6,b9);
        } 
    else if((b3,b5,b7)&&b3==b5 && b5==b7) {
        console.log('I am here Meenakshi');
        successfully(b3,b5,b7);
        }
    else if((b4,b5,b6)&&b4==b5 && b5==b6){
         console.log('I am here Mithran');
        successfully(b4,b5,b6);
        }
      
    else if((b7,b8,b9)&&b7==b8 && b8==b9){
        console.log('I am here Naveen');
        successfully(b7,b8,b9);    
     }   
     else if(b1,b2,b3,b4,b5,b6,b7,b8,b9){
        document.getElementById('print').innerHTML="Match draw";
     } 
}


function successfully(v1,v2,v3){

    if(v1=='X' && v2=='X' && v3=='X'){
        document.getElementById('print').innerHTML="Player X win"; 
    }
    else if(v1=='O' && v2=='O' && v3 =='O'){
        document.getElementById('print').innerHTML="Player O win";
    } 
   
}



function myfunction2(){
    location.reload();
    b1=b2=b3=b4=b5=b6=b7=b8=b9='';
}



//check the person play
function check(){
    if(flag==1){
        document.getElementById('print').innerHTML="Player X Turn";
    }
    else{
        document.getElementById('print').innerHTML="Player O Turn";
    }
}

//person input functions

flag = 1;

function myfunction3(){
    
    if(flag==1){
        document.getElementById("b1").value = "X"; 
        document.getElementById("b1").style.backgroundColor='green';
        flag = 0;
      
    }
    else{
        document.getElementById("b1").value = "O"; 
        document.getElementById("b1").disabled = true; 
        flag = 1;  
    }
    check();
    myfunction1();
    
}

function myfunction4(){
    if(flag==1){
        document.getElementById("b2").value = "X"; 
        document.getElementById("b2").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b2").value = "O"; 
        document.getElementById("b2").disabled = true; 
        flag = 1;
       

    }  
    check();
    myfunction1();
}

function myfunction5(){
    if(flag==1){
        document.getElementById("b3").value = "X"; 
        document.getElementById("b3").style.backgroundColor='green';
        flag = 0;
        

    }
    else{
        document.getElementById("b3").value = "O"; 
        document.getElementById("b3").disabled = true; 
        flag = 1;
    }  
    check();
    myfunction1();
}

function myfunction6(){
    if(flag==1){
        document.getElementById("b4").value = "X"; 
        document.getElementById("b4").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b4").value = "O"; 
        document.getElementById("b4").disabled = true; 
        flag = 1;
    }
    check();
    myfunction1();
}

function myfunction7(){
    if(flag==1){
        document.getElementById("b5").value = "X"; 
        document.getElementById("b5").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b5").value = "O"; 
        document.getElementById("b5").disabled = true; 
        flag = 1;
    }
    check();
    myfunction1();
}

function myfunction8(){
    if(flag==1){
        document.getElementById("b6").value = "X"; 
        document.getElementById("b6").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b6").value = "O"; 
        document.getElementById("b6").disabled = true; 
        flag = 1;
    }  
    check();
    myfunction1();
}

function myfunction9(){
    if(flag==1){
        document.getElementById("b7").value = "X"; 
        document.getElementById("b7").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b7").value = "O"; 
        document.getElementById("b7").disabled = true; 
        flag = 1;
    } 
    check();
    myfunction1();
} 

function myfunction10(){
    if(flag==1){
        document.getElementById("b8").value = "X"; 
        document.getElementById("b8").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b8").value = "O"; 
        document.getElementById("b8").disabled = true; 
        flag = 1;
    }  
    check();
    myfunction1();
}


function myfunction11(){
    if(flag==1){
        document.getElementById("b9").value = "X"; 
        document.getElementById("b9").style.backgroundColor='green';
        flag = 0;
    }
    else{
        document.getElementById("b9").value = "O"; 
        document.getElementById("b9").disabled = true; 
        flag = 1;
    }  
    check();
    myfunction1();
}
