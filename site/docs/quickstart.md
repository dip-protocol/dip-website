````markdown
# Quick Start

This guide shows how to create and verify a Decision Integrity Protocol (DIP) artifact.

## 1. Create a Decision Record

Create a JSON file describing the decision.

Example:

```json
{
  "version": "1.0",
  "decision_id": "example-001",
  "timestamp": "2026-03-06T12:00:00Z",
  "inputs": {},
  "outputs": {}
}
````

Save this file as:

```
decision.json
```

---

## 2. Sign the Artifact

Use the DIP CLI to sign the decision artifact.

```bash
dip sign decision.json
```

This command generates a cryptographic signature for the decision record.

---

## 3. Verify the Artifact

Verify the integrity of the artifact.

```bash
dip verify decision.json
```

Verification confirms that:

* the artifact has not been modified
* the signature is valid

---

## Result

You now have a **cryptographically verifiable decision artifact**.

This artifact can be:

* stored in a registry
* shared with other systems
* independently verified

````

