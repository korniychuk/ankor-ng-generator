import * as Inflected from 'inflected';

export class Case {

  public dash: string;
  public title: string;
  public camel: string;
  public class: string;
  public constant: string;

  public entityType: string;

  public get file(): string {
    return `${this.dash}.${this.entityType}`;
  }

  public get fileInDir(): string {
    return `${this.dash}/${this.dash}.${this.entityType}`;
  }

  public get classTyped(): string {
    return this.class + Inflected.camelize(this.entityType);
  }

  public constructor(name: string, entityType: string) {
    this.dash     = name;
    this.title    = Inflected.titleize(name);
    this.camel    = Inflected.camelize(name.replace(/-/g, '_'), false);
    this.class    = Inflected.camelize(name.replace(/-/g, '_'));
    this.constant = name.replace(/-/g, '_').toUpperCase();

    this.entityType = entityType;
  }

  public toString(): string {
    return this.dash;
  }

  public static for(name: string, entityType: string): Case {
    return new Case(name, entityType);
  }

}
