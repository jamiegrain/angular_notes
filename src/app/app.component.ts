import { Component } from '@angular/core';
import { createClient } from '@supabase/supabase-js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: []
})
export class AppComponent {
  title = 'Notes';
}
