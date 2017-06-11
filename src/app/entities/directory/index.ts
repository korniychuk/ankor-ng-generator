import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('directory', 'Generates directory with index.ts file')
  .argument('<name>', 'Module name')
  .option('-n, --prefix-name', `Add '{prefix-name}_' to all constants`)
  .option('-d, --declarations', 'Add *_DECLARATIONS constant')
  .option('-s, --services', 'Add *_CUSTOM constant')
  .option('-c, --customs', 'Add any your custom constant', prog.REPEATABLE)
  .option('-o, --components', 'Add *_COMPONENTS constant')
  .option('-p, --pipes', 'Add *_PIPES constant')
  .option('-i, --directives', 'Add _DIRECTIVES constant')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, '');

    str.labelCreation(name);

    let customs: string[] = typeof opts.customs === 'string' && opts.customs ? [ opts.customs ] :
                            opts.customs instanceof Array ? opts.customs.filter((i) => !!i) :
                            [];

    customs = customs.map((oneCustomItem) => Case.for(oneCustomItem, '').constant);

    //
    // 1. Make directory
    //
    fs.dir(name.dash);

    //
    // 2. The module file
    //
    const tpl = fs
      .tplAsStr(require('./main-ts'), {
        name: typeof opts.prefixName === 'string' ? Case.for(opts.prefixName, '').constant : undefined,

        declarations: opts.declarations,
        services:     opts.services,
        customs,
        components:   opts.components,
        pipes:        opts.pipes,
        directives:   opts.directives,
      })
      .replace(/\n{2,}$/m, '\n');
    fs.file(`${name}/index.ts`, tpl);

    str.labelDone();
  })
;
