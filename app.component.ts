import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  template: `
    <header class="topbar">
      <a class="brand" routerLink="/" aria-label="Smart Library home">
        <span class="brand-mark">SL</span>
        <span>Smart<span class="brand-light">Library</span><small>READ. LEARN. GROW.</small></span>
      </a>
      <nav aria-label="Main navigation">
        <a routerLink="/" [routerLinkActiveOptions]="{exact:true}" routerLinkActive="active">Home</a>
        <a routerLink="/books" routerLinkActive="active">Explore Books</a>
        <a routerLink="/issue-return" routerLinkActive="active">Issue / Return</a>
        <a routerLink="/about" routerLinkActive="active">About</a>
      </nav>
      <a class="nav-cta" routerLink="/books">Find a book <span>↗</span></a>
    </header>
    <main><router-outlet /></main>
    <footer class="footer">
      <div class="footer-brand"><span class="brand-mark">SL</span><span>SmartLibrary</span></div>
      <p>A little reading can change everything.</p>
      <span>Web Engineering · Angular Project · 2026</span>
    </footer>
  `
})
export class AppComponent {}
