export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;

  cosntructor(name: string, desc: string, imagePath: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;

  }
}
