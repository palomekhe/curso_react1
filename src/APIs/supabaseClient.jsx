import { createClient } from "@supabase/supabase-js";

const supabaseUrl = 'https://czjrjamqcrkluthfsicw.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN6anJqYW1xY3JrbHV0aGZzaWN3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA4Nzk5NDksImV4cCI6MjA3NjQ1NTk0OX0.78MjM_z2f6qu89RzSErGYESV_nvNWc22-G_kDoKVZEc';
export const supabase = createClient(supabaseUrl, supabaseKey);