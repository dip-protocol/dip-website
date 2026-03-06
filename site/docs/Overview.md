```markdown
---
title: Developers
sidebar_label: Overview
---

# Developers

The **Decision Integrity Protocol (DIP)** provides a set of tools and
reference implementations for building verifiable decision systems.

The developer toolchain consists of several components.

---

## DIP CLI

The **DIP CLI** generates and signs decision artifacts.

Repository:

https://github.com/dip-protocol/dip-cli

Install:

```bash
git clone https://github.com/dip-protocol/dip-cli
cd dip-cli
go build
```

Example:

```bash
dip sign decision.json
```

---

## Decision Ledger (dip-registry)

The **Decision Ledger** is an append-only registry used to store
signed decision artifacts.

Repository:

https://github.com/dip-protocol/dip-registry

Example:

```bash
dip-registry append decision.json
```

---

## Verification Engine (dip-go-verifier)

The **Verification Engine** independently verifies decision artifacts
and cryptographic signatures.

Repository:

https://github.com/dip-protocol/dip-go-verifier

Example:

```bash
dip-verify decision.json
```

---

## Protocol Specification (dip-spec)

The **DIP Specification** defines the canonical structure of decision
artifacts and protocol rules.

Repository:

https://github.com/dip-protocol/dip-spec

This repository contains:

- protocol specification
- schemas
- conformance tests
- documentation
```
