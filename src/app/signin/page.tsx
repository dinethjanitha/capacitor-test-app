'use client';
import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Image from 'next/image';
import Link from 'next/link';
import styles from './signin.module.css';

const Signin = () => {
  const [rightPanelActive, setRightPanelActive] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if we're on mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
   
    checkMobile();
    window.addEventListener('resize', checkMobile);
   
    // Check URL params for messages
    const urlParams = new URLSearchParams(window.location.search);
    const msg = urlParams.get('msg');

    if (msg === 'success') {
      alert("Registration successful! Please login.");
    } else if (msg === 'exists') {
      alert("Email already exists! Please use a different email.");
    } else if (msg === 'error') {
      alert("Registration failed. Please try again.");
    }
   
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const num = formData.get('num');
    const password = formData.get('password');

    if (!name || !email || !num || !password) {
      alert('All fields are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3005/api/v1/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, contactNumber: num, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        window.location.href = '/signin?msg=success';
      } else {
        alert(data.message);
        window.location.href = `/signin?msg=${data.message === 'Email already exists' ? 'exists' : 'error'}`;
      }
    } catch {
      alert('Registration failed. Please try again.');
      window.location.href = '/signin?msg=error';
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email');
    const password = formData.get('password');

    if (!email || !password) {
      alert('Email and password are required');
      return;
    }

    try {
      const response = await fetch('http://localhost:3005/api/v1/auth/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message);
        localStorage.setItem('token', data.token); // Store JWT
        // Redirect to dashboard or home
        window.location.href = '/main';
      } else {
        alert(data.message);
      }
    } catch {
      alert('Login failed. Please try again.');
    }
  };

  const togglePanel = () => {
    setRightPanelActive(!rightPanelActive);
  };

  return (
    <div className={styles["signin-page"]}>
      <div className={styles.closeButton} >
        X
      </div>
      <div className={`${styles.container} ${rightPanelActive ? styles["right-panel-active"] : ''}`} id="container">
        <div className={`${styles["form-container"]} ${styles["sign-up-container"]}`}>
          <form className={styles.formStyle} onSubmit={handleRegister}>
            <h1 className={styles.headingStyle}>CREATE ACCOUNT</h1>
            <div className={styles.infield1}>
              <label>Name</label>
              <input type="text" name="name" required placeholder="Enter your name" className={styles.inputStyle} />
            </div>
            <div className={styles.infield1}>
              <label>E-mail</label>
              <input type="email" name="email" required placeholder="Enter your email" className={styles.inputStyle} />
            </div>
            <div className={styles.infield1}>
              <label>Contact Number</label>
              <input type="text" name="num" required placeholder="Enter your contact number" className={styles.inputStyle} />
            </div>
            <div className={styles.infield1}>
              <label>Password</label>
              <input type="password" name="password" required placeholder="Enter at least 8 characters" className={styles.inputStyle} />
            </div>
            <div className={styles.signup}>
              <button type="submit" className={styles.buttonStyle}>Sign Up</button>
              {isMobile && (
                <button type="button" className={styles.mobileFlipButton} onClick={togglePanel}>
                  Already have an account? Login
                </button>
              )}
              <div className={styles.or}><span className={styles.spanStyle}>OR</span></div>
              <div className={styles["social-container"]}>
                <Link href="http://facebook.com/share/16Pv5FoKgd" className={styles.social}>
                  <Image width={500} height={500} src="/icons8-facebook-48 1.png" alt="Facebook" className={styles.socialIcon} />
                </Link>
                <Link href="http://whatsapp.com/channel/0029Vb5dMyPKWEKk0d0yqd0m" className={styles.social}>
                  <Image width={500} height={500} src="/Google_Icons-09-512 1.png" alt="WhatsApp" className={styles.socialIcon} />
                </Link>
                <Link href="http://x.com/local_STVN" className={styles.social}>
                  <Image width={500} height={500} src="/png-transparent-x-icon-ex-twitter-tech-companies-social-media-thumbnail-removebg-preview 1.png" alt="X" className={styles.socialIcon} />
                </Link>
              </div>
            </div>
          </form>
        </div>

        <div className={`${styles["form-container"]} ${styles["sign-in-container"]}`}>
          <form className={styles.formStyle} onSubmit={handleLogin}>
            <h1 className={styles.headingStyle}>LOGIN</h1>
            <div className={styles.form1}>
              <div className={styles.infield}>
                <label>E-mail</label>
                <input type="email" name="email" required placeholder="Enter your email" className={styles.inputStyle} />
              </div>
              <div className={styles.infield}>
                <label>Password</label>
                <input type="password" name="password" required placeholder="Enter your password" className={styles.inputStyle} />
              </div>

              <div className={styles.options}>
                <div className={styles["remember-me-container"]}>
                  <div className={styles.Remember}>
                    <input
                      id="rememberMe"
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className={styles.customCheckbox}
                    />
                    <label htmlFor="rememberMe">Remember Me</label>
                  </div>
                </div>
                <Link href="#" className={styles.forgot}>Forget Password</Link>
              </div>

              <button type="submit" className={styles.buttonStyle}>Log In</button>
              {isMobile && (
                <button type="button" className={styles.mobileFlipButton} onClick={togglePanel}>
                  Need an account? Sign Up
                </button>
              )}
              <div className={styles.or}><span className={styles.spanStyle}>OR</span></div>
              <div className={styles["social-container"]}>
                <Link href="http://facebook.com/share/16Pv5FoKgd" className={styles.social}>
                  <Image width={500} height={500} src="/icons8-facebook-48 1.png" alt="Facebook" className={styles.socialIcon} />
                </Link>
                <Link href="http://whatsapp.com/channel/0029Vb5dMyPKWEKk0d0yqd0m" className={styles.social}>
                  <Image width={500} height={500} src="/Google_Icons-09-512 1.png" alt="WhatsApp" className={styles.socialIcon} />
                </Link>
                <Link href="http://x.com/local_STVN" className={styles.social}>
                  <Image width={500} height={500} src="/png-transparent-x-icon-ex-twitter-tech-companies-social-media-thumbnail-removebg-preview 1.png" alt="X" className={styles.socialIcon} />
                </Link>
              </div>
            </div>
          </form>
        </div>

        {/* These will be shown on both mobile and desktop but with different transitions */}
        <div className={`${styles["overlay-panel"]} ${styles["overlay-right"]}`}>
          <div className={styles["image-container"]}>
            <Image
              src="/ecd8a102-ae6e-46d7-b455-3a4315ee7e72.jpeg"
              alt="Featured"
              width={500}
              height={500}
              className={styles["background-image"]}
              priority
            />
            <div className={styles["centered-button1"]} onClick={() => setRightPanelActive(true)}>SIGN UP</div>
            <div className={styles.state1}>STREAM YOUR FAVOURITE SPORTS</div>
            <div className={styles.state2}>SPORTS-TV.NETWORK</div>
          </div>
        </div>
        <div className={`${styles["overlay-panel"]} ${styles["overlay-left"]}`}>
          <div className={styles["image-container"]}>
            <Image
              src="/463dc2ae-ed76-46cf-a395-2878658f63f9.jpeg"
              alt="Featured"
              width={500}
              height={500}
              className={styles["background-image"]}
              priority
            />
            <div className={styles["centered-button2"]} onClick={() => setRightPanelActive(false)}>LOG IN</div>
            <div className={styles.state3}>STREAM YOUR FAVOURITE SPORTS</div>
            <div className={styles.state4}>SPORTS-TV.NETWORK</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;