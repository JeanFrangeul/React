import React, { useEffect } from 'react'
import store from '../store'

const Blog = () => {
    useEffect(() => {
        store.subscribe(() => {
            console.log(store.getState())
        })
    })
    return (
        <div>
            
        </div>
    )
}

export default Blog
