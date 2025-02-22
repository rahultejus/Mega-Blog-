import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImg }) {

  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 rounded-xl p-4">
        <div className="w-full justify-center mb-4 aspect-video overflow-hidden rounded-xl">
          <img
            src={appwriteService.getFilePreview(featuredImg)}
            alt={title}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>
        <h2 className="text-xl font-bold">{title}</h2>
        <p>{}</p>
      </div>
    </Link>
  );
}

export default PostCard;
