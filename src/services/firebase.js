import { getFirestore, collection, getDocs, doc, getDoc, query, where } from "firebase/firestore"
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


export default db;


