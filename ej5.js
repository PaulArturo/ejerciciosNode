const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Options {
    static Piedra = {
      name: "Piedra",
      beat: (rival)=>{
        if(rival == Options.Papel){
            return false;
        }else{
            return true;
        }
      },
    };
    static Papel = {
      name: "Papel",
      beat: (rival)=>{
        if(rival == Options.Tijeras){
            return false;
        }else{
            return true;
        }
      },
    };
    static Tijeras = {
      name: "Tijeras",
      beat: (rival)=>{
        if(rival == Options.Piedra){
            return false;
        }else{
            return true;
        }
      },
    };
}

function readInt(){
    return new Promise((resolve, reject)=>{
        rl.question('Escribe un número entero: ', (respuesta) => {
            let numero = parseInt(respuesta, 10);
            if (!isNaN(numero)) {
              resolve(numero); // Resuelve la promesa con el número
            } else {
              reject(new Error('No ingresaste un número entero válido.')); // Rechaza la promesa en caso de entrada no válida
            }
        })
      }
    )
}

function select(option){
  switch (option) {
    case(1):
      return Options.Piedra;
    case(2):
      return Options.Papel;
    case(3):
      return Options.Tijeras;
  }  
}

async function Main (){

    let player1;
    let player2;
    
    console.log("Player 1 select : 1)piedra 2)papel 3)tijera ");
    
    player1 = select(await readInt());

    console.log("Player 2 select : 1)piedra 2)papel 3)tijera ");

    player2 = select(await readInt());

    if(player1.beat(player2)){
      console.log("Player 1 win");
    }else if(player2.beat(player1)){
      console.log("Player 2 win");
    }else{
      console.log("Draw");
    }
    rl.close();
}


Main();