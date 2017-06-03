import fs from 'fs';
import _ from 'lodash';
import chalk from 'chalk';

import { Di } from 'app/di';

export class FsWrapper {

  private path: string;

  public constructor({ config }: Di) {
    this.path = config.path();
  }

  public dir(dirName: string): void {
    if (fs.existsSync(this.fullPath(dirName))) {
      console.log(`%s:  ${dirName} ...`, chalk.cyan('Dir'), chalk.yellow(`EXISTS`));
    } else {
      fs.mkdirSync(this.fullPath(dirName));
      console.log(`%s:  ${dirName} ... `, chalk.cyan('Dir'), chalk.green(`OK`));
    }
  }

  public tplAsStr(rawTpl: string, vars: object = {}): string {
    const compiler = _.template(rawTpl);

    const compiledTpl = compiler(vars);

    return compiledTpl;
  }

  public tpl(fileName: string, rawTpl: string, vars: object = {}): void {
    this.file(fileName, this.tplAsStr(rawTpl, vars));
  }

  public file(fileName: string, content: string): void {
    const path = this.fullPath(fileName);
    const exists = fs.existsSync(path);

    fs.writeFileSync(path, content);
    console.log(`%s: ${fileName} ... `, chalk.cyan('File'), exists ? chalk.yellow('OVERWROTE') : chalk.green('OK'));
  }

  private fullPath(name: string): string {
    return `${this.path}/${name}`;
  }

}
