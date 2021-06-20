/**
 * Copyright (c) Super Awesome Design System
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
use std::path::PathBuf;

#[derive(Debug)]
pub enum ProjectError {
    ProjectNotFound,
}

impl std::fmt::Display for ProjectError {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        match self {
          Self::ProjectNotFound => write!(
            f,
            "It looks like you are trying to run a command inside of a project that has not yet been initialized.

If you would like to initialize your project, run `dsm init` to continue."
          )
        }
    }
}

impl std::error::Error for ProjectError {}

pub struct Project;

impl Project {
    pub fn detect(_cwd: PathBuf) -> Result<Self, ProjectError> {
        Err(ProjectError::ProjectNotFound)
    }
}
