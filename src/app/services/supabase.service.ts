import { Injectable } from '@angular/core';
import { AuthChangeEvent, createClient, Session, SupabaseClient } from '@supabase/supabase-js';
import { environment } from "../environment";

export interface Note {
  title: string;
  content: string;
  dateCreated: Date;
}

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);
  }

  get user() {
    return this.supabase.auth.user();
  }

  get session() {
    return this.supabase.auth.session();
  }

  async insertNote(title: string, content: string) {
    await this.supabase
        .from('notes')
        .insert([
          {title: title, content: content}
        ])
  }

  get notes () {
    return this.supabase
        .from('notes')
        .select('id, title, content, created_at')
  }

  async deleteNote(id: number) {
    const { data, error } = await this.supabase
    .from('notes')
    .delete()
    .match({ id: id })
  }

  

}
