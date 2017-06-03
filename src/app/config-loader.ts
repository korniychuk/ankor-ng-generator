import findConfig from 'find-config';
import fs from 'fs';

export class Config {
  public rootDir: string         = 'src';
  public outDir: string          = 'dist';
  public appPrefix: string       = 'app';
  public indentation: string     = '  ';

  public styleExt: string        = 'scss';
  public sharedStylePath: string = '~styles/shared';

  public useUnitTests: boolean   = false;
  public useE2ETests: boolean    = false;

  public debuggerEnabled: boolean = true;
  public debuggerPackage: string = 'app/core/service';

  public constructor(data: Config = <Config> {}) {
    Object.assign(this, data);
  }

  public path(...relativePath: Array<string | { toString(): string }>): string {
    if (!relativePath.length) {
      return process.cwd();
    }

    const parts = [ process.cwd() ];

    relativePath.forEach((item) => {
      const path: string = item instanceof Object
        ? item.toString()
        : <string> item;

      parts.push(path);
    });

    return parts.join('/');
  }

}

export class ConfigLoader {
  private static readonly fileName = '.ng-generator.json';

  private configPath: string;
  private _config: Config;

  public get hasConfig(): boolean {
    return !!this.configPath;
  }

  public constructor() {
    this.findConfig();
  }

  public load(): boolean {
    const strConfig = fs.readFileSync(this.configPath).toString();
    const jsonConfig = JSON.parse(strConfig);
    if (!jsonConfig) {
      return false;
    }

    this._config = new Config(jsonConfig);
    return true;
  }

  public reset(): void {
    if (!this.configPath) {
      this.configPath = process.cwd() + '/' + ConfigLoader.fileName;
    }
    this._config = new Config();
  }

  public save(): void {
    const configStr = JSON.stringify(this._config, null, 2);
    fs.writeFileSync(this.configPath, configStr);
  }

  public get config(): Config {
    return Object.freeze(this._config || <Config> {});
  }

  private findConfig(): boolean {
    this.configPath = findConfig(ConfigLoader.fileName);
    return !!this.configPath;

  }

}
