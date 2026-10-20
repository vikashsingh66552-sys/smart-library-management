import { Component } from '@angular/core';

@Component({
  standalone: true,
  template: `
    <section class="page-hero">
      <div class="eyebrow"><span class="eyebrow-dot"></span> OUR LITTLE CORNER OF KNOWLEDGE</div>
      <h1>More than shelves.<br><em>A space to grow.</em></h1>
      <p>We believe a library should make discovery simple, learning enjoyable, and every reader feel welcome.</p>
    </section>
    <section class="about-layout">
      <div class="about-art"><div class="about-art-circle"></div><div class="about-book">READ<br><span>MORE.</span><small>Every page is a new beginning.</small></div><span class="about-star">✳</span></div>
      <div class="about-copy"><div class="eyebrow">THE IDEA BEHIND SMARTLIBRARY</div><h2>Knowledge should be<br><em>easy to find.</em></h2><p>SmartLibrary is a student project designed to demonstrate how a digital library interface can help readers browse a collection and practise common library tasks.</p><p>With a clean catalogue, search filters, and an issue/return form, the website brings the core library experience into one simple place.</p><div class="values-grid"><div><strong>01</strong><h3>Discover</h3><p>Find books by title, author or subject.</p></div><div><strong>02</strong><h3>Learn</h3><p>Explore new topics and ideas.</p></div><div><strong>03</strong><h3>Organise</h3><p>Try the demo issue/return workflow.</p></div></div></div>
    </section>
    <section class="contact-band"><div><div class="eyebrow">VISIT OR GET IN TOUCH</div><h2>Make room for<br><em>one more book.</em></h2></div><div class="contact-details"><div><span>⌖</span><p><strong>Location</strong><br>Your College Library, India</p></div><div><span>◷</span><p><strong>Library hours</strong><br>Monday – Saturday · 9 AM – 5 PM</p></div><div><span>✉</span><p><strong>Email</strong><br>library@example.com (demo)</p></div></div></section>
  `
})
export class AboutComponent {}
