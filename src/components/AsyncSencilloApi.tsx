import React, { useEffect, useState } from 'react';

interface Post {
    id: number;
    title: string;
}

const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchPosts = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
            setLoading(false);
        };

        fetchPosts();
    }, []); // El array vacío indica que solo se ejecuta una vez al montar

    if (loading) return <p>Loading...</p>;

    return (
        <div>
            <h3>Posts</h3>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default Posts;
