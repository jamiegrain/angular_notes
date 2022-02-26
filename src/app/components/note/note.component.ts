import { Component, OnInit, Input } from '@angular/core';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styles: [
  ]
})
export class NoteComponent implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() id!: string;
 
  constructor(private _supabase: SupabaseService) { }

  ngOnInit(): void {
  }

  deleteNote() {
    console.log(Number(this.id))
    this._supabase.deleteNote(Number(this.id))
    window.location.reload()
  }

}
