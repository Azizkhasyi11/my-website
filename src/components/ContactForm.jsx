import { useState } from "react";
import Input from "./Form";
import Button from "./Button";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-4">
      <div className="bg-zinc-800 shadow-md rounded px-4 sm:px-8 pt-6 pb-8 mb-4 text-white">
        <h2 className="text-2xl font-bold text-white">Contact Me</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          Feel free to contact me if you have any questions or something.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <Input
              label="Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              autoComplete="name"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>
          <div className="mb-6">
            <div className="overflow-hidden rounded-lg border-white border shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
              <textarea
                id="OrderNotes"
                className="w-full resize-none border-none align-top focus:ring-0 sm:text-sm dark:bg-zinc-800 dark:text-white placeholder-white"
                rows="4"
                placeholder="Enter a message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Button type="submit">Send</Button>
            <Button onClick={() => {
              setName("");
              setEmail("");
              setMessage("");
            }}>Clear</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
