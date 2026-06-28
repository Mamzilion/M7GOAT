import express from 'express';
import cors from 'cors';
import { supabase } from './supabaseClient.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // Permet à Express de lire le JSON

// Route de test
app.get('/', (req, res) => {
    res.json({ message: "L'API de notre Influenceur Capillaire est en ligne ! 🚀" });
});

app.listen(PORT, () => {
    console.log(`📡 Serveur Node.js démarré sur : http://localhost:${PORT}`);
});