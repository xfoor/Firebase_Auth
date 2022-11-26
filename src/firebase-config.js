// firabase ni chaqirish
import { initializeApp } from "firebase/app";
// database ni firebase bilan boshlash
import { getFirestore } from "firebase/firestore";
// ro'yhattan o'tish oynasini firebase bilan boshlash
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyArWa_YbAl66-KbtBSw6_7kS4bmxgg6uP4",
  authDomain: "blog-web-site-a9d59.firebaseapp.com",
  projectId: "blog-web-site-a9d59",
  storageBucket: "blog-web-site-a9d59.appspot.com",
  messagingSenderId: "543960459187",
  appId: "1:543960459187:web:6700c2a9719abe9b008dc6",
};

// Firbaseni ishga tushirish.
const app = initializeApp(firebaseConfig);

// database ni ishga tushrish
export const db = getFirestore(app);
// autentifikatsiyani ishga tushirish yani ro'yhatdan o'tish oynasini ishga tushurish.
export const auth = getAuth(app);
auth.languageCode = "it";
// Google orqali ro'yhatga kirishni ishga tushurish
export const googleProvider = new GoogleAuthProvider();
// GitHub orqali ro'yhatga kirishni ishga tushurish
export const gitHubProvider = new GithubAuthProvider();
