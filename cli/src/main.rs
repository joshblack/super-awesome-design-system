/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
use structopt::StructOpt;

#[derive(StructOpt)]
struct Sads {
    #[structopt(subcommand)]
    cmd: Option<Subcommand>,
}

#[derive(StructOpt)]
enum Subcommand {
    #[structopt(about = "Clean up the project workspace and packages")]
    Clean,

    #[structopt(about = "Create a new component or package")]
    Create(Create),
}

#[derive(StructOpt)]
enum Create {
    #[structopt(about = "Create a new component")]
    Component { name: String },
    #[structopt(about = "Create a new package")]
    Package { name: String },
}

fn main() {
    match Sads::from_args() {
        Sads { cmd: None } => {
            println!("Default command");
        }

        Sads {
            cmd: Some(Subcommand::Clean),
        } => {
            println!("Some command");
        }

        Sads {
            cmd: Some(Subcommand::Create(Create::Component { name })),
        } => {
            println!("Create component with name: {}", name);
        }

        Sads {
            cmd: Some(Subcommand::Create(Create::Package { name })),
        } => {
            println!("Create package with name: {}", name);
        }
    }
}
