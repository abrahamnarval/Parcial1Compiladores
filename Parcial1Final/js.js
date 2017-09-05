$(function(){
  $('#validar').on('click', function(event){
    event.preventDefault();
    $("p").remove();

  var sumador = 0;
  var estado = -1;
  var palabra = document.getElementById("expresion").value;
  var regl = new RegExp("[a-z]|[A-Z]");
  var regn = new RegExp("[1-9]");
  estado_0();
    switch(estado){
      case 0:
            estado = "Token no aceptado";
            break;
      case 1:
            estado = "Token aceptado";
            break;
      case -1:
            estado = "Error";
            break;
    }
  $("<p>"+estado+"</p>").appendTo("div");
  console.log(estado);


  function obtenerCaracter(){
    if(sumador < palabra.length){
      var caracter = palabra[sumador];
      sumador++;
      return caracter;
    }else{
      estado = 0;
      return -1;
    }
  }
  


  function estado_0(){
      var c = obtenerCaracter();
      if(regn.test(c)){
        estado_4();
      }
      
      switch(c){
          case '+': return estado_1(); 
          case '-': return estado_2();
          case '=': return estado_3();
          case '0': return -1;
          case 'p': return estado_8();
          case 'r': return estado_6();
          case 'i': return estado_6();
          case 'n': return estado_6();
          case 't': return estado_6();
          default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_1(){
      estado = 1;
      return 1;
  }
  
  function estado_2(){
      estado = 1;
      return 1;
  }
  
  function estado_3(){
      estado = 1;
      return 1;
  }
  
  function estado_4(){
      var c = obtenerCaracter();
     if(regn.test(c)){
        estado_4();
      }
      switch(c){
          case '+': return estado_5();
          case '-': return estado_5();
          case '=': return estado_5();
          case '0': return estado_4();
          case 'p': return estado_5();
          case 'r': return estado_5();
          case 'i': return estado_5();
          case 'n': return estado_5();
          case 't': return estado_5();
           default:
                if(regl.test(c)){
                  estado_5();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_5(){
      estado = 1;
      return 1;
  }
  
  function estado_6(){
      var c = obtenerCaracter();
     if(regn.test(c)){
        estado_7();
      }
      switch(c){
          case '+': return estado_7();
          case '-': return estado_7();
          case '=': return estado_7();
          case '0': return estado_7();
          case 'p': return estado_6();
          case 'r': return estado_6();
          case 'i': return estado_6();
          case 'n': return estado_6();
          case 't': return estado_6();
           default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_7(){
      estado = 1;
      return 1;
  }
  
  function estado_8(){
      var c = obtenerCaracter();
     if(regn.test(c)){
        estado_13();
      }
      switch(c){
          case '+': return estado_13();
          case '-': return estado_13();
          case '=': return estado_13();
          case '0': return estado_13();
          case 'p': return estado_6();
          case 'r': return estado_9();
          case 'i': return estado_6();
          case 'n': return estado_6();
          case 't': return estado_6();
           default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_9(){
      var c = obtenerCaracter();
      if(regn.test(c)){
        estado_13();
      }
      switch(c){
          case '+': return estado_13();
          case '-': return estado_13();
          case '=': return estado_13();
          case '0': return estado_13();
          case 'p': return estado_6();
          case 'r': return estado_6();
          case 'i': return estado_10();
          case 'n': return estado_6();
          case 't': return estado_6();
           default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_10(){
      var c = obtenerCaracter();
       if(regn.test(c)){
              estado_13();
            }
      switch(c){
          case '+': return estado_13();
          case '-': return estado_13();
          case '=': return estado_13();
          case '0': return estado_13();
          case 'p': return estado_6();
          case 'r': return estado_6();
          case 'i': return estado_6();
          case 'n': return estado_11();
          case 't': return estado_6();
           default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_11(){
      var c = obtenerCaracter();
   if(regn.test(c)){
          estado_13();
        }
      switch(c){
          case '+': return estado_13();
          case '-': return estado_13();
          case '=': return estado_13();
          case '0': return estado_13();
          case 'p': return estado_6();
          case 'r': return estado_6();
          case 'i': return estado_6();
          case 'n': return estado_6();
          case 't': return estado_12();
           default:
                if(regl.test(c)){
                  estado_6();
                }else{
                  if(estado != 0){
                  return -1;
                 }
                }
      }
  }
  
  function estado_12(){
      estado = 1;
      return 1;
  }
  
  function estado_13(){
      estado = 1;
      return 1;
  } 
 });
});
