// src/supabase.js
import { createClient } from '@supabase/supabase-js'


const supabaseUrl = 'https://dzapnkoytpohpnoznjdu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR6YXBua295dHBvaHBub3puamR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU2NjgyNjksImV4cCI6MjA2MTI0NDI2OX0.yrUOf3euTXMVzz9iYLSRkqAc413uCB11ZsYONJrJ1OI'     

// Make sure these variables are properly loaded
if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase environment variables. Check your .env file.')
  }
  
export const supabase = createClient(supabaseUrl, supabaseKey)
