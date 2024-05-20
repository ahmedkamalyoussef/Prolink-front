import React, { useState, useEffect } from 'react';
import { useSelector } from "react-redux";
import { fetchPostsByTitle } from '../../Api/Post';
import { fetchUserByNameData } from '../../Api/User';
import Post from '../../Components/Post/Post';
import './Search.css';

function SearchPage() {
  const [activeTab, setActiveTab] = useState("allResults");
  const { searchVal } = useSelector((state) => state.search);
  const [posts, setPosts] = useState([]);
  const [users, setUsers] = useState([]);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    if(searchVal)
            {
    const fetchPostsData = async () => {
      try {
        const response = await fetchPostsByTitle(searchVal);
          setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    const fetchUsersData = async () => {
        
        try {
          const response = await fetchUserByNameData(searchVal);
            setUsers(response.data);
            console.log(response.data);

        } catch (error) {
          console.error('Error fetching posts:', error);
        }
      };
        fetchPostsData();
        fetchUsersData();
    }
  }, [searchVal]);

  return (
    <div>
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="search-result-box card-box">
                <ul className="nav nav-tabs tabs-bordered">
                  <li className="nav-item">
                    <a href="#home" onClick={() => handleTabChange("allResults")} className={`nav-link ${activeTab === "allResults" ? "active" : ""}`}>Jobs</a>
                  </li>
                  <li className="nav-item">
                    <a href="#users" onClick={() => handleTabChange("users")} className={`nav-link ${activeTab === "users" ? "active" : ""}`}>Users</a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className={`tab-pane ${activeTab === "allResults" ? "active" : ""}`} id="home">
                    {Array.isArray(posts) && posts.length > 0 ? (
                      posts.map((post, index) => (
                        <Post key={index} post={post} />
                      ))
                    ) : (
                      <p>No posts found</p>
                    )}
                  </div>
                  <div className={`tab-pane ${activeTab === "users" ? "active" : ""}`} id="users">
                    {/* Users content */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
