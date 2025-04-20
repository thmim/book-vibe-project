
import { MdStarOutline } from "react-icons/md";
import { Link } from "react-router";
const SingleBook = ({oneBook}) => {
   const{bookName,author,image,rating,category,tags,yearOfPublishing,publisher,bookId}=oneBook
//    console.log(oneBook)
    return (
<Link to={`/bookdetails/${bookId}`}>
<div className="card bg-base-100 w-96 shadow-sm border p-6">
  <figure className="bg-gray-200 w-2/3 mx-auto p-3">
    <img className="h-[160px]"
      src={image}
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <div className="flex gap-6">
    {
        tags.map((tag)=><button className="btn rounded-full">{tag}</button>)
    }
    </div>
    <h2 className="card-title">
      {bookName}
      <div className="badge badge-secondary">{yearOfPublishing}</div>
    </h2>
    <p>By: {publisher}</p>
    <div className="border border-dashed"></div>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}<MdStarOutline /></div>
    </div>
  </div>
</div>
</Link>
    );
};

export default SingleBook;