
import Login from './pages/login'
import Home from './pages/home'
import WorkshopsList from './pages/workshops-list'
import AddWorkshop from './pages/add-workshop'

interface Routes {
    [key:string]:{
        template:string,
        Controller:any
    }
}

const routes:Routes= {

    '/login.html':{
        template:'login',
        Controller:Login
    },
    '/index.html':{
        template:'home',
        Controller:Home
    },
    '/workshops-list.html': {
        template: 'workshops-list',
        Controller: WorkshopsList
    },
    '/add-workshop.html': {
        template: 'add-workshop',
        Controller: AddWorkshop
    },
    '*':{
        template: 'page-not-found',
        Controller: null
    }
}



const setupLinks = ()=>{
    const links = document.querySelectorAll('a');

    links.forEach(link=>{
        link.addEventListener('click',function(event){
            event.preventDefault();// 1. Prevent loading of new page when a link is clicked


            const nextPageUrl = link.getAttribute('href');
            history.pushState("","",nextPageUrl);


            loadPage(location.pathname)

        })
    })
}


const loadPage = (pathname:string)=>{
    let route;

    if(pathname in routes){
        route=routes[pathname];
    }

    if(route?.template){
        const root = document.getElementById('root') as HTMLElement;
        const tpl = (document.getElementById(route.template) as HTMLElement).innerHTML;
        root.innerHTML = tpl;
    }
   if( route?.Controller ) {
        (new route.Controller()).load();
        setupLinks();
    }
}

window.addEventListener( 'popstate', function() {
    // load the new page based on the new url
    loadPage( location.pathname );
});

loadPage(location.pathname)





