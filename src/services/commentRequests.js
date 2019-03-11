import api from './api'

export default {
    createComment(accessToken, postId, content, parentId=null) {
        return api().post('/comment/create', {
            data: {
                access_token: accessToken,
                post_id: postId,
                content: content,
                parent_id: parentId
            }
        })
    },
    editComment(accessToken, postId, content) {
        return api().post('/comment/edit', {
            data: {
                access_token: accessToken,
                post_id: postId,
                new_content: content
            }
        })
    },
    deleteComment(accessToken, commentId) {
        return api().post('/comment/delete',{
            data: {
                access_token: accessToken,
                comment_id: commentId
            }
        })
    },
    getComment(accessToken, commentId) {
        return api().post('/comment/get'. {
            data: {
                access_token: accessToken,
                comment_id: commentId
            }
        })
    },
}