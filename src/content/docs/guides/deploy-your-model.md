---
title: Deploy your model
description: Step-by-step guide to deploying your first model with Draftstack.
---

This guide walks through deploying a model to production. Replace the example with your own model and configuration.

## Before you begin

Make sure you have:

- A trained model artifact (weights file, ONNX, etc.)
- API credentials for your deployment target
- The Draftstack CLI installed (`npm install`)

## Step 1: Define your model configuration

Create a configuration file that describes your model's requirements:

```yaml
name: my-model
runtime: python3.11
resources:
  gpu: A10G
  memory: 16Gi
```

## Step 2: Package your model

Bundle your model code and dependencies:

```bash
draftstack package ./my-model
```

## Step 3: Deploy

Push to your deployment target:

```bash
draftstack deploy ./my-model --environment production
```

## Step 4: Verify

Confirm the deployment is healthy:

```bash
curl -X POST https://api.example.com/v1/predict \
  -H "Authorization: Bearer $API_KEY" \
  -d '{"input": "Hello, world!"}'
```

## Next steps

- [Performance tuning](/guides/performance-tuning/) - optimize latency and throughput
- [API reference](/reference/configuration/) - full configuration options
