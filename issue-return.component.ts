import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="page-hero compact">
      <div class="eyebrow"><span class="eyebrow-dot"></span> YOUR READING JOURNEY</div>
      <h1>Issue a book.<br><em>Start exploring.</em></h1>
      <p>Use this demo form to practise the book issue and return workflow.</p>
    </section>
    <section class="form-layout">
      <div class="form-intro"><span class="form-symbol">↗</span><h2>Good books.<br>Great journeys.</h2><p>Fill in your details and select an action. This classroom demo shows how a library request form works.</p><div class="mini-rule"></div><strong>Before you submit</strong><ul><li>Use your student name</li><li>Enter a valid roll number</li><li>Select a book and action</li></ul></div>
      <form class="request-form" (ngSubmit)="submitRequest()">
        <div class="form-title"><div><span class="eyebrow">LIBRARY REQUEST</span><h2>Student details</h2></div><span class="form-step">01 / 01</span></div>
        <label>Full name<input name="studentName" [(ngModel)]="studentName" required placeholder="e.g. Vikash Kumar"></label>
        <label>Student roll number<input name="rollNumber" [(ngModel)]="rollNumber" required placeholder="e.g. CSE-2026-001"></label>
        <label>Select a book<select name="bookTitle" [(ngModel)]="bookTitle" required><option value="" disabled>Choose a book</option><option>Clean Code</option><option>The Alchemist</option><option>Atomic Habits</option><option>Ikigai</option><option>Introduction to Algorithms</option></select></label>
        <label>Choose action<div class="action-options"><label class="action-option"><input type="radio" name="action" [(ngModel)]="action" value="Issue" required><span>Issue a book</span></label><label class="action-option"><input type="radio" name="action" [(ngModel)]="action" value="Return" required><span>Return a book</span></label></div></label>
        <button class="button button-dark submit-button" type="submit">Submit demo request <span>↗</span></button>
        @if (message) { <div class="success-message" role="status"><strong>✓ Request recorded in this demo</strong><p>{{ message }}</p><small>No real library record was created. Data resets when you refresh.</small></div> }
      </form>
    </section>
  `
})
export class IssueReturnComponent {
  studentName = '';
  rollNumber = '';
  bookTitle = '';
  action = 'Issue';
  message = '';
  submitRequest(): void {
    this.message = `${this.action} request for "${this.bookTitle}" by ${this.studentName} (Roll No. ${this.rollNumber}).`;
  }
}
