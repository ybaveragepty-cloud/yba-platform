# YBA Platform Context

## Brand Structure
- YBA Systems = infrastructure and internal systems
- YBAFlow = customer-facing automation company and platform
- YBATerra = first vertical product built on YBAFlow for agriculture

## Current Goal
Build YBAFlow in a controlled, modular, scalable way.
Do not build YBATerra directly into the platform core.
Keep platform logic separate from product logic.

## Current Repo Purpose
This repo is the top-level platform repo for YBAFlow and related components.

## Development Rules
- Prefer modular architecture
- Do not generate random features
- Do not change unrelated files
- Keep TypeScript
- Keep code clean and reusable
- Prefer small, reviewable tasks
- Ask before making architectural assumptions
- Refactor before adding complexity

## Current Priority
1. Stabilize landing page structure
2. Extract reusable components
3. Prepare for backend foundation
4. Prepare for multi-tenant platform architecture later
