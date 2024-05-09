var btnValue=document.getElementsByClassName('btn');
for(var i=0; i<btnValue.length; i++){
    btnValue[i].onclick= function(){
      var clickValue= this.value;
       console.log(clickValue)
      var title=document.getElementById('title');
        title.className = clickValue; 
        console.log(title)
     
   }
 }
   function darkMode(){
    var section=document.getElementById('section');
   var mode= section.style.backgroundColor; 
   if(mode == 'black'){
      section.style.backgroundColor='#FCE5CD';
   }
   else{
       section.style.backgroundColor='black';
   }
}

