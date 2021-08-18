import neymar from "../public/neymar.jpeg";
import suarez from "../public/suarez.jpg";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";
const contacts = [
  { src: neymar, name: "Neymar Jr" },
  { src: suarez, name: "Luis Suarez" },
];
function Widgets() {
  return (
    <div className="hidden lg:flex flex-col w-60 p-2 mt-5">
      <div className="flex justify-between items-center text-gray-500 mb-5">
        <h2 className="text-xl">Contacts</h2>
        <div className="flex space-x-2">
          <VideoCameraIcon className="h-6" />
          <SearchIcon className="h-6" />
          <DotsHorizontalIcon className="h-6" />
        </div>
      </div>
      {contacts.map((contact) => (
        <Contact
          key={contact.src + contact.name}
          src={contact.src}
          name={contact.name}
        />
      ))}
    </div>
  );
}

export default Widgets;
