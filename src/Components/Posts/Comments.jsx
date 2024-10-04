import Comment from './Comment'
import { useEffect } from 'react'

// eslint-disable-next-line react/prop-types
export default function Comments ({id, users, comments, setComments}) {
    useEffect(() => {
        fetch(`https://boolean-uk-api-server.fly.dev/FelixMathiasson/post/${id}/comment`)
          .then(res => res.json())
          .then(data => setComments(data))
      }, [])

    return (
        <div>
             {/* eslint-disable-next-line react/prop-types */}
            {comments.map(c => <Comment key={c.id} comment={c} users={users} />)}
        </div>
    )
}