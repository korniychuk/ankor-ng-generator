import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('pipe', 'Generates angular pipe')
  .argument('<name>', 'Pipe name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'pipe');

    str.labelCreation(name);

    //
    // 1.
    //
    fs.tpl(`${name.file}.ts`, require('./main-ts'), {
      selector: `${config.appPrefix}${name.class}`,
      className: name.classTyped,
      debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
                   ? config.debuggerPackage
                   : false,
      description: opts.description,
    });

    str.labelDone();
  })
;
