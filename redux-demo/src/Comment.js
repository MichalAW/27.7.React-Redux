import React from 'react';

const Comment = ({text, votes, id, thumbUpComment, thumbDownComment}) =>
    <div>
        {text} <span>votes: {votes}</span>
        <ul>
            <li>
                <button onClick={() => thumbUpComment(id)}>Thumb up</button>
                <button onClick={() => thumbDownComment(id)}>Thumb down</button>
            </li>
        </ul>
    </div>
    
export default Comment;