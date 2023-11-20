import { initializeApp } from "firebase/app";
import { collection, getDocs } from "firebase/firestore";
import {getFirestore} from "firebase/firestore";
import { query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCL-uY3y8ydua18UcE0b68OjemV5Vi096E",
  authDomain: "limon-13cbe.firebaseapp.com",
  projectId: "limon-13cbe",
  storageBucket: "limon-13cbe.appspot.com",
  messagingSenderId: "370105529002",
  appId: "1:370105529002:web:783655f75496e14f0396d3",
  measurementId: "G-KXZFTN5Z3E"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const getProductos = async () => {
  const productosCollection = collection(db, 'productos');
  const productosSnapshot = await getDocs(productosCollection);
  const productosList = productosSnapshot.docs.map(doc => {
    const docData = doc.data();
    return {
      id: doc.id,
      ...docData
    };
  });
  return productosList;
};

export const getCategoria = async (idCat) => {
  try {
    const categoriaCollection = collection(db, 'categorias');
    const q = query(categoriaCollection, where("id", "==", idCat));
    const categoriaSnapshot = await getDocs(q);
    const categoriaList = categoriaSnapshot.docs.map(doc => doc.data());
    return categoriaList;
  } catch (error) {
    console.error("Error fetching category:", error);
  }
};

export const getProductosPorCategoria = async (idCat) => {
  try {
    const productosCollection = collection(db, 'productos');
    const q = query(productosCollection, where("idCat", "==", idCat));
    const productosSnapshot = await getDocs(q);
    const productosList = productosSnapshot.docs.map(doc => {
      return {
        id: doc.id,
        ...doc.data()
      };
    });
    return productosList;
  } catch (error) {
    console.error("Error fetching products by category:", error);
  }
};