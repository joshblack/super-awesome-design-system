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

| Language   | Command                    | Description                                            |
| ---------- | -------------------------- | ------------------------------------------------------ |
| JavaScript | `yarn format`              | Format files in the project using `prettier`           |
| Rust       | `cargo fmt`                | Format rust files using cargo fmt                      |
| Rust       | `cargo test`               | Run the tests for the Rust files in the workspace      |
| Rust       | `cargo clippy`             | Run `clippy` on files in the Rust workspace            |
| Rust       | `cargo install --path cli` | Install the `dsm` cli as an executable on your machine |

## 📝 License

Licensed under the [MIT License](/LICENSE).
