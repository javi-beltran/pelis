
const pasar = document.getElementById("prueba");
const pasar1 = document.getElementById("e");
const fondo = document.querySelector(".sub");

//var bg=red;


let auxmin = 1;
let auxmax = 20;
let random = "";
random = Math.floor(Math.random() * (auxmax - auxmin + 1) + auxmin);
let PEPE = "";
let B_pelis = "";
let contadorDpelis = "";
switch (random) {
  case 1:
    B_pelis = document.getElementsByTagName("div");

    p = document.getElementsByTagName("p");
    sub = document.getElementsByClassName("sub");
    botngrande = document.getElementsByClassName("botngrande");
    for (var i = 0; i < B_pelis.length; i++) {
      B_pelis[i].style.borderColor = "blue";
    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "blue";

    }
    for (var i = 0; i < sub.length; i++) {
      sub[i].style.backgroundColor = "white";
    }
    for (var i = 0; i < botngrande.length; i++) {
      contadorDpelis++;
    }



    document.body.style.backgroundColor = "black";
    //document.style.font -family(Impact, Haettenschweiler, 'Arial Narrow Bold', sans - serif);
    //

    break;
  case 2:
    B_pelis = document.getElementsByTagName("div");
    p = document.getElementsByTagName("p");
    sub = document.getElementsByClassName("sub");
    botngrande = document.getElementsByClassName("botngrande");

    for (var i = 0; i < B_pelis.length; i++) {
      B_pelis[i].style.borderColor = "rgb(94, 252, 3)";

    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "rgb(94, 252, 3)";
    }

    for (var i = 0; i < sub.length; i++) {
      sub[i].style.backgroundColor = "#6c7059 ";
    }

    for (var i = 0; i < botngrande.length; i++) {
      contadorDpelis++;
    }
    document.body.style.backgroundColor = "black";
    //font - family(system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif);

    break;
  case 3:
    B_pelis = document.getElementsByTagName("div");
    p = document.getElementsByTagName("p");
    sub = document.getElementsByClassName("sub");
    botngrande = document.getElementsByClassName("botngrande");

    for (var i = 0; i < B_pelis.length; i++) {
      B_pelis[i].style.borderColor = "rgb(204, 154, 203)";

    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "rgb(204, 154, 203)";
    }

    for (var i = 0; i < sub.length; i++) {
      sub[i].style.backgroundColor = "rgb(21, 23, 64)";
    }

    for (var i = 0; i < botngrande.length; i++) {
      contadorDpelis++;
    }
    document.body.style.backgroundColor = "black";
    //font - family(system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif);
    break;
  case 4:

    B_pelis = document.getElementsByTagName("div");
    p = document.getElementsByTagName("p");
    sub = document.getElementsByClassName("sub");
    botngrande = document.getElementsByClassName("botngrande");

    for (var i = 0; i < B_pelis.length; i++) {
      B_pelis[i].style.borderColor = "rgb(147, 248, 168)";

    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "rgb(147, 248, 168)";
    }

    for (var i = 0; i < sub.length; i++) {
      sub[i].style.backgroundColor = "rgb(247, 147, 111)";
    }

    for (var i = 0; i < botngrande.length; i++) {
      contadorDpelis++;
    }
    document.body.style.backgroundColor = "black";
    //font - family(system - ui, -apple - system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans - serif);
    break;
  case 5:


    B_pelis = document.getElementsByTagName("div");
    p = document.getElementsByTagName("p");
    sub = document.getElementsByClassName("sub");
    botngrande = document.getElementsByClassName("botngrande");

    for (var i = 0; i < B_pelis.length; i++) {
      B_pelis[i].style.borderColor = "rgb(251, 228, 2)";

    }
    for (var i = 0; i < p.length; i++) {
      p[i].style.color = "rgb(251, 228, 2)";
    }

    for (var i = 0; i < sub.length; i++) {
      sub[i].style.backgroundColor = "rgb( 15, 94, 62)";
    }

    for (var i = 0; i < botngrande.length; i++) {
      contadorDpelis++;
    }
    document.body.style.backgroundColor = "black";
    break;
  case 6:
    

  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb( 181, 136, 11)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb(181, 136, 11)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb( 103, 14, 36)";
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "black";
    break;
  case 7:
    

  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(207, 209, 206)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb( 132, 136, 139)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(255, 251, 251)";
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "black";
    break;
  case 8:
    
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb( 206, 154, 202)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb( 206, 154, 202)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb( 74, 45, 93)";
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "black";
    break;
  case 9:
      
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb( 47, 186, 0)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb( 47, 186, 0)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = " rgb( 197, 33, 21)";
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "black";
    break;
  case 10:
      
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(197, 31, 15)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb(255, 255, 255)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = " rgb(69, 66, 169)"
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "black";
    break;
  case 11:
        
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(195, 181, 172)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "rgb(255, 255, 255)";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(179, 61, 33) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(70, 33, 17)";
    break;
  case 12:
   
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb( 26, 49, 93)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(217, 157, 195) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(230, 237, 133)";
  
    break;
  case 13:
      
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "black";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(250, 230, 232) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(85, 160, 163)";
  
    break;
  case 14:
       
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(137, 127, 115)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(158, 162, 191) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(255, 244, 242)";
  
    break;
  case 15:
        
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(86, 66, 75)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(164, 157, 198) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(223, 173, 202)";
  
    break;
  case 16:
         
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(black)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(206, 213, 229) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(250, 249, 247)";
  
    break;
  case 17:
    
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(167, 207, 206)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(249, 217, 222) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(243, 249, 249)";
  
    break;
  case 18:
    
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(151, 34, 104)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(251, 241, 242) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(246, 248, 245)";
  
    break;
  case 19:
    
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(89, 74, 107)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(250, 218, 233) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(245, 244, 250)";
  
    break;
  case 20:
    
  B_pelis = document.getElementsByTagName("div");
  p = document.getElementsByTagName("p");
  sub = document.getElementsByClassName("sub");
  botngrande = document.getElementsByClassName("botngrande");

  for (var i = 0; i < B_pelis.length; i++) {
    B_pelis[i].style.borderColor = "rgb(249, 213, 215)";

  }
  for (var i = 0; i < p.length; i++) {
    p[i].style.color = "black";
  }

  for (var i = 0; i < sub.length; i++) {
    sub[i].style.backgroundColor = "rgb(212, 221, 220) "
  }

  for (var i = 0; i < botngrande.length; i++) {
    contadorDpelis++;
  }
  document.body.style.backgroundColor = "rgb(95, 125, 113)";
  
    break;

}
//prueba.innerHTML = random;

//prueba.innerHTML = contadorDpelis[i];

let miParrafo = document.getElementById("elParrafo");





//miParrafo.classList.toggle("parrafo-azul");

//B_pelis.classList.toggle("B_pelis");
//contadorDpelis="lala";

document.addEventListener("keyup", e => {

  if (e.target.matches("#id_buscador")) {
    console.log()
    if (e.key === "Escape") e.target.value = ""
    if (e.key === "Enter") e.target.value = ""
    document.querySelectorAll(".B_pelis").forEach(fruta => {
      fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
        ? fruta.classList.remove("filtro")
        : fruta.classList.add("filtro")

      /* B_pelis = document.getElementsByTagName("div");
      
       */

      for (var i = 0; i < document.getElementsByTagName("img"); i++) {
        contadorDpelis++;
      }


      pasar.innerHTML = "pelicul as " + contadorDpelis;

    })
  }


})

