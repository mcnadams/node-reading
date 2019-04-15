function route(handle, pathname, response) {
    console.log('About to route request for', pathname);
    if(typeof handle[pathname] === 'function') {
        return handle[pathname]();
    } else {
        console.log('No request handler exists for', pathname);
        response.write('404 Not Found');
        response.end();
    }
}

exports.route = route;
