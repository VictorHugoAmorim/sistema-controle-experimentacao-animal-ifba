export class MenuItemModel {
  name: string;
  path: string;
  icon: string;

  constructor(name: string, path: string, icon: string = "home") {
    this.name = name;
    this.path = path;
    this.icon = icon;
  }
}
