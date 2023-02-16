import { Footer, Navbar, PostForm, Posts, Search } from './components'
import './App.css';

function App() {

  return (
    <div className="container">
      <header className ="header">
        <Navbar />
      </header>
        <div className="middleContainer">
          <main className="content">
            <Search />
            <Posts />
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
