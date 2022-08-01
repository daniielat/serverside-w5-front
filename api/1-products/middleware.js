exports.getPath = function getPath(req, res, next) {
    const { category } = req.params;

    res.locals.category = category; //Lo guarde de tal forma que lo pueda usar después en otro archivo

    next();
}