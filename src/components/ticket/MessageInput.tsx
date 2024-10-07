import { IoSend } from "react-icons/io5";
const MessageInput = () => {
  return (
    <form className="px-4 my-3">
      <div className="w-full relative">
        <input
          type="text"
          className="border text-sm rounded-lg block w-full p-2.5 bg-white border-gray-600 text-right pr-10"
          placeholder="ارسال تیکت"
        />
        <button
          type="submit"
          className="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <IoSend className="text-gray-700" />
        </button>
      </div>
    </form>
  );
};

export default MessageInput;
