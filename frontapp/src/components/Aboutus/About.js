import React from 'react';
import './Aboutus.css';
import Navbar from '../NavBar/Navbar';


export default function About() {
  return (
    <div>
    <Navbar/>
    <div className="ab_con">
    <main className="testimonial-grid">
      <article className="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
        <div className="flex">
         
          <div>
            <p className="ab_position">Meet Our Team</p>
          </div>
        </div>
        <p>
          “ Our team of 200 associates are some of the most passionate watch enthusiasts in the business, maintaining a superior level of knowledge regarding the history, nuances of current collections, and pulse of the secondary marketplace. And we are here for you. WatchBox Client Advisors can assist with all of your watch-related needs – whether you are looking for .timepieces from your personal collection. Connect with WatchBox at your convenience to meet your dedicated client advisor – over the phone, by email, live chat, in-app communication, and of course,  within our showrooms and buying offices around the world. We look forward to getting to know you. ”
        </p>
      </article>
      <article className="testimonial flow bg-secondary-400 text-neutral-100">
        <div className="flex">
          <div>
            <p className="position">Why Choose WatchValut?</p>
          </div>
        </div>
        
        <p>
          “ As watch enthusiasts and experts ourselves, we are committed to the integrity and innovation of the luxury watch industry—which is why we invest in our processes, services, and team. ”
        </p>
      </article>
      <article className="testimonial flow bg-neutral-100 text-secondary-400">
        <div className="flex">
          <div>
            <p className="position">Unrivaled Selection</p>
          </div>
        </div>
        <p>
          “We are not a marketplace;  This allows us to implement a true global quality standard, and as one of the largest  pre-owned watches worldwide, our selection is ever-changing with thousands of pieces from the best brands available. ”
        </p>
      </article>
      <article className="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
        <div className="flex">
          <div>
            <p className="position">Story</p>
          </div>
        </div>
        <p>
        WATCH VAULT is India’s best website to showcase of all global watch brands. We strive to provide all kinds of watches, from classic to the latest designs. 
   
  </p>
  <p>
    “ Our website offers easy navigation through 12000+ unique styles at the customers' fingertips and the interactive features on the website are designed to help the watch collectors pick the right product for themselves. With the widespread network of our exclusive brand, 
    we host approximately more than 1 lakh units which allow us to service the customers’ needs in real-time. Our unique options can be passed on from generation to generation. Here are some names of the brands that we host: Rado, Longines, Ferragamo, Versace, Movado, Roamer, Armani Exchange,Boss, Tissot, Seiko, Citizen and many more.
    The best part of visiting us is that you not only get authentic watches but also get personalised service for every brand. We are authorised service providers to keep your watches long-lasting. Our expert staff are well-versed in understanding what your watch needs. 
    WATCH VAULT is an ideal destination to get authentic branded watches . ”
  </p>
        
      </article>
      <article className="testimonial flow bg-neutral-100 text-secondary-400">
        <div className="flex">
          <div>
            <p className="position">Motive of Watch Vault</p>
          </div>
        </div>
        <p>
          “ We are not a maketplace. The Website is Build to Show All the watches and its Specifications.The Watch Collectors can utilize the website to Explore more watches as they expected  ”
        </p>
      </article>
    </main>
    </div>
    </div>
  );
}
