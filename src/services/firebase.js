import { getFirestore, collection, getDocs, doc, getDoc, query, where, addDoc } from "firebase/firestore"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBUXGaqN7OcAQvPghy5bbBAgbZLzGz7UWw",
    authDomain: "reactjs34855.firebaseapp.com",
    projectId: "reactjs34855",
    storageBucket: "reactjs34855.appspot.com",
    messagingSenderId: "492093126280",
    appId: "1:492093126280:web:9481b24d58fd5f280ed13d"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productsRef = collection(db, "products");

export async function getProducts(){
    const snapshot = await getDocs(productsRef);

    const mangas = snapshot.docs.map((e) => {
        let manga = e.data()
        manga.id = e.id;

        return manga;
    });

    return mangas;
};

export async function getManga(idParams){
    const docRef = doc(productsRef, idParams);
    const snapshot = await getDoc(docRef)

    return {...snapshot.data(), id: snapshot.id};
};

export async function getMangaByCategory(categoryId){
    const q = query(productsRef, where("category", "==" , categoryId));
    const snapshot = await getDocs(q);
    const mangas = snapshot.docs.map((e) => {
        let manga = e.data()
        manga.id = e.id;

        return manga;
    });

    return mangas;
}

export async function createOrder(order){
    const orderRef = collection(db, "order");

    let respuesta = await addDoc(orderRef, order);
    console.log(respuesta, respuesta.id);
    return respuesta.id;
}

export async function exportArray(){
    const products = [
        {id: 1, title: "DEMON SLAYER - 01", category: "shonen", stock: 12,price:1000, img:"../../imgs/demonslayer-tomo1.jpg", about:"Tanjirou Kamado es un chico inteligente y de buen corazón que vive con su familia y gana dinero vendiendo carbón. Todo cambia cuando su familia es atacada y asesinada por un demonio. Tanjirou y su hermana Nezuko son los únicos sobrevivientes del incidente, aunque Nezuko fue convertida en demonio."},
        {id: 2, title: "CHAINSAW-MAN - 01", category: "shonen", stock: 7,price:1250, img:"../../imgs/chainsawman-tomo1.webp", about:"La historia de un hombre simple con sueños simples, ahogándose bajo una montaña de deudas. Pero su triste vida se pone del revés un día cuando es traicionado por alguien en quien confiaba. Ahora, con el poder de un demonio dentro de él, Denhi se ha convertido en un nuevo hombre ¡Chainsaw Man!"},
        {id: 3, title: "KAGUYA-SAMA:LOVE IS WAR - 01", category: "seinen",price:1300, stock: 6, img:"../../imgs/kaguyasama-tomo1.webp", about:"Kaguya Shinomiya y Miyuki Shirogane son dos chicos prodigio que controlan el consejo de estudiantes de su prestigiosa academia, lo que las convierte en la crème de la crème de la élite. Ambos serían la pareja perfecta, si no fuera por su orgullo y narcisismo."},
        {id: 4, title: "MY HERO ACADEMIA - 01", category: "shonen", stock: 10,price:1200, img:"../../imgs/myheroacademia-tomo1.webp", about:"Izuku Midoriya, un chico sin poderes que, aunque nace en una sociedad en la que tener poderes especiales es de lo más normal, tiene su propio sueño de convertirse en un héroe que salve a las personas con una sonrisa en el rostro."},
        {id: 5, title: "SPY X FAMILY - 01", category: "shonen", stock: 17, price:1500, img:"../../imgs/spyxfamily-tomo1.webp", about:"El agente secreto Twilight debe cumplir con la misión más desafiante en su carrera, Operation Strinx. Como parte de la mision él deberá casarse y tener una hija para poder acercarse a su objectivo, Donovan Desmond. Twilight toma el alias de Loid forger y adopta a una niña huérfana de nombre Anya, una telepata, y eventualmente casandose con Yor Briar, una asesina, sin embargo ellos esconden su identidad del otro sin sospechar."},
        {id: 6, title: "KOMI-SAN NO PUEDE COMUNICARSE - 01", category: "seinen", stock: 4, price:2500, img:"../../imgs/komisan-tomo1.jpg", about:"Komi-san es la chica hermosa y admirable de la que nadie puede es capaz de apartar la vista. Casi toda la escuela la ve como la belleza fría que está fuera de su alcance, pero Tadano Hitohito sabe la verdad: ella es realmente mala para comunicarse con los demás."},
    ]

    for (let item of products){
        delete item.id;
        addDoc(collection(db, "products"), item);
    }
    
}

export default db;
