import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  standalone: true,
  imports: [RouterLink],
  template: `
    <section class="hero">
      <div class="hero-copy">
        <div class="eyebrow"><span class="eyebrow-dot"></span> YOUR CAMPUS, YOUR KNOWLEDGE</div>
        <h1>Find your next<br><em>great read.</em></h1>
        <p class="hero-lead">A smarter way to discover books, explore new ideas, and keep your learning journey moving.</p>
        <div class="hero-actions">
          <a class="button button-dark" routerLink="/books">Explore the collection <span>↗</span></a>
          <a class="text-link" routerLink="/about">Get to know us <span>→</span></a>
        </div>
        <div class="hero-proof"><div class="avatar-stack"><span>R</span><span>A</span><span>S</span></div><div><strong>Made for curious minds</strong><small>Learn something new every day</small></div></div>
      </div>
      <div class="hero-art">
        <div class="art-circle"></div>
        <div class="book book-one"><span>THE ART OF</span><strong>THINKING<br>CLEARLY</strong><small>Rolf Dobelli</small></div>
        <div class="book book-two"><span>DESIGN</span><strong>EVERYDAY<br>THINGS</strong><small>Don Norman</small></div>
        <div class="book book-three"><span>THE</span><strong>ALCHEMIST</strong><small>Paulo Coelho</small></div>
        <div class="art-note"><span>✳</span><div><strong>Open a book.</strong><small>Open a new world.</small></div></div>
        <div class="art-caption">A WORLD OF IDEAS, WAITING FOR YOU</div>
      </div>
    </section>
    <section class="stats-row">
      <div><strong>1,200<span>+</span></strong><small>Books to discover</small></div>
      <div><strong>35</strong><small>Knowledge categories</small></div>
      <div><strong>Open</strong><small>To every curious mind</small></div>
      <div class="stats-note">Your next favourite book<br>is closer than you think. ↗</div>
    </section>
    <section class="section-block">
      <div class="section-heading"><div><div class="eyebrow">A GOOD PLACE TO START</div><h2>Explore by interest.</h2></div><a class="text-link" routerLink="/books">All books <span>→</span></a></div>
      <div class="category-grid">
        <a routerLink="/books" class="category-card category-green"><span class="category-icon">⌘</span><span class="category-count">01 / TECHNOLOGY</span><h3>Computer<br>Science</h3><span class="category-arrow">↗</span></a>
        <a routerLink="/books" class="category-card category-peach"><span class="category-icon">✳</span><span class="category-count">02 / IMAGINATION</span><h3>Fiction &<br>Literature</h3><span class="category-arrow">↗</span></a>
        <a routerLink="/books" class="category-card category-lilac"><span class="category-icon">◈</span><span class="category-count">03 / GROWTH</span><h3>Self<br>Development</h3><span class="category-arrow">↗</span></a>
      </div>
    </section>
    <section class="quote-band"><span class="quote-mark">“</span><blockquote>A reader lives a thousand lives before he dies.</blockquote><p>— George R. R. Martin</p></section>
  `
})
export class HomeComponent {}
