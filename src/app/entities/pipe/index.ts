import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('pipe', 'Generates angular pipe')
  .argument('<name>', 'Pipe name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'component');

    logger.info('Creation pipe: "%s"\n\n', name.dash);

    //
    // 1.
    //

    logger.info('\nDone!\n\n');
  })
;
