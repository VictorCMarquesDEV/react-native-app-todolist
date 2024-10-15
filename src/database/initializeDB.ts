import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://npigntvaohmpbyqubhjf.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5waWdudHZhb2htcGJ5cXViaGpmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg5NjI2MzgsImV4cCI6MjA0NDUzODYzOH0.c8DtjsxjjSIZCdL9N4bjpENnp4d78IcHQzvDPVRFpJg"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})