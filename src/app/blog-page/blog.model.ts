export class Blog {
  public title: string;
  public auth: string;
  public date: string;
  public img: string;
  public content1: string;
  public content2: string;
  public content3: string;

  constructor(title: string, auth:string, date:string, img: string, content1: string, content2: string, content3: string) {
    this.title = title;
    this.auth = auth;
    this.date = date;
    this.img = img;
    this.content1 = content1;
    this.content2 = content2;
    this.content3 = content3;
  }
}
