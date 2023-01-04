const database = [
    {id: 1, title: "DEMON SLAYER - 01", category: "shonen", stock: 12,price:1000, img:"../../imgs/demonslayer-tomo1.jpg"},
    {id: 2, title: "CHAINSAW-MAN - 01", category: "shonen", stock: 7,price:1250, img:"../../imgs/chainsawman-tomo1.webp", about:"La historia de un hombre simple con sueños simples, ahogándose bajo una montaña de deudas. Pero su triste vida se pone del revés un día cuando es traicionado por alguien en quien confiaba. Ahora, con el poder de un demonio dentro de él, Denhi se ha convertido en un nuevo hombre ¡Chainsaw Man!"},
    {id: 3, title: "KAGUYA-SAMA:LOVE IS WAR - 01", category: "seinen",price:1300, stock: 6, img:"../../imgs/kaguyasama-tomo1.webp"},
    {id: 4, title: "MY HERO ACADEMIA - 01", category: "shonen", stock: 10,price:1200, img:"../../imgs/myheroacademia-tomo1.webp"},
    {id: 5, title: "SPY X FAMILY - 01", category: "shonen", stock: 17, price:1500, img:"../../imgs/spyxfamily-tomo1.webp"},
    {id: 6, title: "KOMI-SAN NO PUEDE COMUNICARSE - 01", category: "seinen", stock: 4, price:2500, img:"../../imgs/komisan-tomo1.jpg"},
]

const getProducts = () => new Promise((resolve) => {
    setTimeout(() => {
        resolve(database)
    }, 2000);
})

const getManga = () => new Promise ((resolve) => {
    setTimeout(() => {
        resolve(database[1])
    }, 2000);
})

export default getProducts;

export {getManga}