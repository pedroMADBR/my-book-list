
import { Component, inject } from '@angular/core';
import { BooksService } from '../../shared/services/books.service';
import { Book } from '../../shared/interfaces/book';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [],
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
