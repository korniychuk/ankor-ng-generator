import './app/entities';
import prog from 'caporal';
import chalk from 'chalk';

import { Config, ConfigLoader } from 'app/config-loader';
import { FsWrapper } from 'app/fs-wrapper';
import { Di } from 'app/di';
import { StringHelper } from 'app/string-helper';

const configLoader = new ConfigLoader();
if (!configLoader.hasConfig || !configLoader.load()) {
  console.warn(chalk.red(`\nError: Can not load config file.`));
}

const config: Config = configLoader.config;

prog
  .version('1.0.0')
  .command('init', 'Create configuration file')
  .action(() => {
    configLoader.reset();
    configLoader.save();
  })
;

if (configLoader.hasConfig) {
  const di: Di = <Di> {};

  di.prog = prog;
  di.config = config;
  di.fs = new FsWrapper(di);
  di.str = new StringHelper(di);

  require('app/entities').default(di);
}

prog.parse(process.argv);
