'use client';
import { Actor } from 'next/font/google';


const actor = Actor({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <div className="footer">

      <div className={`footerLinks ${actor.className}`}>
        <a className="icons11" href="/bolg">Blog</a>
        <a className="icons11" href="/contact-infor">Contact Info</a>
        <a className="icons11" href="/privacy-policy">Privacy Policy</a>
      </div>

<style jsx>{`
  .footer {
    width: 100%;
    background: #111111;
    color: #fff;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-wrap: wrap;
  }

  .footerLinks {
    display: flex;
    gap: 2rem;
    flex-wrap: wrap;
    justify-content: flex-end;
    flex: 1;
  }

  /* Medium screens */
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      align-items: center;
    }
    .footerLinks {
      justify-content: center;
      margin-top: 1rem;
      max-width: 100%;
    }
  }

  /* Small screens - 3 icons per row */
  @media (max-width: 480px) {
    .footerLinks {
      flex-direction: column;
      align-items: center;
      gap: 0.75rem;
    }
  }
`}</style>


    </div>
  );
}
