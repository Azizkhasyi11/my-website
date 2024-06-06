import { useState } from "react";
import Input from "../../components/Form";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, text });
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 dark:text-black">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input label="Name" type="text" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name"/>
          </div>
          <div className="mb-4">
            <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label htmlFor="OrderNotes" className="sr-only">
              Order notes
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600 dark:border-gray-700">
              <textarea
                id="OrderNotes"
                className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm dark:bg-gray-800 dark:text-white"
                rows="4"
                placeholder="Enter a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <div className="flex items-center justify-end gap-2 bg-white p-3 dark:bg-gray-800">
                <button
                  type="button"
                  className="rounded bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 hover:text-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:text-gray-100"
                  onClick={() => setMessage("")}
                >
                  Clear
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
