let nome = "Alelisan";
let experiencia = Math.floor(Math.random() * 10000);
let nivel



switch (true) {
    case experiencia<1000:
      nivel = "Ferro";
      break;
    case (experiencia>1001)&&(experiencia<2000) :
      nivel = "Bronze";
      break;
    case (experiencia>2001)&&(experiencia<5000) :
      nivel = "Prata";
      break;
    case (experiencia>5001)&&(experiencia<7000) :
      nivel = "Ouro";
      break;
    case (experiencia>7001)&&(experiencia<8000) :
      nivel = "Platina"
      break;
    case (experiencia>8001)&&(experiencia<9000) :
      nivel = "Ascendente"
      break;
    case (experiencia>9001)&&(experiencia<10000) :
      nivel = "Imortal"
      break;
    case experiencia<10001 :
      nivel = "Radiante"
      break;
    //default:
    //  console.log("Final de semana! Descanse e divirta-se!");
  }

 
console.log("O Herói de nome " + nome + " esta com experiencia " + experiencia + " e está no nível: " + nivel)