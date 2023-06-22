# Get Started with contributing to native-base-components: Building a New Component using yarn scaffold

## Introduction
Are you ready to unleash your creativity and contribute to the native-base-components monorepo? With the `yarn scaffold` command, you can effortlessly generate files and folders and embark on the exciting journey of building your own component. In this guide, we'll walk you through the steps of creating a new component using the `yarn scaffold` command. So let's dive in and bring your ideas to life!

## Step 1: Run Yarn Scaffold Command
To get started, open your terminal and navigate to the project directory. Once you're in the correct location, execute the following command:

```lua 
yarn scaffold create <component-name>
```

This command will initiate the scaffolding process and create a new component based on the provided name.

## Step 2: Generated Files and Folders
Once you run the Yarn Scaffold command, the magic begins! The scaffold app will automatically generate the necessary files and folders required for your new component. It will put them in the correct place within the native-base-components monorepo. The generated files include the component's Typescript files, config, and other relevant resources.

Here's an example of the generated structure:

```
native-base-<component-name>/
├── src/
│ ├── <component-name>/
│ │ ├── index.ts
│ │ ├── ComponentName.tsx
│ │ ├── ComponentName.spec.tsx
│ ├── index.ts
├── package.json
└── eslintrc.js
└── jest.config.js
└── prettierrc
└── tsconfig.json
```


Feel free to explore the generated files and make any necessary modifications to suit your component's requirements.

## Step 3: Start Editing the Files
Now that you have the initial files and folders set up, it's time to let your creativity flow! Open the files within your favorite code editor and start editing. You can make changes to the component's logic in the Typescript file and make any other modifications as needed.

Remember, this is where your imagination comes into play. Feel free to experiment, iterate, and refine your component until it matches your vision.

That's it! You've successfully created a new component using the Yarn Scaffold command. Now it's time to add your personal touch and contribute to the native-base-components monorepo. Happy coding!
