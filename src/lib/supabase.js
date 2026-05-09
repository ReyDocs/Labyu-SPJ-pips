import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://iotbqbhjboqhreattuyo.supabase.co";
const SUPABASE_ANON_KEY =
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlvdGJxYmhqYm9xaHJlYXR0dXlvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMTczODAsImV4cCI6MjA5Mzg5MzM4MH0.BceY9JL9Lmf2jDTPxexuaqBLKy0X0se5mA3K-rYP2Kw";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
