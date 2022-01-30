# employee-tracker

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

A Node.js command-line application that allows non-developers to easily view and interact with information stored in databases. This interface is an example of a **content management systems (CMS)**.

The task was to develop this command-line application from scratch to manage a company's employee database, using Node.js, Inquirer, and MySQL.

## Table of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Directory Structure](#directory-structure)
- [Technologies Used](#technologies-used)
- [Schema](#schema)
- [Setup](#setup)
- [Demo](#demo)
- [Acknowledgements](#acknowledgements)
- [Questions](#questions)
- [License](#license)

## Installation

​Install dependencies using:

    npm install

## Usage

Login to mysql using the terminal using and the follow with your password:

    mysql -u root -p

The db schema and seeds will be added using the following:

```mysql
source .db/schema.sql

source .db/seeds.sql
```

The application will then be invoked by using the following command:

    npm start

## Directory Structure

```md
.
├── assets/
├── db/
├── src/
│ ├── helpers/
│ └── questions/
├── .gitignore
├── index.js
├── package.json
└── README.md
```

## Technologies Used

- MySQL
- Node.js
- mysql2
- inquirer
- dotenv
- cli-color
- console.table

## Schema

![Schema](./assets/schema-image.png)

## Setup

- Nodejs must be installed
- MySQL must be installed
- MySQL Workbench (a MySQL GUI - highly recommended)
- Text editor (VS Code recommended)

## Demo

[![Watch the video](./assets/my-video-player.png)](https://drive.google.com/file/d/1RoJ_t8hFmkak7h2BDBvQsZf7Kkvo2wDw/view)

## Acknowledgements

- https://www.npmjs.com/package/dotenv
- https://www.npmjs.com/package/mysql2
- https://www.npmjs.com/package/inquirer
- https://www.npmjs.com/package/cli-color
- https://www.npmjs.com/package/console.table

## Questions

Created by: [@moedaaboul](https://github.com/moedaaboul)

Feel free to contact me via [muhammad.daaboul1989@gmail.com](muhammad.daaboul1989@gmail.com)!

## License

This work is licensed under
[MIT](#).
