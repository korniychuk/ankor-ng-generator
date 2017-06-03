import fs from 'fs';
import _ from 'lodash';

import { Di } from 'app/di';

export class FsWrapper {

  private path: string;

  public constructor({ config }: Di) {
    this.path = config.path();
  }

  public dir(dirName: string): void {
    if (fs.existsSync(this.fullPath(dirName))) {
      console.log(`Dir:  ${dirName} ... EXISTS`);
    } else {
      fs.mkdirSync(this.fullPath(dirName));
      console.log(`Dir:  ${dirName} ... OK`);
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
    fs.writeFileSync(this.fullPath(fileName), content);
    console.log(`File: ${fileName} ... OK`);
  }

  private fullPath(name: string): string {
    return `${this.path}/${name}`;
  }

}
