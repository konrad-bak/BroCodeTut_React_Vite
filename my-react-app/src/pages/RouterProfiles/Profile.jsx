import { useParams } from "react-router-dom";

function Profile() {
  const params = useParams();
  return (
    <>
      <h2>Profile Page {params.profileId}</h2>
    </>
  );
}

export default Profile;
