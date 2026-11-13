# The catwalk packages: @n1h/web-characters and its model packs. One module per package.

set shell := ["pwsh", "-NoProfile", "-Command", "$ErrorActionPreference = 'Stop'; $PSNativeCommandUseErrorActionPreference = $true; trap { if ($_.Exception -is [System.Management.Automation.NativeCommandExitException]) { exit $_.Exception.ExitCode }; break };"]

mod web-characters "packages/web-characters"
mod cube-pets "packages/web-characters-cube-pets"
mod block-characters "packages/web-characters-block-characters"


@_default:
    just --justfile "{{justfile()}}" --list

install:
    bun install

typecheck: install
    bun run typecheck

test: install
    bun test

check: typecheck test

# The demo page: bundles it, then serves it on http://127.0.0.1:4748 (PORT and HOST to change)
demo: install
    bun build demo/main.tsx --outdir demo/build --minify
    bun run demo/serve.ts

# Each package whose version is not on the registry yet
publish-all: check web-characters::publish cube-pets::publish block-characters::publish
