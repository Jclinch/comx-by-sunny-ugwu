// app/actions/supabaseActions.ts
"use server";

import { supabase } from "@/lib/supabaseClient";

export async function getUsers() {
  const { data, error } = await supabase.from("users").select("*");

  if (error) {
    console.error("Error fetching users:", error.message);
    return null;
  }

  return data;
}
