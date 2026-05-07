import React from "react";

const PrivacyPolicy = () => {
  return (
    <div style={{ padding: "40px", maxWidth: "900px", margin: "auto", lineHeight: "1.8" }}>
      <h1>Privacy Policy</h1>

      <p>
        Your privacy is important to us. This Privacy Policy explains how we collect,
        use, and protect your information when you use our application.
      </p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Personal details like name and email (if provided)</li>
        <li>App usage data for improving user experience</li>
        <li>Device and browser information</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our services</li>
        <li>To communicate updates or support messages</li>
        <li>To ensure app security</li>
      </ul>

      <h2>Data Protection</h2>
      <p>
        We implement security measures to protect your personal data, but no system
        is 100% secure.
      </p>

      <h2>Third-Party Services</h2>
      <p>
        We may use trusted third-party tools for analytics and performance monitoring.
      </p>

      <h2>Your Rights</h2>
      <p>
        You can request access, correction, or deletion of your data anytime.
      </p>

      <h2>Contact Us</h2>
      <p>
        If you have any questions about this Privacy Policy, contact us at:
        <br />
        <strong>support@yourapp.com</strong>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
