import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="Decision Integrity Protocol"
      description="Deterministic Governance Infrastructure">

      <main style={{padding: "4rem", textAlign: "center"}}>

        <h1>Decision Integrity Protocol (DIP)</h1>

        <p style={{fontSize: "18px"}}>
          DIP is a cryptographic protocol for producing verifiable decision artifacts.
          It enables systems to generate signed decision records that can be independently verified.
        </p>

        <div style={{marginTop: "40px"}}>
          <Link
            to="/intro"
            style={{
              padding: "12px 24px",
              background: "#2e8555",
              color: "white",
              borderRadius: "6px",
              textDecoration: "none",
              fontWeight: "bold"
            }}>
            Read the Documentation
          </Link>
        </div>

      </main>

    </Layout>
  );
}