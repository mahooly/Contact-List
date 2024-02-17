# Contact Management Web Application

This project is a simple contact management web application that allows users to add, edit, and delete contacts. It is
built with React and uses Bootstrap for styling. The application stores contact information in the browser's
localStorage, making it a client-side solution.

## Features

- List all contacts
- Add a new contact
- Edit an existing contact
- Delete a contact
- Search through contacts

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- [Node.js](https://nodejs.org/en/) (which comes with [npm](http://npmjs.com)) installed on your computer.

### Installation

Clone the project repository and install the necessary dependencies by running:

```shell
git clone git clone https://github.com/mahooly/Contact-List.git
cd contact-list
npm install
```

### Usage

Start the application locally with:

```shell
npm start
```

The application will be available at http://localhost:3000. Navigate to this URL in your web browser to interact with
the application.

### Local Storage Usage

This application uses the browser's local storage to persist contact data. This approach ensures privacy by storing data
locally on the user's device without transferring it over the network. Note that clearing the browser's local storage
will remove all saved contacts.