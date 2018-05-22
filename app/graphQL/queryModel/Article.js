module.exports = `
    type Article { 
        _id: String,
        title: String, 
        sub_title: String, 
        content: String,
        content_draft: String,
        desc: String,
        zan_num: Int,
        read_num: Int,
        status: Int,
        order_no: Int,
        createTime: String,
        updateTime: String
    }
    type Articles { 
        list:[Article], 
        limit: Int, 
        page: Int, 
        total: Int 
    }
`
