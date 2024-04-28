import { useParams } from "react-router-dom";
import Layout from "../components/Layout";

const Profile = () => {

    const {userId} = useParams()

  return <Layout>{userId}</Layout>;
};
export default Profile;
