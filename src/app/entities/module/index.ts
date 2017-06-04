import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('module', 'Generates angular module')
  .option('-s, --shared', 'Import shared module', prog.BOOL)
  .argument('<name>', 'Module name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'module');

    str.labelCreation(name);

    //
    // 1. The module file
    //
    fs.tpl(`${name.file}.ts`, require('./main-ts'), {
      className: name.classTyped,
      humanTitle: name.title,
      shared: (opts.shared !== undefined ? opts.shared : config.sharedModuleEnabled)
                ? config.sharedModulePath
                : false,
    });

    str.labelDone();
  })
;
