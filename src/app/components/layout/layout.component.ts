import { getLocaleMonthNames } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NoteInputComponent } from '../../components/note-input/note-input.component';
import { MatCardModule } from '@angular/material/card';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { SupabaseService, Note } from 'src/app/services/supabase.service';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styles: [
  ]
})
export class LayoutComponent implements OnInit {

  notes!: any[] | null

  constructor(
    private _supabaseService: SupabaseService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getNotes().then(data => {
      this.notes = data
      this.notes?.sort((note1, note2) => {
        if (note2.created_at < note1.created_at) {
          return -1
        }
        else {
          return 1
        }
      })
    })
  }

  async getNotes() {
    let {data: notes, error } = await this._supabaseService.notes
    return notes
  }

  newNote() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.autoFocus = true;

    this.dialog.open(NoteInputComponent, dialogConfig);
  }

}
