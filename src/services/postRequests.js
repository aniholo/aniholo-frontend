import api from './api'

export default {
    createPost(token, postTitle, postContent, contentType, tags) {
        return api().post('/post/create', {
            params: {
                access_token: token,
                title: postTitle,
                content: content,
                content_type: content_type,
                tags: tags
            }
        })
    },
    setVote(token, id, type, val) {
        return api().post('/post/vote', {
            params: {
                access_token: token,
                id: id,
                type: type,
                value: val
            }
        })
    },
    deletePost(token, postId) {
        return api().post('post/delete', {
            params: {
                access_token: token,
                id: postId
            }
        })
    },
    editPost(token, postId, newContent = null, tagList = null) { //replace content and tags default values with already present post values
        return api().post('post/edit', {
            params: {
                access_token: token,
                id: postId,
                content: newContent,
                tags: tagList
            }
        })
    }
}
