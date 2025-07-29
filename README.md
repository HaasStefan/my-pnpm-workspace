# PNPM Workspace + TS Project References

This is a simple PNPM workspace setup with TypeScript project references. The workspace consists of two packages: `package-a` and `package-b`.

## Package Structure

```plaintext
my-pnpm-workspace
├── packages
│   ├── package-a
│   │   ├── src
│   │   │   └── index.ts
│   │   ├── package.json
│   │   └── tsconfig.json
│   └── package-b
│       ├── src
│       │   ├── index.ts
│       │   └── lib
│       │       └── bar.ts
│       ├── package.json
│       └── tsconfig.json
├── package.json
├── tsconfig.base.json
└── tsconfig.json
```

## Blog Post

This setup is designed to demonstrate how to use PNPM workspaces with TypeScript project references. The blog post will cover the following topics:

- Setting up a PNPM workspace
- Configuring TypeScript project references
- Incremental builds with `tsc --build`

https://stefanhaas.xyz/article/monorepos-with-pnpm-workspaces