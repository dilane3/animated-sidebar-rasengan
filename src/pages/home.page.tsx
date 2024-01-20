import { PageComponent, defineRoutePage } from "rasengan";

class Home extends PageComponent {
  render() {
    return <section className="w-full h-full bg-white"></section>;
  }
}

export default defineRoutePage({
  path: "/",
  title: "Home",
  description: "Home page",
})(Home);
