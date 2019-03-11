function adjustJustifyContent () {
  if (window.location.hash) {
    document.getElementById('app').style.justifyContent = 'flex-start'
  } else {
    document.getElementById('app').style.justifyContent = 'center'
  }
}

function resetJustifyContent () {
  document.getElementById('app').style.justifyContent = 'center'
}

function Route (name, htmlName, defaultRoute) {
  try {
    if (!name || !htmlName) {
      throw new Error('name and htmlName are mandatories')
    }
    this.constructor(name, htmlName, defaultRoute)
  } catch (err) {
    console.error(err)
  }
}

Route.prototype = {
  name: undefined,
  htmlName: undefined,
  defaultRoute: undefined, 
  constructor: function (name, htmlName, defaultRoute) {
    this.name = name
    this.htmlName = htmlName
    this.defaultRoute = defaultRoute
  },
  isActiveRoute: function (hashedPath = '') {
    return hashedPath.replace('#', '') === this.name
  }
}

function Router (routes) {
  try {
    if (!routes) {
      throw new Error('routes param is mandatory')
    }
    this.constructor(routes)
    this.init()
  } catch (err) {
    console.error(err)
  }
}

Router.prototype = {
  routes: undefined,
  rootElem: undefined,
  constructor: function (routes) {
    this.routes = routes
    this.rootElem = document.getElementById('app')
  },
  init: function () {
    (function (scope, routes) {
      window.addEventListener('hashchange', function (e) {
        scope.hasChanged(scope, routes)
      })
    })(this, this.routes)
    this.hasChanged(this, this.routes)
  },
  hasChanged: function (scope, routes) {
    if (window.location.hash.length > 0) {
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i]
        if (route.isActiveRoute(window.location.hash.substr(1))) {
          scope.goToRoute(route.htmlName)
        }
      }
    } else {
      for (let i = 0; i < routes.length; i++) {
        const route = routes[i]
        if (route.defaultRoute) {
          scope.goToRoute(route.htmlName)
        }
      }
    }
  },
  goToRoute: function (htmlName) {
    (function (scope) {
      const url = 'views/' + htmlName
      const xhttp = new XMLHttpRequest()

      xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
          scope.rootElem.innerHTML = this.responseText
        }
      }
      xhttp.onloadstart = function () {
        resetJustifyContent()
        scope.rootElem.innerHTML = '<h5>loading...</h5>'
      }
      xhttp.onload = function () {
        adjustJustifyContent()
      }

      xhttp.open('GET', url, true)
      xhttp.send()
    })(this)
  }
}

function main () {
  new Router([
    new Route('home', 'home.html', true),
    new Route('profile', 'profile.html'),
    new Route('publication', 'publication.html'),
    new Route('projects', 'projects.html')
  ])
}
main()