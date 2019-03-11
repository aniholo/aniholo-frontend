import api from './api'

export default {
    
    createPost(token, postTitle, postContent, contentType, tags) {
        return api().post('/post/create', {
            data: {
                access_token: token,
                title: postTitle,
                content: postContent,
                content_type: contentType,
                tags: tags
            }
        })
    },
    setVote(token, id, type, val) {
        return api().post('/post/vote', {
            data: {
                access_token: token,
                id: id,
                type: type,
                value: val
            }
        })
    },
    deletePost(token, postId) {
        return api().post('post/delete', {
            data: {
                access_token: token,
                id: postId
            }
        })
    },
    editPost(token, postId, newContent = null, tagList = null) { //replace content and tags default values with already present post values
        return api().post('post/edit', {
            data: {
                access_token: token,
                id: postId,
                content: newContent,
                tags: tagList
            }
        })
    },
    getPost(token, postId) {
        return api().post('/post/get', {
            data: {
                access_token: token,
                id: postId
            }
        })
    },
    getPostList(token, tagList = null, order = null, limit = null, author = null, startFrom = null) {
        return api().post('/post/list',{
            data: {
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
            data: {
                access_token: token,
                post_id: postId,
                depth: depth,
                order_type: order,
                limit: commentLimit
            }
        })
    },
    
}
