import {BrowserRouter as Router,Link, Routes,Route, useParams} from 'react-router-dom';
import './App.css';
import ProtectedRoute from './components/ProtectedRoute';

const blogPosts =[
  {id:1, title :'My First Blog Post', content:'This is the content of my blog post.'},
  {id:2, title :'Another Intersting Post', content: 'Some more interesting post'},
];
const BlogPost =()=> {
  const {id} = useParams();//access the dynamic postId from the URL
  const post = blogPosts.find(post => post.id === parseInt(id, 10));
  if(!post){
    return<div>Post not found</div>;
  }
};
const HomeComponent =()=> <h1>Home Page</h1>;
const AboutComponent =()=> <h1>About Page</h1>;


  


function App() {

  return (
    
    <Router>
      
        <nav>
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
            <Link to ="/posts">Posts</Link>
            </li>
            <li>
              <Link to ="/about">About</Link>
            </li>
            <li>
            <Link to ="/blog/1">Blog Post 1</Link>
            </li>
          </ul>
        </nav>
      
      <div>

      <Routes>
        <Route path="/" element ={<HomeComponent/>} />
        {/* <Route path="/posts" element={<PostsComponent/>} /> */}
        <Route path="/about" element={<AboutComponent/>} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/profile/*" element={
          <ProtectedRoute element={<Profile />}/>
        }
        />


      </Routes>

      </div>
    </Router>
     
    
  );
};

export default App;
