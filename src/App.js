import React, { useState, useEffect } from 'react';
import { Footer, Navbar, PostForm, Posts, Search } from './components'
import './App.css';


const config = {
  'apiLink' : 'https://strangers-things.herokuapp.com/api',
  'cohort' : '2211-ftb-et-web-pt',   
}

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch (`${config.apiLink}/${config.cohort}/posts`);
      const {data: {posts}} = await response.json();
      setPosts(posts)
  }
    fetchPosts();
  }, [])


  return (
    <div className="container">
      <header className ="header">
        <Navbar />
      </header>
        <div className="middleContainer">
          <main className="content">
            <Search />
            <Posts posts={posts}/>
          </main>
          <aside className="sideBar">
            <PostForm />
          </aside>
        </div>
      <footer className ="footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
