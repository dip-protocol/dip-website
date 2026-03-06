import React from 'react';

export default function Home() {
  return (
    <div style={{padding: "40px"}}>

      <h1>Decision Integrity Protocol (DIP)</h1>

      <p>
        DIP is a cryptographic protocol for producing verifiable decision artifacts.
        It enables systems to generate signed decision records that can be independently verified.
      </p>

      <h2>Core Components</h2>

      <ul>
        <li>Decision Artifact Specification</li>
        <li>Cryptographic Signing</li>
        <li>Verification Engine</li>
        <li>Transparency Registry</li>
      </ul>

      <p>
        Explore the documentation to understand how DIP enables deterministic governance
        and verifiable decision systems.
      </p>

    </div>
  );
}