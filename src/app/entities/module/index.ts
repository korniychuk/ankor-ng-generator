import { Case } from 'app/case';
import { Di } from 'app/di';
import chalk from 'chalk';

export default ({prog, fs, config, str}: Di) => prog
  .command('module', 'Generates angular module')
  .argument('<name>', 'Module name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'component');

    str.labelCreation(name);

    //
    // 1.
    //

    str.labelDone();
  })
;
