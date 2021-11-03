import React from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the New Gaming Experience With New Vibes
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='email'
              type='email'
              placeholder='Your Email'
            />
            <Button buttonStyle='btn--outline'>Subscribe</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/sign-up'>How it works</Link>
            <Link to='/'>Testimonials</Link>
            <Link to='/'>Careers</Link>
            <Link to='/'>Investors</Link>
            <Link to='/'>Terms of Service</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Contact Us</h2>
            <Link to='/'>Contact</Link>
            <Link to='/'>Support</Link>
            <Link to='/'>Destinations</Link>
            <Link to='/'>Sponsorships</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Videos</h2>
            <Link to='/'>Submit Video</Link>
            <Link to='/'>Ambassadors</Link>
            <Link to='/'>Agency</Link>
            <Link to='/'>Influencer</Link>
          </div>
          <div class='footer-link-items'>
            <h2>Social Media</h2>
            <a href="https://www.instagram.com/">Instagram</a>
            {/* <Link to='/'>Instagram</Link> */}
            <Link to='/'>Facebook</Link>
            <Link to='/'>Youtube</Link>
            <Link to='/'>Twitter</Link>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              Vam-Fire
              <i class='fab fa-typo3' />
            </Link>
          </div>
          <small class='website-rights'>Vam-Fire © 2021</small>
          <div class='social-icons'>
          <div
              class='social-icon-link facebook'>
              <a href="https://www.facebook.com/" rel="noopener noreferrer" target="_blank">
                <i style={{ color: '#4267B2' }} class='fab fa-facebook' aria-label='Facebook' />
              </a>
            </div>
            <div
              class='social-icon-link instagram'>
              <a href="https://www.instagram.com/" rel="noopener noreferrer" target="_blank">
                <i style={{ color: '#F56040' }} class='fab fa-instagram' aria-label='Instagram' />
              </a>
            </div>
            <div
              class='social-icon-link youtube'>
              <a href="https://www.youtube.com/" rel="noopener noreferrer" target="_blank">
                <i style={{ color: '#FF0000' }} className="fab fa-youtube" aria-label='Youtube'></i>
              </a>
            </div>
           <div
              class='social-icon-link twitter'>
              <a href="/" rel="noopener noreferrer" target="_blank">
                <i style={{ color: '#1DA1F2' }} className="fab fa-twitter" aria-label='twitter'></i>
              </a>
            </div>
            <div
              class='social-icon-link linkedin'>
              <a href="https://www.linkedin.com/" rel="noopener noreferrer" target="_blank">
                <i style={{ color: '#0077b5' }} className="fab fa-linkedin" aria-label='Linkedin'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;