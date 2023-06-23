import React from 'react';
import { useState, useEffect } from 'react';
import posts from '../../public/data.json';

const Posts = () => {

// inisialiasi awal state posts dan fungsi perubahan statenya
// const [posts, setPosts] = useState([])

// menjalankan fungsi fecth data lokal setiap kali render dgn useEffect
// useEffect(() => {
//   fetch('data.json')
//   .then(response => response.json())
//   .then(data => setPosts(data.data))
//   .catch(error => console.log(error));
// }, [])


  return (
    <div>
        <ul>
        {/* Menampilkan setiap element di dalam array sebuah data dengan method map */}
        {posts.data.map((post) => (
            <li key={post.id}>
                {post.title}<br/>
                {post.body}
            </li>
        ))}
    </ul>
    </div>
  )
}

export default Posts