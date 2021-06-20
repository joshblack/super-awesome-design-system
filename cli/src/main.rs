/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
use env_logger::{fmt::Color, Builder};
use log::{error, info, Level};
use project::Project;
use std::process;
use structopt::StructOpt;

mod project;

#[derive(StructOpt)]
struct Sads {
    #[structopt(subcommand)]
    cmd: Option<Subcommand>,

    #[structopt(flatten)]
    verbose: clap_verbosity_flag::Verbosity,
}

#[derive(StructOpt)]
enum Subcommand {
    #[structopt(about = "Clean up the project workspace and packages")]
    Clean,

    #[structopt(about = "Create a new component or package")]
    Create(Create),

    #[structopt(about = "initialize dsm to be used in your project")]
    Init,
}

#[derive(StructOpt)]
enum Create {
    #[structopt(about = "Create a new component")]
    Component { name: String },
    #[structopt(about = "Create a new package")]
    Package { name: String },
}

type Result<T> = std::result::Result<T, Box<dyn std::error::Error>>;

fn main() {
    let Sads { cmd, verbose } = Sads::from_args();

    init_logger(verbose.log_level());

    if let Err(err) = try_main(cmd) {
        error!("{}", err);
        process::exit(1);
    }
}

fn try_main(cmd: Option<Subcommand>) -> Result<()> {
    let cwd = std::env::current_dir().expect("Expected to find current working directory");
    match cmd {
        None => {
            info!("Default command");
            let _project = Project::detect(cwd)?;
            Ok(())
        }

        Some(Subcommand::Init) => {
            info!("Initialize project in {:?}", cwd);
            Ok(())
        }

        Some(Subcommand::Clean) => {
            info!("Some command");
            let _project = Project::detect(cwd)?;
            Ok(())
        }

        Some(Subcommand::Create(Create::Component { name })) => {
            info!("Create component with name: {}", name);
            let _project = Project::detect(cwd)?;
            Ok(())
        }

        Some(Subcommand::Create(Create::Package { name })) => {
            info!("Create package with name: {}", name);
            let _project = Project::detect(cwd)?;
            Ok(())
        }
    }
}

fn init_logger(level: Option<Level>) {
    if let Some(level) = level {
        let mut builder = Builder::from_default_env();

        builder
            .filter(None, level.to_level_filter())
            .format(move |buf, record| {
                use std::io::Write;

                let mut style = buf.style();
                let formatted = match level {
                    Level::Trace => style.set_color(Color::Magenta).value("trace"),
                    Level::Debug => style.set_color(Color::Blue).value("debug"),
                    Level::Info => style.set_color(Color::Green).value("info"),
                    Level::Warn => style.set_color(Color::Yellow).value("warn"),
                    Level::Error => style.set_color(Color::Red).value("error"),
                };

                writeln!(buf, "{} {}", formatted, record.args())
            })
            .init()
    }
}
