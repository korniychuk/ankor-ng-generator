import { Case } from 'app/case';
import { Di } from 'app/di';
import chalk from 'chalk';

export default ({prog, fs, config, str}: Di) => prog
  .command('model', 'Generates angular model')
  .argument('<name>', 'Model name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'component');

    str.labelCreation(name);

    //
    // 1.
    //

    str.labelDone();
  })
;
