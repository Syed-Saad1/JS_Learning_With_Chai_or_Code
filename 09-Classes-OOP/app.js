class React {
  constructor() {
    this.library = "React";
    this.server = "https://localhost:300";
    document
      .querySelector("button")
      .addEventListener("click", this.handleClick.bind(this));
  }
  handleClick() {
    console.log("Button Clicked");
    console.log(this);
  }
}
const app = new React();
