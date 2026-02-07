let nomeHeroi = "Will"
let experienciaHeroi = 8000
let rank


switch (true){
    case (experienciaHeroi <= 1000):
        rank = "Ferro"
    break
    case (experienciaHeroi >= 1001 && experienciaHeroi <= 2000):
        rank = "Bronze"
    break
    case (experienciaHeroi >= 2001 && experienciaHeroi <= 5000):
        rank = "Prata"
    break
    case (experienciaHeroi >= 5001 && experienciaHeroi <= 7000):
        rank = "Ouro"
    break
    case (experienciaHeroi >= 7001 && experienciaHeroi <= 8000):
        rank = "Platina"
    break
    case (experienciaHeroi >= 8001 && experienciaHeroi <= 9000):
        rank = "Ascendente"
    break
    case (experienciaHeroi >= 9001 && experienciaHeroi <= 10000):
        rank = "Imortal"
    break
    case (experienciaHeroi >= 10001 && experienciaHeroi <= 15000):
        rank = "Radiante"
    break
    case (experienciaHeroi >= 15001):
        rank = "ASPAS"
    break
}

if(rank === "ASPAS"){
    console.log(`O Héroi ${nomeHeroi} é o próprio ${rank}! GIRAAAA!!!`)
} else{
    console.log(`O Héroi ${nomeHeroi} está no rank de ${rank}!`)
}