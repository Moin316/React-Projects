import { createContext} from "react";
import { baseUrl } from "../Baseurl";
export const Appcontext  = createContext();
function AppcontextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage]=useState(1);
    const [totalpages,setTotalPages] = useState(null);
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalpages,
        setTotalPages
    }
    const fetchBlogPosts=async(page=1)=>{
        setLoading(true);
        try{
            const response=await axios.get(`${baseUrl}?page=${page}`);
            console.log(response);
            setPosts(response.data.posts);
            setPage(response.data.page);
            setTotalPages(response.data.totalPages);
        }
        catch(error){
            console.log(error);
            setPage(1);
            setPosts([]);
            setTotalPages(null);
        }
        setLoading(false);
    }
    return(
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )

}