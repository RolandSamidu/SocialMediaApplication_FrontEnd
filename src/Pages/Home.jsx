import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import {  TETabs, TETabsItem } from "tw-elements-react";
import PostsList from "../components/PostsList";
import axios from "axios";
import toast from "react-hot-toast";

const Home = () => {
  const [colorsActive, setColorsActive] = useState({
    tab1: "tab1",
  });
 const [user, setUser] = useState(null);
  const handleColorsClick = (value) => {
    if (value === colorsActive) {
      return;
    }
    setColorsActive({ ...colorsActive, ...value });
  };
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:8080/posts"
        );
        setPosts(data);
      } catch (error) {
        toast.error("Server error");
      }
    };
    fetchAllPosts();
  }, []);



 useEffect(() => {
   const user = localStorage.getItem("user");
   setUser(JSON.parse(user));
 }, []);

const updatePost = (updatedPost) => {
  setPosts((prevPosts) =>
    prevPosts.map((post) => (post.id === updatedPost.id ? updatedPost : post))
  );
};

const deletePost = (deletedPost) => {
  setPosts((prevPosts) =>
    prevPosts.filter((post) => post.id !== deletedPost.id)
  );

}

 console.log(user)
  return (
    <Layout>
      <>
        {/* Tab bar */}

        <div className="mb-3">
          <TETabs fill>
            <TETabsItem
              onClick={() =>
                handleColorsClick({ ...colorsActive, tab1: "tab1" })
              }
              active={colorsActive.tab1 === "tab1"}
              color="primary"
            >
              Daily Post
            </TETabsItem>
            <TETabsItem
              onClick={() =>
                handleColorsClick({ ...colorsActive, tab1: "tab1" })
              }
              active={colorsActive.tab1 === "tab1"}
              color="primary"
            >
              Workout Status
            </TETabsItem>
            <TETabsItem
              onClick={() =>
                handleColorsClick({ ...colorsActive, tab1: "tab1" })
              }
              active={colorsActive.tab1 === "tab1"}
              color="primary"
            >
              Workout Plan
            </TETabsItem>
            <TETabsItem
              onClick={() =>
                handleColorsClick({ ...colorsActive, tab1: "tab1" })
              }
              active={colorsActive.tab1 === "tab1"}
              color="primary"
            >
              Meal Plan
            </TETabsItem>
          </TETabs>
        </div>

        <div>
          {posts?.map((post, index) => {
            return (
              <PostsList
                post={post}
                user={user}
                key={index}
                onUpdatePost={updatePost}
                onDeletePost={deletePost}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default Home;
