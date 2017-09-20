import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => prog
  .command('page', 'Generates angular module')
  .option('-s, --shared', 'Import shared module', prog.BOOL)
  .option('-i, --inline-routes', 'If true separate routes file will be not created', prog.BOOL, false)
  .option('-c, --component-route',
    'If true route of future component and component declaration will be added to the module',
    prog.BOOL,
    true
  )
  .option('-u, --url', 'Specify component route url', null, '')
  .argument('<name>', 'Page name')
  .action((args, opts, logger) => {
    const name = Case.for(args.name, 'module');

    str.labelCreation(name, 'page module');

    //
    // 1. Create page directory
    //
    fs.dir(`+${name}`);

    //
    // 2. Create index file
    //
    const indexTpl = `export { ${name.classTyped} } from './${name.file}';\n`;
    fs.file(`+${name}/index.ts`, indexTpl);

    const routeObjectTpl = fs.tplAsStr(require('./route-object'), {
      componentClass: `${name.class}Component`,
      url: opts.url,
    });

    //
    // 3. Routes file
    //
    if (!opts.inlineRoutes) {
      fs.tpl(`+${name}/${name}.routes.ts`, require('./routes-ts'), {
        componentFile: opts.componentRoute ? `${name.dash}.component` : null,
        componentClass: `${name.class}Component`,
        routeObject: str.indent(routeObjectTpl),
      })
    }

    //
    // 4. The module file
    //
    fs.tpl(`+${name.fileInDir}.ts`, require('./main-ts'), {
      className: name.classTyped,
      componentFile: opts.componentRoute ? `${name.dash}.component` : null,
      componentClass: `${name.class}Component`,

      routeObject: str.indent(routeObjectTpl, 3),
      routesFile: `${name}.routes`,
      inlineRoutes: opts.inlineRoutes,

      humanTitle: name.title,
      shared: (opts.shared !== undefined ? opts.shared : config.sharedModuleEnabled)
                ? config.sharedModulePath
                : null,
      envDevName: config.envDevName,
    });

    //
    // 5. Change working directory to the created module directory
    // ... doesn't work
    //
    // fs.cd(`./+${name}`);

    str.labelDone();
  })
;
