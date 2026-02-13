---
title: Performance tuning
description: Optimize your deployment for lower latency and higher throughput.
---

Once your model is deployed, use these techniques to improve performance.

## Autoscaling

Configure autoscaling to match traffic patterns:

```yaml
scaling:
  min_replicas: 1
  max_replicas: 10
  target_concurrency: 5
```

- **min_replicas** - keeps at least this many instances warm to avoid cold starts
- **max_replicas** - caps total instances to control costs
- **target_concurrency** - requests per replica before scaling up

## Batching

Group multiple requests into a single forward pass:

```yaml
batching:
  max_batch_size: 32
  max_wait_ms: 50
```

Batching improves GPU utilization at the cost of slight added latency per request.

## Caching

Enable response caching for deterministic inputs:

```yaml
cache:
  enabled: true
  ttl_seconds: 300
```

## Monitoring

Track key metrics to identify bottlenecks:

| Metric | Description | Target |
|---|---|---|
| p50 latency | Median response time | < 100ms |
| p99 latency | Tail response time | < 500ms |
| GPU utilization | Compute usage | 60-80% |
| Queue depth | Pending requests | < 50 |

## Next steps

- [API reference](/reference/configuration/) - all configuration options
- [Deploy your model](/guides/deploy-your-model/) - initial deployment guide
