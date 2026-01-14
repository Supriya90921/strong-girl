
import React from "react";
import "./styles/PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1 className="privacy-title">Privacy Policy</h1>
      <p className="privacy-updated">Last updated: January 2026</p>

      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to <strong>Strong Girl</strong>. Your privacy is important to us.
          This Privacy Policy explains how we collect, use, and protect your
          information when you use our website.
        </p>
      </section>

      <section>
        <h2>Information We Collect</h2>
        <ul>
          <li>Personal information such as name or email (only if you provide it)</li>
          <li>Usage data like pages visited and time spent on the site</li>
        </ul>
      </section>

      <section>
        <h2>How We Use Your Information</h2>
        <ul>
          <li>To improve website content and user experience</li>
          <li>To respond to your queries or messages</li>
          <li>To maintain website security</li>
        </ul>
      </section>

      <section>
        <h2>Cookies</h2>
        <p>
          Strong Girl may use cookies to enhance your browsing experience.
          You can disable cookies in your browser settings if you prefer.
        </p>
      </section>

      <section>
        <h2>Data Security</h2>
        <p>
          We take reasonable measures to protect your data, but no method of
          transmission over the internet is 100% secure.
        </p>
      </section>

      <section>
        <h2>Third-Party Links</h2>
        <p>
          Our website may contain links to external sites. We are not responsible
          for the privacy practices of those websites.
        </p>
      </section>

      <section>
        <h2>Your Consent</h2>
        <p>
          By using our website, you consent to our Privacy Policy.
        </p>
      </section>

      <section>
        <h2>Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please contact us.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;