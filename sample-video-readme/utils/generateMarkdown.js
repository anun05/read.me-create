
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ![Badge for GitHub repo top language](https://img.shields.io/static/v1?label=License&message=${data.License}&color=brightgreen) 
  

  ## Description
  ${data.Description}


  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#Usage)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [License](#License)
  * [Questions](#Questions)

  ## Installation
  ${data.Installation}

  ## Usage
  ![Gif demo of README.md-Generator](./README.md-Generator-DemoGit.gif)
  ${data.Usage}

  Demo video link: [Demo Video](https://watch.screenstify.com)

  ## Contributing
  ${data.Contributing}

  ## Tests
  ${data.Tests}

  ## License
  ${data.License}

  ## Questions
  My gitHUb profile is : https://github.com/${data.GitHub}
  You can also send me an email at : ${data.Email}

`;
}

module.exports = generateMarkdown;
