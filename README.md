# workers-sdk-index-js-require-repro

`vendor/ext-dep` has a CommonJS dependency.

`ext-dep/index.js` requires `ext-dep/subfolder`, which should resolve to `ext-dep/subfolder/index.js`, but does not in `@cloudflare/vitest-pool-workers`.

```
pnpm i
pnpm test
```

```
Error: No such module "<root>/node_modules/.pnpm/ext-dep-1@file+vendor+ext-dep/node_modules/ext-dep-1/subfolder".
```
