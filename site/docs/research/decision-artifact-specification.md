# Decision Artifact Specification

## Abstract

The Decision Artifact Specification defines the structure of verifiable decision records used within the Decision Integrity Protocol (DIP).  
A decision artifact captures the inputs, outputs, metadata, and cryptographic signature associated with a system decision.

This specification enables independent verification of decision integrity.


# 1. Overview

Decision artifacts represent a standardized evidence record describing how a system decision was produced.

Each artifact includes:

- decision identifier
- system inputs
- decision outputs
- metadata describing the producing system
- timestamp
- cryptographic signature
- protocol version

Artifacts are designed to be **portable, verifiable, and auditable**.


# 2. Artifact Structure

A decision artifact follows the JSON structure below.

json
{
  "decision_id": "dec-2026-001",
  "inputs": {},
  "outputs": {},
  "metadata": {},
  "timestamp": "2026-03-05T12:00:00Z",
  "version": "1.0",
  "signature": {
    "algorithm": "ed25519",
    "public_key": "...",
    "value": "..."
  }
}
3. Field Definitions
decision_id

A globally unique identifier for the decision event.

inputs

Data used by the decision system when producing the output.

outputs

The resulting decision produced by the system.

metadata

Information describing the producing system.

Examples:

model version

service name

policy version

timestamp

UTC timestamp representing when the decision occurred.

version

Protocol version of the decision artifact.

signature

Cryptographic signature used to verify artifact authenticity.

4. Canonicalization

Before signing, the artifact must be canonicalized to ensure deterministic serialization.

Canonicalization ensures:

stable hashing

consistent verification

cross-system compatibility

5. Verification

Artifact verification involves:

canonicalizing the artifact

computing the artifact hash

verifying the Ed25519 signature

confirming the public key identity

6. Registry Publication

Artifacts may be published into a transparency registry.

Registry entries create a tamper-evident chain using:

previous record hash

record hash

artifact payload

This enables independent verification of registry integrity.

7. Security Considerations

Systems implementing this specification should ensure:

private key protection

deterministic serialization

timestamp integrity

secure registry storage

Conclusion

The Decision Artifact Specification provides a standardized format for verifiable decision evidence, forming the foundation of the Decision Integrity Protocol ecosystem.