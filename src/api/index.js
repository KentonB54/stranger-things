import config from '../config'

export const GetAllPosts = () => {
    fetch(`${config.apiLink}/${config.cohort}/posts`, {
        method: 'Get',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ })
    })
}

export const GetPost = (id) => {

}

export const SavePost = () => {

}

export const EditPost = () => {

}

export const DeletePost = () => {
    
}