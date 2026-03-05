import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Decision Integrity Protocol"
      description="Deterministic and cryptographically verifiable decision artifacts">

      <main>

        <div style={{textAlign:'center',padding:'80px 20px'}}>
          <h1 style={{fontSize:'48px'}}>Decision Integrity Protocol</h1>

          <p style={{fontSize:'20px',maxWidth:'700px',margin:'20px auto'}}>
            The Decision Integrity Protocol (DIP) enables automated systems
            to produce deterministic and cryptographically verifiable
            decision artifacts.
          </p>

          <p style={{fontSize:'16px',color:'#666'}}>
            An open protocol for transparent and verifiable decision systems.
          </p>
        </div>

        <div style={{maxWidth:'900px',margin:'auto',padding:'40px'}}>

          <h2>Why DIP</h2>

          <ul>
            <li>Deterministic decision records</li>
            <li>Cryptographic signatures</li>
            <li>Independent verification</li>
            <li>Append-only artifact registry</li>
          </ul>

          <h2>Core Workflow</h2>

          <pre>
Decision Engine
      ↓
Decision Record
      ↓
DIP CLI (Sign)
      ↓
Signed Artifact
      ↓
Registry Storage
      ↓
Independent Verification
          </pre>

          <h2>Core Repositories</h2>

          <ul>
            <li>dip-spec — protocol specification</li>
            <li>dip-cli — reference CLI implementation</li>
            <li>dip-registry — artifact registry</li>
            <li>dip-go-verifier — verification library</li>
          </ul>

        </div>

      </main>

    </Layout>
  );
}