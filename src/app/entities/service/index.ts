import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('service', 'Generates angular service')
  .argument('<name>', 'Service name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'component');

    str.labelCreation(name);

    //
    // 1.
    //

    str.labelDone();
  })
;
