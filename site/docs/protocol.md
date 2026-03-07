---

id: protocol

title: Protocol Specification

---



\# Protocol Specification



The DIP protocol defines a canonical JSON decision artifact

that is cryptographically signed using Ed25519.



\## Decision Artifact



A decision artifact contains:



\- decision\_id

\- timestamp

\- decision\_payload

\- signer

\- signature



\## Canonicalization



Artifacts are canonicalized to ensure deterministic byte representation.



\## Signing



The artifact is signed using Ed25519.

