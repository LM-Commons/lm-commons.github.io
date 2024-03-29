# Introduction
>
> This is work in progress to convert to Laminas
>
# LmcAdmin Module for Laminas Framework
Created by [Jurian Sluiman](http://juriansluiman.nl) and [Martin Shwalbe](https://github.com/Hounddog).

## Introduction
LmcAdmin is a minimal admin interface for generic administrative purposes. It is a common screen with navigation that hides behind authentication and authorization.

## Installation
LmcAdmin is enabled to be installed via composer. Load `lm-commons/lmc-admin` in your `composer.json` file. You can specify its version (currently only 1.0.0 is recommended) or use `dev-master` to load the latest version from master. Enable LmcAdmin in your `module.config.php` configuration file.

If you do not want to use composer, clone this project (either as a git submodule or not) into `./vendor/` directory.

## Usage
LmcAdmin allows you to create routes under a single parent "admin" route. You can also use it to enable navigation in your admin layout. Furthermore integration of [LmcRbacMvc](https://github.com/LM-Commons/LmcRbacMvc) is provided.

The complete configuration is flexible, so you can update the zfcadmin parent route, its children, the navigation and all default provided view scripts. Read more in the [documentation](docs/lmc-admin/01-introduction.md) about usage and customization of LmcAdmin.

## Development
LmcAdmin is currently under development. The authors feel LmcAdmin is stable enough for production versions and you can always fix your LmcAdmin version to a specific tag.

## Support

- File issues at https://github.com/LM-Commons/LmcAdmin/issues.
- Ask questions in the [LM-Commons gitter](https://gitter.im/LM-Commons/community) chat.