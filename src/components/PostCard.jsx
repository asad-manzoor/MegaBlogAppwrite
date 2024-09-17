import appwriteService from "../appwirte/config";
import { Link } from 'react-router-dom';

function PostCard({ $id, title, featuredImage }) {
  // Check if featuredImage and title are available
  const imageSrc = featuredImage ? appwriteService.getFilePreview(featuredImage) : '';
  const altText = title || 'Post Image';

  return (
    <Link to={`/post/${$id}`}>
      <div className='w-full bg-gray-100 rounded-xl p-4 flex flex-col items-center'>
        <div className='w-full h-48 mb-4 flex justify-center items-center overflow-hidden'>
          {imageSrc ? (
            <img 
              src={imageSrc} 
              alt={altText} 
              className='w-full h-full object-cover rounded-xl' 
            />
          ) : (
            <div className='w-full h-full bg-gray-200 flex items-center justify-center rounded-xl'>
              <span>No Image Available</span>
            </div>
          )}
        </div>
        <h2 className='text-xl font-bold text-center truncate'>{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
