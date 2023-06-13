#!/usr/bin/env node
import * as prog from "caporal";
import createAction from "./actions/create";

prog
  .version("1.0.0")
  .command("create", "Creates a new package")
  .argument(
    "<name>",
    "The name of the package you want to scaffold, will be prepended with @moes-media/native-base-components- and used as the package name"
  )
  .action(createAction);

prog.parse(process.argv);
