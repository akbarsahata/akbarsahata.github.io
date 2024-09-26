function adjustJustifyContent() {
  const appElement = document.getElementById("app");
  appElement.style.justifyContent = window.location.hash ? "flex-start" : "center";
}

function resetJustifyContent() {
  const appElement = document.getElementById("app");
  appElement.style.justifyContent = "center";
}

class Route {
  constructor(name, htmlName, defaultRoute = false) {
    if (!name || !htmlName) {
      throw new Error("name and htmlName are mandatory");
    }
    this.name = name;
    this.htmlName = htmlName;
    this.defaultRoute = defaultRoute;
  }

  isActiveRoute(hash = "") {
    return hash.replace("#", "") === this.name;
  }
}

class Router {
  constructor(routes) {
    if (!routes) {
      throw new Error("routes param is mandatory");
    }
    this.routes = routes;
    this.rootElem = document.getElementById("app");
    this.init();
  }

  init() {
    window.addEventListener("hashchange", () => this.hasChanged());
    this.hasChanged();
  }

  hasChanged() {
    const hash = window.location.hash.substr(1);
    if (hash.length > 0) {
      for (const route of this.routes) {
        if (route.isActiveRoute(hash)) {
          this.goToRoute(route.htmlName);
          return;
        }
      }
    } else {
      for (const route of this.routes) {
        if (route.defaultRoute) {
          this.goToRoute(route.htmlName);
          return;
        }
      }
    }
  }

  goToRoute(htmlName) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        this.rootElem.innerHTML = xhr.responseText;
      }
    };
    xhr.onloadstart = () => {
      resetJustifyContent();
      this.rootElem.innerHTML = "<h5>loading...</h5>";
    };
    xhr.onload = () => {
      adjustJustifyContent();
    };
    xhr.open("GET", `views/${htmlName}`, true);
    xhr.send();
  }
}

function main() {
  new Router([
    new Route("home", "home.html", true),
    new Route("profile", "profile.html"),
    new Route("publication", "publication.html"),
    new Route("projects", "projects.html"),
  ]);
}

main();
