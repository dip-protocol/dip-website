import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Decision Integrity Protocol"
      description="Cryptographic protocol for verifiable decisions"
    >
      <main style={{padding: "40px", textAlign: "center"}}>

        <h1>Decision Integrity Protocol (DIP)</h1>

        <p style={{fontSize: "18px", maxWidth: "800px", margin: "auto"}}>
          DIP is a cryptographic protocol for producing verifiable decision artifacts.
          It enables systems to generate signed decision records that can be independently verified,
          ensuring transparency, auditability, and integrity.
        </p>

        <br/>

        <Link
          className="button button--primary button--lg"
          to="/docs/intro">
          Read the Documentation
        </Link>

        <br/><br/>

        <h2>Core Components</h2>

        <ul style={{listStyle: "none", fontSize: "16px"}}>
          <li>📜 DIP Specification</li>
          <li>🔐 Signing & Verification CLI</li>
          <li>📦 Evidence Registry</li>
          <li>📚 Documentation & Governance</li>
        </ul>

      </main>
    </Layout>
  );
}