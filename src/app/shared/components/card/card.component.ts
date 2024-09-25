import { Component, computed, input } from '@angular/core';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { Book } from '../../interfaces/book';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  book = input.required<Book>();

  bookTitle = computed(() => this.book().title);
  bookAuthor = computed(() => this.book().author);
}
