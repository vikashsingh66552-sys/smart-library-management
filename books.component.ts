import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book { title: string; author: string; category: string; code: string; color: string; available: boolean; }

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="page-hero">
      <div class="eyebrow"><span class="eyebrow-dot"></span> THE COLLECTION</div>
      <h1>Books for every<br><em>curious mind.</em></h1>
      <p>Search the shelves, find a new perspective, and choose what you want to read next.</p>
    </section>
    <section class="catalog-wrap">
      <div class="catalog-toolbar">
        <div><h2>Browse books</h2><p>{{ filteredBooks.length }} titles in this collection</p></div>
        <input class="search-input" type="search" [(ngModel)]="searchText" placeholder="Search title, author or category..." aria-label="Search books">
      </div>
      <div class="filter-row">
        <button class="filter-chip" [class.selected]="activeCategory === 'All'" (click)="activeCategory='All'">All books</button>
        <button class="filter-chip" [class.selected]="activeCategory === 'Technology'" (click)="activeCategory='Technology'">Technology</button>
        <button class="filter-chip" [class.selected]="activeCategory === 'Fiction'" (click)="activeCategory='Fiction'">Fiction</button>
        <button class="filter-chip" [class.selected]="activeCategory === 'Personal Growth'" (click)="activeCategory='Personal Growth'">Personal growth</button>
      </div>
      <div class="book-grid">
        @for (book of filteredBooks; track book.code) {
          <article class="book-card">
            <div class="cover" [class]="'cover ' + book.color"><span class="cover-label">{{ book.category }}</span><div class="cover-title">{{ book.title }}</div><span class="cover-author">{{ book.author }}</span><span class="cover-seal">SL · LIBRARY</span></div>
            <div class="book-meta"><span class="book-code">{{ book.code }}</span><span class="availability" [class.unavailable]="!book.available"><i></i>{{ book.available ? 'Available' : 'On loan' }}</span></div>
            <h3>{{ book.title }}</h3><p>{{ book.author }}</p>
          </article>
        } @empty {
          <div class="empty-state"><h3>No books found</h3><p>Try another title, author, or category.</p><button class="button button-dark" (click)="searchText=''; activeCategory='All'">Clear filters</button></div>
        }
      </div>
    </section>
  `
})
export class BooksComponent {
  searchText = '';
  activeCategory = 'All';
  books: Book[] = [
    { title: 'Clean Code', author: 'Robert C. Martin', category: 'Technology', code: 'CS-001', color: 'cover-sage', available: true },
    { title: 'The Alchemist', author: 'Paulo Coelho', category: 'Fiction', code: 'FI-014', color: 'cover-rust', available: true },
    { title: 'Atomic Habits', author: 'James Clear', category: 'Personal Growth', code: 'PG-008', color: 'cover-blue', available: true },
    { title: 'The Pragmatic Programmer', author: 'David Thomas', category: 'Technology', code: 'CS-012', color: 'cover-ink', available: false },
    { title: 'Ikigai', author: 'Héctor García', category: 'Personal Growth', code: 'PG-011', color: 'cover-cream', available: true },
    { title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Fiction', code: 'FI-022', color: 'cover-pink', available: true },
    { title: 'Introduction to Algorithms', author: 'Cormen et al.', category: 'Technology', code: 'CS-024', color: 'cover-gold', available: true },
    { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry', category: 'Fiction', code: 'FI-031', color: 'cover-lilac', available: false }
  ];
  get filteredBooks(): Book[] {
    const q = this.searchText.trim().toLowerCase();
    return this.books.filter(book =>
      (this.activeCategory === 'All' || book.category === this.activeCategory) &&
      (!q || `${book.title} ${book.author} ${book.category} ${book.code}`.toLowerCase().includes(q))
    );
  }
}
