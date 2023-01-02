import Login from './pages/login';
import Home from './pages/home';
import WorkshopsList from './pages/workshops-list';
import AddWorkshop from './pages/add-workshop';
var routes = {
    '/login.html': {
        template: 'login',
        Controller: Login
    },
    '/index.html': {
        template: 'home',
        Controller: Home
    },
    '/workshops-list.html': {
        template: 'workshops-list',
        Controller: WorkshopsList
    },
    '/add-workshop.html': {
        template: 'add-workshop',
        Controller: AddWorkshop
    },
    '*': {
        template: 'page-not-found',
        Controller: null
    }
};
var loadPage = function (pathname) {
    var route;
    if (pathname in routes) {
        route = routes[pathname];
    }
    if (route === null || route === void 0 ? void 0 : route.template) {
        var root = document.getElementById('root');
        var tpl = document.getElementById(route.template).innerHTML;
        root.innerHTML = tpl;
    }
    if (route === null || route === void 0 ? void 0 : route.Controller) {
        (new route.Controller()).load();
    }
};
loadPage(location.pathname);
var links = document.querySelectorAll('a');
links.forEach(function (link) {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // 1. Prevent loading of new page when a link is clicked
        var nextPageUrl = link.getAttribute('href');
        history.pushState("", "", nextPageUrl);
        loadPage(location.pathname);
    });
});
//# sourceMappingURL=index.js.map