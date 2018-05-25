module.exports.findList = async (model, {limit = 10, page = 1, ...params}) => {
    let [total, list] = await Promise.all([
        model.count({...params}),
        model.find({...params}).skip((page - 1) * limit).limit(limit).exec()
    ])
    return {page, limit, total, list}
}
