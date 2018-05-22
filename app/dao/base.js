module.exports = {
    async findList(model, {limit = 1, page = 10, ...parmas}) {
        let result
        await model.count({}, async (err, total) => {
            if (err) {
                console.error(err)
            } else {
                await model.find({...parmas}, (err, list) => {
                    if (err) {
                        console.error(err)
                    } else {
                        result = {
                            page,
                            limit,
                            data: list,
                            total
                        }
                    }
                }).skip((page - 1) * limit).limit(limit * 1).exec()
            }
        })
        return result
    }
}
