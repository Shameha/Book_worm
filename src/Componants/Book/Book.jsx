import { Link } from "react-router-dom";

const Book = ({book}) => {
    const{image,bookName,author,rating,category} = book;
    return (
        
        <article className="flex flex-col dark:bg-gray-50">
				<Link to='/'>
					<img alt={image} className="object-cover w-full h-52 dark:bg-gray-500" src={image} />
				</Link>
				<div className="flex flex-col flex-1 p-6">
                    <div className="flex text-sm text-green-500 gap-5 font-bold">
                        <p><span>Young Adult</span></p>
                        <p>Identity</p>
                    </div>
					<h3 className="flex-1 py-2 text-lg font-semibold leading-snug">{bookName}</h3>
                    <p className="text-sm gap-2">By:{author}</p>
					<div className="flex flex-wrap justify-between pt-3 space-x-2 text-xs dark:text-gray-600">
						<span className="text-sm">{category}</span>
						<span>{rating}</span>
					</div>
				</div>
			</article>
    );
};


export default Book;