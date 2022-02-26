import { Component, OnInit } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { SupabaseService } from 'src/app/services/supabase.service';

@Component({
  selector: 'app-note-input',
  templateUrl: './note-input.component.html',
  styles: [
  ]
})
export class NoteInputComponent implements OnInit {

  noteForm!: FormGroup;

  constructor(private fb: FormBuilder, private _supabaseService: SupabaseService) { }

  ngOnInit(): void {
    this.noteForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', []]
    })

    this.noteForm.valueChanges.subscribe()
  }

  save() {
    if (this.noteForm.valid) {
      let title = this.noteForm.value.title
      let content = this.noteForm.value.content
    this.insertNote(title, content).then(() => window.location.reload())
    }
  }

  async insertNote(title: string, content: string) {
    await this._supabaseService.insertNote(title, content)
  }

}
