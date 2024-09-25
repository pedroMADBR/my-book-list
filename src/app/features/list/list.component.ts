
import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/interfaces/book';
import { MatCardModule } from "@angular/material/card";
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, MatIconModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  books: Book[] = [];

  booksService = inject(BooksService);

  ngOnInit() {
    this.booksService.getAll().subscribe((books) => {
      this.books = books;
    });
  }
}
