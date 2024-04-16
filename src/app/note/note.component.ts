import { Component, Input } from '@angular/core';
import { Note } from "../note";

@Component({
  selector: 'app-note',
  standalone: true,
  imports: [],
  template: `
    <section>
      <input type="checkbox" checked="false" />
      <p>{{ note }}</p>
    </section>
  `,
  styleUrl: './note.component.css'
})
export class NoteComponent {

  @Input() note!: Note;
  // TODO will need to iterate on notes to make them appear on the page

}
