import { createClient } from '@supabase/supabase-js'


const supabase = createClient('https://tmnkllhynyntuycpqixb.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtbmtsbGh5bnludHV5Y3BxaXhiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTk4OTQ4MDcsImV4cCI6MTk3NTQ3MDgwN30.MXdjil6m_eJqeHmQP-cv41CwI8UN5ZWLfZFrNdBTQZo')

export {
    supabase
}