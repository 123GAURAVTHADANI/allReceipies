import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCRFM40DsycIUrmPKorYDq95O0kFF3uBm0",
  projectId: "allreceipes-8b5e1",
  messagingSenderId: "404022960066",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
