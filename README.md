# Sulu CMS Project

This is the GitHub repository for the [nevercodealone.de](https://nevercodealone.de) project.

The project utilizes the Sulu CMS, a flexible Symfony content management system. Sulu provides a model-view-controller framework and a wide range of features including multilingual support and room for extension.

The project follows the best practices for web accessibility. Web accessibility ensures that the content is accessible on a wide range of devices and requires thoughtful and deliberate action to ensure no visitor is excluded.

## Development Environment
We use DDEV for our local development. DDEV is an open-source tool that uses Docker to build local development environments.

## Building the Project

We employ Webpack for handling all front-end resources. JavaScript, Stylesheets, Images and other files are all managed by Webpack.

## Running The Project

After setting up DDEV and Webpack, follow below steps:

* Clone the project
* Run `ddev start`
* Navigate to the project url provided by DDEV in your web browser

## Running Webpack
Builds the project and watches for changes. This is the recommended way to develop.
```
npm run watch
```

Build the project assets for production.
```
npm run build
```

## Cypress.io website for End-To-End testing
We use custom and base tests made my [TESTIFy.TEAM](https://www.testify.team/). Visit [Cypress.io](https://www.cypress.io/) for more info.

## YouTube playlist with over 50 german tutorial videos.
Here is a great read on Symfony CMS Sulu:
[Roland Golla - YouTube Playlist](https://www.youtube.com/playlist?list=PLKrKzhBjw2Y_bsIrig7rNLCXgZyYGMRgH)


### Offical YouTube content creator for Browser Stack
For End-To-End testing, BrowserStack is utilized. Visit [BrowserStack](https://www.browserstack.com/) for more info.

### Feedback/Contribution
Feel free to give your feedback or to contribute!

### Who is behind this project?
This project is maintained by [nevercodealone.de](https://nevercodealone.de) and [TESTIFy.TEAM](https://www.testify.team/) and [Roland Golla](https://rolandgolla.de/).
