import api from './api'

export default {
    getPost(token, postId) {
        return api().get('/post/get', {
            params: {
                access_token: token,
                id: postId
            }
        })
    },
    getPostList(token, tagList = null, order = null, limit = null, author = null, startFrom = null) {
        return api().get('/post/list',{
            params: {
                access_token: token,
                tags: tagList,
                order: order,
                limit: limit,
                author_id: author,
                begin_from: startFrom
            }
        })
    },
    getComments(token, postId, depth, order, commentLimit) {
        return api().post('/post/comments', {
            params: {
                access_token: token,
                post_id: postId,
                depth: depth,
                order_type: order,
                limit: commentLimit
            }
        })
    }
}
