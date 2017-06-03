import { Case } from 'app/case';
import { Di } from 'app/di';

export default ({prog, fs, config, str}: Di) => {

  prog
    .command('comp', 'Generates angular component')
    .argument('<name>', 'Component name')
    .action((args, options, logger) => {
      const name = Case.for(args.name, 'component');

      logger.info('Creation component: "%s"\n\n', name.dash);


      //
      // 1. Make dir
      //
      fs.dir(name.dash);


      //
      // 2. Make index.ts file
      //


      //
      // 3. HTML template
      //
      fs.tpl(`${name.fileInDir}.html`, require('./main-html'), {
        name: name.title,
      });


      //
      // 4. Style file
      //
      fs.tpl(`${name.fileInDir}.${config.styleExt}`, require('./main-scss'), {
        sharedStylePath: config.sharedStylePath,
      });


      //
      // 5. The component
      //
      fs.tpl(`${name.fileInDir}.ts`, require('./main-ts'), {
        selector: `${config.appPrefix}-${name.dash}`,
        templateFile: `${name.file}.html`,
        styleFile: `${name.file}.scss`,
        className: name.classTyped,
      });


      //
      // 6. Unit-test
      //

      //
      // 7. e2e test
      //


      logger.info('\nDone!\n\n');
    })
  ;

  prog
    .command('in-comp', 'Generates inline angular component')
    .argument('<name>', 'Component name')
    .action((args, options, logger) => {
      const name = Case.for(args.name, 'component');

      logger.info('Creation inline component: "%s"\n\n', name.dash);

      //
      // 3. HTML template
      //
      const template = fs.tplAsStr(require('./main-html'), {
        name: name.title,
      });


      //
      // 4. Style file
      //
      const style = fs.tplAsStr(require('./inline-css'), {
        sharedStylePath: config.sharedStylePath,
      });


      //
      // 5. The inline component
      //
      fs.tpl(`${name.file}.ts`, require('./inline-ts'), {
        selector:  `${config.appPrefix}-${name.dash}`,
        template:  str.indent(template, 2),
        style:     str.indent(style, 2),
        className: name.classTyped,
      });


      //
      // 6. Unit-test
      //

      //
      // 7. e2e test
      //


      logger.info('\nDone!\n\n');
    })

};
