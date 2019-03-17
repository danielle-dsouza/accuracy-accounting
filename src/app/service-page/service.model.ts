export class Service {
  public name: string;
  public desc: string;
  public title1: string;
  public sub1: string;
  public title2: string;
  public sub2: string;

  constructor(name: string, desc: string, title1: string, sub1: string, title2: string, sub2: string) {
    this.name = name;
    this.desc = desc;
    this.title1 = title1;
    this.sub1 = sub1;
    this.title2 = title2;
    this.sub2 = sub2;
  }
}
