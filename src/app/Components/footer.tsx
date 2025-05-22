'use client';
import { Actor } from 'next/font/google';
import { FaFacebookF, FaInstagram, FaTiktok, FaYoutube, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { SiMessenger, SiWhatsapp } from 'react-icons/si';

const actor = Actor({ subsets: ['latin'], weight: '400' });

export default function Footer() {
  return (
    <div className="footer">
        <div className="socialIcons">
        <a href="https://facebook.com/share/16Pv5FoKgd" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Facebook"><FaFacebookF /></a>
        <a href="https://tiktok.com/@local.stvn" target="_blank" rel="noopener noreferrer" className="socialIcon" title="TikTok"><FaTiktok /></a>
        <a href="https://instagram.com/local.stvn" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Instagram"><FaInstagram /></a>
        <a href="https://x.com/local_STVN" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Twitter/X"><FaXTwitter /></a>
        <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer" className="socialIcon" title="WhatsApp"><SiWhatsapp /></a>
        <a href="https://www.youtube.com/@localstvn" target="_blank" rel="noopener noreferrer" className="socialIcon" title="YouTube"><FaYoutube /></a>
        <a href="https://www.linkedin.com/in/local-stvn" target="_blank" rel="noopener noreferrer" className="socialIcon" title="LinkedIn"><FaLinkedinIn /></a>
        <a href="https://www.messenger.com/t/local.stvn" target="_blank" rel="noopener noreferrer" className="socialIcon" title="Messenger"><SiMessenger /></a>
        </div>

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
          padding: 0.5rem 1rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
        }

        .socialIcons {
          display: flex;
          gap: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .socialIcon {
          width: 40px;
          height: 40px;
          border: 1px solid #fff;
          display: flex;
          color: #fff;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          transition: background 0.3s ease, border-color 0.3s ease;
        }

        .socialIcon:hover {
          background: #FF4D00;
          border-color: #FF4D00;
        }

        .footerLinks {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          margin-right: 1rem;
        }

        .icons11 {
          color: #fff;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .icons11:hover {
          color: #FF4D00;
        }

        @media (max-width: 768px) {
          .footer {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
          }

          .socialIcons {
            justify-content: flex-start;
            margin-bottom: 0;
          }

          .footerLinks {
            margin-right: 0;
            flex-direction: column;
            gap: 0.75rem;
          }
        }
      `}</style>
    </div>
  );
}
