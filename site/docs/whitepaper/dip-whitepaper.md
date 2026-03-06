## ---

## title: DIP Whitepaper

## sidebar\_position: 1

## ---

## 

## \# Decision Integrity Protocol (DIP)

## 

## \## Abstract

## 

## The Decision Integrity Protocol (DIP) provides a framework for producing verifiable decision artifacts using cryptographic signatures and append-only transparency registries.

## 

## ---

## 

## \## Download

## 

## Download the full whitepaper:

## 

## \[Download PDF](/papers/dip-whitepaper.pdf)

## 

## ---

## 

## \# 1. Introduction

## 

## Modern automated systems increasingly make important decisions.  

## However, many of these systems fail to produce verifiable evidence explaining how decisions were generated.

## 

## The Decision Integrity Protocol enables systems to produce signed decision artifacts that can be independently verified.

## 

## ---

## 

## \# 2. Decision Artifact Model

## 

## A decision artifact is a structured record describing a decision.

## 

## Example artifact:

## 

## ```json

## {

## &nbsp; "decision\_id": "dec-2026-001",

## &nbsp; "inputs": {

## &nbsp;   "customer\_id": "CUST-12345",

## &nbsp;   "risk\_score": 0.82

## &nbsp; },

## &nbsp; "outputs": {

## &nbsp;   "decision": "approve"

## &nbsp; },

## &nbsp; "metadata": {

## &nbsp;   "system": "fraud-detection-service",

## &nbsp;   "model\_version": "v3.2"

## &nbsp; },

## &nbsp; "signature": {

## &nbsp;   "algorithm": "ed25519",

## &nbsp;   "public\_key": "PUBLIC\_KEY",

## &nbsp;   "value": "SIGNATURE"

## &nbsp; },

## &nbsp; "timestamp": "2026-03-05T12:00:00Z",

## &nbsp; "version": "1.0"

## }



3\. Cryptographic Signing



DIP uses Ed25519 signatures to ensure artifact integrity.



Signing process:



Canonicalize the artifact JSON



Compute a cryptographic hash



Sign the hash using a private key



Verification process:



Recompute the artifact hash



Verify the signature using the public key



4\. Transparency Registry



Artifacts can be published into an append-only registry.



Each record stores:



artifact



previous hash



record hash



This creates a tamper-evident chain of evidence.



5\. Verification



Independent verifiers can check:



artifact integrity



signature validity



registry chain consistency



Verification does not require trusting the system that generated the artifact.



6\. Applications



Potential applications include:



machine learning decision auditing



financial transaction verification



governance transparency



compliance evidence



7\. Future Work



Future research may include:



additional verification libraries



distributed registries



governance proposals



protocol standardization



Conclusion



The Decision Integrity Protocol enables verifiable decision systems by combining structured artifacts, cryptographic signatures, and transparency registries.

