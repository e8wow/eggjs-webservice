module.exports = app => {
    const mongoose = app.mongoose
    const Schema = mongoose.Schema

    /**
     * 博文schema
     * @property title              主标题
     * @property sub_title          副标题
     * @property content            内容
     * @property content_draft      内容草稿箱
     * @property desc               描述
     * @property zan_num            点赞数
     * @property read_num           阅读数
     * @property status             状态
     * @property order_no           排序编号
     * @property createTime         创建时间
     * @property updateTime         更新时间
     * @type {mongoose}
     */
    const ArticleSchema = new Schema({
        title: {
            required: true,
            type: String
        },
        sub_title: String,
        content: String,
        content_draft: String,
        desc: String,
        zan_num: Number,
        read_num: Number,
        status: Number,
        order_no: {
            required: true,
            type: Number
        },
        createTime: {
            type: Date,
            default: Date.now
        },
        updateTime: {
            type: Date,
            default: Date.now
        }
    }, {
        timestamps: {createdAt: 'createTime', updatedAt: 'updateTime'}
    })
    return mongoose.model('Article', ArticleSchema)
}
