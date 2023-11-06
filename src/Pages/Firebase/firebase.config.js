
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.envVITE_apiKey,
  authDomain: import.meta.envVITE_authDomain,
  projectId: import.meta.envVITE_projectId,
  storageBucket: import.meta.envVITE_storageBucket,
  messagingSenderId: import.meta.envVITE_messagingSenderId,
  appId: import.meta.envVITE_appId
};

const app = initializeApp(firebaseConfig);
export default app;
