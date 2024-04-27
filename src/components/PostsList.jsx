import axios from "axios";
import TimeAgo from "./TimeAgo";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa6";
import { FaShareFromSquare } from "react-icons/fa6";
import { MdOutlineInsertComment } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";
import { AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const PostsList = ({ post, user, onUpdatePost, onDeletePost }) => {
  const navigate = useNavigate();

  const likeBtnClick = async (post) => {
    try {
      const res = await axios.post(
        `http://localhost:8080/posts/like?postId=${post.id}&userId=${user.id}`
      );

      onUpdatePost(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const navigateEditPage = () => {
    navigate(`/post/${post.id}`);
  };

  const deletePost = async (post) => {
    try {
      await axios.delete(`http://localhost:8080/posts/${post.id}`);
      onDeletePost(post);
      toast.success("Post deleted successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="h-full w-full bg-gray-50 flex items-center justify-center">
        <div className="border max-w-screen-md bg-white mt-6 rounded-2xl p-4">
          <div className="flex items-center	justify-between">
            <div className="gap-3.5	flex items-center ">
              <img
                src={post?.userProfile}
                alt=""
                className="object-cover bg-yellow-500 rounded-full w-10 h-10"
              />
              <div className="flex flex-col">
                <b className="mb-2 capitalize">{post?.username}</b>
                <time datetime="06-08-21" className="text-gray-400 text-xs">
                  <TimeAgo date={post.date} />
                </time>
              </div>
            </div>
            <div className="bg-gray-100	rounded-full h-3.5 flex	items-center justify-center gap-3">
              {user.id === post.userId && (
                <>
                  <AiFillDelete
                    size={20}
                    color="red"
                    className="cursor-pointer"
                    onClick={() => deletePost(post)}
                  />
                  <AiFillEdit
                    size={20}
                    color="blue"
                    className="cursor-pointer"
                    onClick={navigateEditPage}
                  />
                </>
              )}
            </div>
          </div>
          <div className="whitespace-pre-wrap mt-7 font-bold ">
            {post?.title}
          </div>
          <p className="mt-1 text-sm text-gray-700">{post?.description}</p>
          <div className="mt-5 flex gap-2	 justify-center border-b pb-4 flex-wrap	w-[600px] max-w-[700px]">
            {post?.images?.length === 3 ? (
              <>
                <img
                  src={post.images[0]}
                  alt=""
                  className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                />
                <img
                  src={post.images[1]}
                  alt=""
                  className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                />
                <img
                  src={post.images[2]}
                  alt=""
                  className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                />
              </>
            ) : post?.images?.length === 2 ? (
              <>
                <img
                  src={post.images[0]}
                  alt=""
                  className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                />
                <img
                  src={post.images[1]}
                  alt=""
                  className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
                />
              </>
            ) : post?.images?.length === 1 ? (
              <img
                src={post.images[0]}
                alt=""
                className="bg-red-500 rounded-2xl w-1/3 object-cover h-96 flex-auto"
              />
            ) : (
              <>
                <video
                  controls
                  className="mt-3"
                  style={{ maxWidth: "570px", height: "auto" }}
                >
                  <source src={post?.video} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </>
            )}
          </div>
          <div className=" h-16 border-b  flex items-center justify-around	">
            <div className="flex items-center	gap-3	cursor-pointer">
              {post?.likedBy?.includes(user.id) ? (
                <>
                  <FaHeart
                    size={24}
                    color="red"
                    onClick={() => likeBtnClick(post)}
                  />
                </>
              ) : (
                <>
                  <CiHeart
                    size={24}
                    color="red"
                    onClick={() => likeBtnClick(post)}
                  />
                </>
              )}
              <p> {post?.likeCount} Like</p>
            </div>
            <div className="flex items-center	gap-3 cursor-pointer">
              <MdOutlineInsertComment size={24} color="blue" />
              <p className="text-blue-900 "> Comment</p>
            </div>
            <div className="flex items-center	gap-3 cursor-pointer">
              <FaShareFromSquare size={22} />
              <p> Share</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PostsList;
