import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('service', 'Generates angular service')
  .argument('<name>', 'Service name')
  .option('-i, --init-method', 'Create init method')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'service');

    str.labelCreation(name);

    //
    // 1. Create the service file
    //
    fs.tpl(`${name.file}.ts`, require('./main-ts'), {
      className: name.classTyped,
      camelName: name.camel,
      debug: opts.debug || (opts.debug === undefined && config.debuggerEnabled)
               ? config.debuggerPackage
               : false,
      hasInit: opts.initMethod,
    });

    str.labelDone();
  })

;
