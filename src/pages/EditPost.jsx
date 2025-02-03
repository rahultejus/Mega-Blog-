import { useEffect, useState } from 'react'
import { Container, PostForm} from '../components'
import appwriteService from '../appwrite/config'
import { useParams, useNavigate } from 'react-router-dom'

function EditPost() {
    const [post, setPost] = useState(null)
    const [loading, setLoading] = useState(true)
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        console.log("EditPost id:", id);
        let isMounted = true
        const fetchPost = async () => {
            try {
                if (id) {
                    const postData = await appwriteService.getPost(id)
                    if (isMounted) {
                        if (postData) {
                            console.log("Edit post data:", postData); 
                            setPost(postData)
                        } else {
                            navigate('/')
                        }
                    }
                }
            } catch (error) {
                console.error('Error fetching post:', error)
                navigate('/')
            } finally {
                if (isMounted) setLoading(false)
            }
        }

        fetchPost()

        return () => {
            isMounted = false
        }
    }, [id, navigate])

    if (loading) {
        return (
            <div className="w-full py-8">
                <Container>
                <p className="text-center">Loading posts...</p>
                </Container>
            </div>
        )
    }

    return post ? (
        <div className="py-8">
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export { EditPost }