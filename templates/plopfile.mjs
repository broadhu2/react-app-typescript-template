const COMPONENT_DIRECTORY = "../src/components";
const COMPONENT_NAME = "{{pascalCase name}}";

/**
 * Plopfile generator
 * @param {import('plop').NodePlopAPI} plop
 *
 * @see https://blog.logrocket.com/automatically-generate-react-components-plop-js/
 */
export default function (plop) {
  plop.setHelper("includes", (string, substring) => {
    return string.includes(substring);
  });

  plop.setGenerator("component", {
    description: "Create a reusable component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions: [
      {
        // Plop will create directories for us if they do not exist
        type: "addMany",
        destination: `${COMPONENT_DIRECTORY}/${COMPONENT_NAME}`,
        templateFiles: `Component/*.hbs`,
      },
      {
        // Adds an index.js barrel file if it does not already exist
        type: "add",
        path: `${COMPONENT_DIRECTORY}/index.ts`,
        templateFile: "barrel-file.ts.hbs",
        // If index.js already exists in this location, skip this action
        skipIfExists: true,
      },
      {
        // Action type 'append' injects a template into an existing file
        type: "append",
        path: `${COMPONENT_DIRECTORY}/index.ts`,
        // Pattern tells plop where in the file to inject the template
        pattern: `/* PLOP_INJECT_IMPORT */`,
        template: `import ${COMPONENT_NAME} from "./${COMPONENT_NAME}";`,
      },
      {
        type: "append",
        path: `${COMPONENT_DIRECTORY}/index.ts`,
        pattern: `/* PLOP_INJECT_EXPORT */`,
        template: `  ${COMPONENT_NAME},`,
      },
    ],
  });
}
