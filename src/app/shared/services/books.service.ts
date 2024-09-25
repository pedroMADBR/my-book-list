import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Book } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  httpClient = inject(HttpClient);

  getAll() {
    return this.httpClient.get<Book[]>('/api/books');
  }
  
}
