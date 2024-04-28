import React, { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { TETabs, TETabsItem } from "tw-elements-react";
import PostsList from "../components/PostsList";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [colorsActive, setColorsActive] = useState({
    tab1: "tab1",
  });
  const [user, setUser] = useState(null);
  const [reFetchPost, setReFetchPost] = useState(false);

  const navigate = useNavigate();

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
        const { data } = await axios.get("http://localhost:8080/posts");
        setPosts(data);
      } catch (error) {
        toast.error("Server error");
      }
    };
    fetchAllPosts();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const userData = localStorage.getItem("user");
        setUser(JSON.parse(userData));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
  };

  useEffect(() => {
    const fetchAllPosts = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/posts");
        setPosts(data);
      } catch (error) {
        toast.error("Server error");
      }
    };
    fetchAllPosts();
  }, [reFetchPost]);

  return (
    <Layout>
      <>
        
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
                reFetchPost={reFetchPost}
                setReFetchPost={setReFetchPost}
              />
            );
          })}
        </div>
      </>
    </Layout>
  );
};

export default Home;
