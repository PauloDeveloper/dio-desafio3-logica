
class Heroi {
    
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      let ataque;
  
      switch (this.tipo) {
        case "mago":
          ataque = "usou magia";
          break;
        case "guerreiro":
          ataque = "usou espada";
          break;
        case "monge":
          ataque = "usou artes marciais";
          break;
        case "ninja":
          ataque = "usou shuriken";
          break;
        default:
          ataque = "não possui um ataque definido";
      }
  
      console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
  }
  
  const heroi1 = new Heroi("Naruto", 18, "ninja");
  const heroi2 = new Heroi("Overlord", 300, "mago");
  const heroi3 = new Heroi("Gazef Stronoff", 40, "guerreiro");
  
  heroi1.atacar(); 
  heroi2.atacar(); 
  heroi3.atacar(); 
  