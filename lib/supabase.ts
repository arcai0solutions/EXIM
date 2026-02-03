import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Create client only if URL is available (runtime only, not build time)
export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: true,
    },
});

// Helper to check if Supabase is configured
export const isSupabaseConfigured = () => {
    return !!supabaseUrl && !!supabaseKey;
};
