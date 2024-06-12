import PropTypes from "prop-types";

function Card({
  title = "Ipsum incididunt mollit qui nostrud",
  description = "Duis labore nostrud laborum id ex et labore nulla laboris ad ad tempor.",
  image = "",
  link = "https://github.com/Azizkhasyi11",
  isFlex = false,
}) {

  const descSlice = description.length > 60 ? `${description.slice(0, 60)}...` : description;

  return (
    <div
      className={` bg-zinc-900 shadow-lg text-white rounded-lg overflow-hidden flex flex-col ${
        isFlex ? ` lg:w-1/5 md:w-1/3 sm:w-full` : ""
      }`}
    >
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-56 object-cover object-center"
        />
      )}
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex-1">
          <h2 className="font-semibold text-xl">{title}</h2>
          <p className="text-gray-300">{descSlice}</p>
        </div>
        <footer className="mt-auto pt-4">
          <a
            href={link}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </footer>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  link: PropTypes.string,
  isFlex: PropTypes.bool,
};

export default Card;
