(function() {
    'use strict';

    function routes() {

        var routesArr = [];
        //------Default Routes------//
        routesArr = routesArr.concat(defaultArrRoutes());
		    routesArr = routesArr.concat(defaultServerRoutes());
        return routesArr;
    }

    function defaultServerRoutes() {
        return [{
            method: 'GET',
            path: '/ws',
            config: {
                handler: (request, reply) => {
                    reply('Server On');
                }
            }
        }, ];
    }

    function defaultArrRoutes() {
        return [{
            method: 'GET',
            path: '/',
            config: {
                handler: (request, reply) => {
                    reply.file('dist/index.html');
                }
            }
        }, ];
    }
})();