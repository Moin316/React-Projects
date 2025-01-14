import { createContext, useState} from "react";
import { baseUrl } from "../Baseurl";
import axios from "axios";
export const Appcontext  = createContext();
const AppContextProvider=({children})=>{
    const [loading,setLoading] = useState(false);
    const [posts,setPosts] = useState([]);
    const [page,setPage]=useState(1);
    const [totalpages,setTotalPages] = useState(null);
    const fetchBlogPosts=async(page,tag,category)=>{
        let url=`${baseUrl}?page=${page}`;
        if(tag){
            url+=`&tag=${tag}`;
        }
        if(category){
            url+=`&category=${category}`;
        }
        setLoading(true);
        try{
            const response=await axios.get();
            console.log(response);
            if (!response.posts || response.posts.length === 0)
              throw new Error("Something Went Wrong");
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
    const value={
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalpages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    }
    function handlePageChange(page){
        setPage(page);
        fetchBlogPosts(page);
    }
    return(
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
    )
}
export default AppContextProvider