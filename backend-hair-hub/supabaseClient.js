import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';

// On charge les variables du fichier .env
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_KEY;

// Sécurité : on vérifie que les clés sont bien chargées
if (!supabaseUrl || !supabaseKey) {
    console.error("❌ Erreur : URL ou Clé Supabase manquante dans le fichier .env !");
    process.exit(1);
}

// On initialise le client Supabase
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log("⚡ Connexion à Supabase configurée avec succès !");