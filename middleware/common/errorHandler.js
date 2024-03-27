const createError = require('http-errors');
//404 not found handler
function notFoundHandler(req,res,next){
    next(createError(404,'Page not found'));
}

function errorHandler(err,req,res,next){
    res.render('error',{
        title:'Error page',
        status:'404',
        description:"Page Not found"
    });
}

module.exports = {
    notFoundHandler,
    errorHandler,
};