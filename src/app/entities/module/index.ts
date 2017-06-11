import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('module', 'Generates angular module')
  .argument('<name>', 'Module name')
  .option('-s, --shared', 'Import shared module', prog.BOOL, true)
  .option('-i, --directory', 'Create or no directory for the module', prog.BOOL, true)
  .option('-a, --log-async', 'Show label about async module loading', prog.BOOL, true)
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'module');

    str.labelCreation(name);

    //
    // 1. Make dir
    //
    if (opts.directory) {
      fs.dir(name.dash);
    }

    //
    // 2. The module file
    //
    fs.tpl(`${opts.directory ? name.fileInDir : name.file}.ts`, require('./main-ts'), {
      logAsync: opts.logAsync,
      className: name.classTyped,
      humanTitle: name.title,
      shared: (opts.shared !== undefined ? opts.shared : config.sharedModuleEnabled)
                ? config.sharedModulePath
                : null,
    });

    str.labelDone();
  })
;
