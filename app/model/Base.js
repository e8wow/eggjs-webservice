module.exports.findList = async (model, {limit = 1, page = 10, ...params}) => {
    let result
    await model.count({}, async (err, total) => {
        if (err) {
            console.error(err)
        } else {
            await model.find({...params}, (err, list) => {
                if (err) {
                    console.error(err)
                } else {
                    result = {
                        page,
                        limit,
                        list,
                        total
                    }
                }
            }).skip((page - 1) * limit).limit(limit).exec()
        }
    })
    return result
}
