import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { BooksComponent } from './pages/books.component';
import { IssueReturnComponent } from './pages/issue-return.component';
import { AboutComponent } from './pages/about.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Home | Smart Library' },
  { path: 'books', component: BooksComponent, title: 'Books | Smart Library' },
  { path: 'issue-return', component: IssueReturnComponent, title: 'Issue & Return | Smart Library' },
  { path: 'about', component: AboutComponent, title: 'About | Smart Library' },
  { path: '**', redirectTo: '' }
];
