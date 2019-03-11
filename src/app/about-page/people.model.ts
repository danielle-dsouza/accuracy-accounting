export class Person {

    public name: string;
    public job: string;
    public desc: string;
    public imgPath: string;

    constructor(name: string, job: string, desc: string, imgPath: string) {
        this.name = name;
        this.job = job;
        this.desc = desc;
        this.imgPath = imgPath;
    }
}