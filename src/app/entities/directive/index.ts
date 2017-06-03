import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('directive', 'Generates angular directive')
  .argument('<name>', 'Directive name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'directive');

    str.labelCreation(name);

    //
    // 1. Create the directive file
    //

    str.labelDone();
  })
;
