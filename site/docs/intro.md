---
id: intro
title: Decision Integrity Protocol
---

# Decision Integrity Protocol (DIP)

The **Decision Integrity Protocol (DIP)** is an infrastructure protocol for
**deterministic governance and decision verification**.

DIP enables systems to:

- produce verifiable decision artifacts
- cryptographically sign governance decisions
- record immutable decision evidence
- verify execution-to-evidence pipelines

The protocol defines a deterministic interface between:

- **Decision Producers**
- **Verification Engines**
- **Evidence Ledgers**

---

## Core Components

### Decision Artifact

A structured JSON payload representing a decision event.

### Canonicalization

Deterministic serialization ensuring identical byte representation.

### Cryptographic Signature

Ed25519 signatures verify decision authenticity.

### Decision Ledger

An append-only registry storing verifiable governance evidence.

---

## Protocol Goals

1. Deterministic governance
2. Verifiable execution evidence
3. Independent verification
4. Infrastructure-grade reliability

---

## DIP Resources

- Protocol specification
- Verification libraries
- Decision ledger reference implementation
- Research papers

## DIP Ecosystem

The DIP project consists of several repositories.

dip-spec
Protocol specification and artifact schema.

dip-go-verifier
Reference verification library.

dip-cli
CLI tool for generating and verifying decision artifacts.

dip-registry
Append-only decision ledger.

dip-website
Documentation and protocol portal.

dip-research
Research papers and protocol analysis.

dip-governance
Protocol governance and DIP proposals.