
import { createClient } from '@supabase/supabase-js';

// Pastikan Anda telah mengatur variabel lingkungan ini di file .env
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
