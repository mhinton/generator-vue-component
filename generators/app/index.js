// Yeoman Documentation: https://yeoman.io/authoring/index.html

var Generator = require("yeoman-generator");

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option("apollo");

    // Read the component name from the command line
    this.argument("componentName", { type: String, required: false });
    if (this.options.componentName) {
      // Set component name if specified
      this.componentName = this.options.componentName;
      // Default creating a test file to true
      this.testFile = "Y";
    }
  }

  async prompting() {
    if (!this.options.componentName) {
      // Prompt for component name and whether or not to create a test file for it.
      const answers = await this.prompt([
        {
          type: "input",
          name: "name",
          message: "Component name: ",
        },
        {
          type: "input",
          name: "testFile",
          message: "Add test file (Y/N): ",
          default: "Y",
        },
      ]);
      this.componentName = answers.name;
      this.testFile = answers.testFile;
    }
  }

  // stateVals() {
  //   this.log("componentName:", this.componentName);
  //   this.log("test file:", this.testFile);
  // }

  writing() {
    this.fs.copyTpl(
      this.templatePath("component.vue"),
      this.destinationPath(
        `components/${this.componentName}/${this.componentName}.vue`
      ),
      { ComponentName: this.componentName, apollo: this.options.apollo }
    );
    if (this.testFile !== "N" && this.testFile !== "n") {
      this.fs.copyTpl(
        this.templatePath("component.spec.js"),
        this.destinationPath(
          `components/${this.componentName}/${this.componentName}.spec.js`
        ),
        { ComponentName: this.componentName }
      );
    }
  }
};
