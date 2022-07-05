export default class User {
  private name: string;
  private isAdmin: boolean = false;

  constructor(params: { name: string; isAdmin: boolean }) {
    this.name = params.name;
    this.isAdmin = params.isAdmin;
  }

  getIsAdmin = () => this.isAdmin;
}
