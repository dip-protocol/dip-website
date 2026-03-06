````markdown

---

title: Quick Start

sidebar\_label: Quick Start

---



\# Quick Start



This guide shows how to generate and verify a decision artifact

using the \*\*Decision Integrity Protocol (DIP)\*\*.



---



\## 1. Install DIP CLI



Clone the repository:



```bash

git clone https://github.com/dip-protocol/dip-cli

cd dip-cli

go build

````



---



\## 2. Create a Decision Artifact



Create a file called `decision.json`.



```json

{

&nbsp; "decision\_id": "example-001",

&nbsp; "timestamp": "2026-03-07T12:00:00Z",

&nbsp; "actor": "system",

&nbsp; "action": "approve\_request",

&nbsp; "result": "approved"

}

```



---



\## 3. Sign the Decision



```bash

dip sign decision.json

```



This produces a \*\*signed decision artifact\*\*.



---



\## 4. Append to the Decision Ledger



```bash

dip-registry append decision.json

```



This records the decision artifact in the \*\*append-only ledger\*\*.



---



\## 5. Verify the Artifact



```bash

dip-verify decision.json

```



The verifier checks:



\* artifact integrity

\* signature validity

\* ledger record



```



