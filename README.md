# Super Awesome Design System

[![js](https://github.com/joshblack/super-awesome-design-system/actions/workflows/js.yml/badge.svg)](https://github.com/joshblack/super-awesome-design-system/actions/workflows/js.yml)
[![rust](https://github.com/joshblack/super-awesome-design-system/actions/workflows/rust.yml/badge.svg)](https://github.com/joshblack/super-awesome-design-system/actions/workflows/rust.yml)
[![security](https://github.com/joshblack/super-awesome-design-system/actions/workflows/audit-on-push.yml/badge.svg)](https://github.com/joshblack/super-awesome-design-system/actions/workflows/audit-on-push.yml)

> Sandbox for building out super awesome design systems

This project is a personal development environment for trying out different
techniques for building a design system. This includes multiple ways of building
components, different styling strategies, building websites, CLI commands, and
more.

This work is not intended to be stable or used as a reference. It's just meant
to be fun. If you're checking out this project, hope it's helpful!

## Getting started

_These are the notes that I'm using to remember how to use this project
:sweat_smile:_

**Prerequisites**

You will need to have the following installed on your machine:

- Node.js, we recommend [`nvm`](https://github.com/nvm-sh/nvm)
- [Yarn](https://yarnpkg.com/getting-started/install/#about-global-installs)
- [Rust](https://rustup.rs/)

**Commands**

| Language   | Command                    | Description                                                                  |
| ---------- | -------------------------- | ---------------------------------------------------------------------------- |
| JavaScript | `yarn`                     | Install JavaScript dependencies for the monorepo                             |
| JavaScript | `yarn format`              | Format files in the project using `prettier`                                 |
| JavaScript | `yarn dedupe`              | Determine if we can deduplicate packages based on overlapping package ranges |
| Rust       | `cargo fmt`                | Format rust files using cargo fmt                                            |
| Rust       | `cargo test`               | Run the tests for the Rust files in the workspace                            |
| Rust       | `cargo clippy`             | Run `clippy` on files in the Rust workspace                                  |
| Rust       | `cargo install --path cli` | Install the `dsm` cli as an executable on your machine                       |

## Project Overview

This repo is broken up into several parts, including:

- The [`dsm` cli](./cli) used for managing common design system tasks in a
  monorepo
- A collection of [component packages](./components) that make up the design
  system
- A collection of [generic packages](./packages) for building the design system
- A [website](./website) for displaying information about the project, from
  documentation to blog posts

## Links & Inspiration

This list of projects and resources are ones that I've found inspirational or
referenced heavily during the course of exploring concepts in this repo. I want
to give each of them a huge shoutout for how helpful they've been:

**Radix UI**

[Homepage](https://www.radix-ui.com/) |
[Primitives](https://github.com/radix-ui/primitives) |
[Website](https://github.com/radix-ui/website)

Radix is always an inspiration, whether that's for accessible component
implementations in React, how they've organized their projects, or the awesome
website that they've made.

## 📝 License

Licensed under the [MIT License](/LICENSE).
