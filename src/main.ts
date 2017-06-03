import './app/entities';
import prog from 'caporal';
import chalk from 'chalk';

import { ConfigLoader } from 'app/config-loader';
import { Di } from 'app/di';

const configLoader = new ConfigLoader();
const isConfigOk = configLoader.hasConfig && configLoader.load();

if (!isConfigOk && process.argv[2] !== 'init') {
  console.warn(chalk.red(`\nError: Can not load config file.`));
}

const version = require('../package.json').version;
prog
  .version(version)
  .command('init', 'Create\\Reset configuration file')
  .action((args, opts, logger) => {
    configLoader.reset();
    configLoader.save();

    logger.info(chalk.green('Done!'));
  })
;

if (isConfigOk) {
  const di: Di = new Di(prog, configLoader.config);
  di.init();
  require('app/entities').default(di);
}

prog.parse(process.argv);
