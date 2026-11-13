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

# Each package whose version is not on the registry yet
publish-all: check web-characters::publish cube-pets::publish block-characters::publish
