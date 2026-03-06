\# DIP Protocol



The Decision Integrity Protocol defines the structure of a decision artifact.



A DIP artifact is a structured JSON document representing a decision

and its cryptographic integrity proof.



\## Artifact Structure



Example artifact:



```json

{

&nbsp; "version": "1.0",

&nbsp; "decision\_id": "abc123",

&nbsp; "timestamp": "2026-03-06T12:00:00Z",

&nbsp; "inputs": {},

&nbsp; "outputs": {},

&nbsp; "signature": {}

}

