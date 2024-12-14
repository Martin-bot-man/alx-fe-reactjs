import axios from 'axios';

const githubService = (username) => {
  const[data, setdata] = useState(null);
  const[isLoading, setIsLoading]=useState(false);
  const[error, setError]= useState(null);

  useEffect(()=>{
    const fetchData= async()=>{
      try{
        setIsLoading(true);
        const response = await axios.get(`https://api.github.com/users/${username}`);
        setdata(response.data);
      }catch(err){
        setError('User not found');
      }finally{
        setIsLoading(false);
      }
    };
    if(username){
      fetchData();
    }
  },[username]);
  return {
    data, isLoading, error
  };
    
  
};

export default githubService;