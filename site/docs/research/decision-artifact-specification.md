title: Decision Artifact Specification

sidebar\_position: 3

---



\# Decision Artifact Specification



A Decision Artifact is the core data structure defined by the Decision Integrity Protocol.



It represents a complete record of a decision event.



\## Structure





{

decision\_id,

inputs,

outputs,

metadata,

signature,

timestamp,

version

}





\## Fields



\### decision\_id

Unique identifier for the decision.



\### inputs

Inputs that influenced the decision.



\### outputs

Result of the decision process.



\### metadata

Context describing the decision system.



\### signature

Cryptographic proof that the artifact was produced by an authorized system.



\### timestamp

Time when the decision occurred.



\### version

Protocol version used to generate the artifact.



\## Canonicalization



Artifacts must be serialized in canonical JSON format before signing.

