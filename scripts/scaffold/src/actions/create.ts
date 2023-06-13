import * as prompt from "prompt";
import * as colors from "colors/safe";
import { cd, cp, exec, ls, mkdir, mv, sed, touch } from "shelljs";
import * as path from "path";

const confirmNameSchema = (name: string) => ({
  properties: {
    confirm: {
      description: colors.magenta(
        `You are about to scaffold a new folder structure for component: ${name}, is this correct?`
      ),
      pattern: /^(yes|no|y|n)$/i,
      message: "Please enter yes or no.",
      required: true,
    },
    name: {
      description: colors.magenta("Let's pick a name for your component then"),
      ask: () =>
        prompt.history("confirm")!.value === "n" ||
        prompt.history("confirm")!.value === "no",
      default: name,
    },
  },
  messages: {
    description: "Scaffold > ",
  },
});

const getComponentName = (input: string): string => {
  const hyphenated = input.replace(/[\s_]/g, "-");

  const words = hyphenated.match(/[A-Za-z][a-z]*/g);
  if (!words) {
    return input;
  }

  return words.map((word) => word.toLowerCase()).join("-");
};

const getComponentNameInPascalCase = (input: string): string =>
  `${input.charAt(0).toUpperCase()}${input
    .toLowerCase()
    .replace(/-(.)/g, (_, char) => char.toUpperCase())
    .slice(1)}`;

const createAction = async (args: any, _: any, logger: any) => {
  prompt.start();
  const result = await prompt.get(confirmNameSchema(args.name));

  prompt.stop();
  logger.info(
    colors.blue("⚙️ Moving folders and files to the correct folders...")
  );
  const componentName = getComponentName(result.name as string);

  const componentPath = path.resolve(
    process.cwd(),
    `../../packages/native-base-${componentName}`
  );
  const templatePath = path.resolve(process.cwd(), "src/templates/component");
  mkdir("-p", componentPath);

  cp("-R", path.join(templatePath, "*"), componentPath);
  ls("-R", componentPath).forEach((file) => {
    mv(
      path.join(componentPath, file),
      path.join(componentPath, file.replace(/^_/, ""))
    );
  });

  ls(path.resolve(componentPath, "package.json")).forEach((file) => {
    sed("-i", "\\[NAME\\]", componentName, file);
  });

  const fileName = getComponentNameInPascalCase(componentName);
  const srcDir = path.resolve(`${componentPath}/src`);
  const componentDir = path.resolve(`${srcDir}/${fileName}`);
  mkdir("-p", componentDir);
  touch(path.resolve(`${componentDir}/${fileName}.tsx`));
  touch(path.resolve(`${componentDir}/${fileName}.spec.tsx`));
  touch(path.resolve(`${componentDir}/index.ts`));
  touch(path.resolve(srcDir, "index.ts"));

  logger.info(colors.blue("⚙️ Installing dependencies..."));
  cd(path.resolve(process.cwd(), "../.."));
  exec("yarn install > /dev/null 2>&1");
  logger.info(
    colors.green(`✅ Succesfully scaffolded the ${fileName} folders and files`)
  );
};

export default createAction;
