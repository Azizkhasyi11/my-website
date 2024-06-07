export default function Card({
  title = "Ipsum incididunt mollit qui nostrud",
  description = "Duis labore nostrud laborum id ex et labore nulla laboris ad ad tempor.",
  image = "https://placehold.co/400",
  link = "#",
  isFlex = false
}) {
  return (
    <div className={`bg-white shadow-lg rounded-lg overflow-hidden ${ isFlex ? ` lg:w-1/5 md:w-1/3 sm:w-full` : '' }`}>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h2 className="font-semibold text-xl text-black">{title}</h2>
        <p className="text-gray-500">{description}</p>
        <div className="mt-4">
          <a
            href={link}
            className="text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
}
