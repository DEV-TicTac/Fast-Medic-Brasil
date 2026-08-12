// ==========================================================
// firebase-config.js
// Configuração de conexão com o Firebase
// ==========================================================

const firebaseConfig = {
  apiKey: "AIzaSyDXyVp_uKoUMDAAkEB-qrLCPxzt3FlYT1g",
  authDomain: "fast-medic-brasil.firebaseapp.com",
  projectId: "fast-medic-brasil",
  storageBucket: "fast-medic-brasil.firebasestorage.app",
  messagingSenderId: "372133778356",
  appId: "1:372133778356:web:e7ce189b0fd9ebac4618e1"
};

// Inicializa o Firebase (usado tanto pelo site público quanto pelo admin)
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// Observação: este projeto NÃO usa o Firebase Storage (exige upgrade de plano).
// As imagens dos documentos são salvas diretamente no Firestore, em formato
// comprimido (base64), dentro do próprio documento.
