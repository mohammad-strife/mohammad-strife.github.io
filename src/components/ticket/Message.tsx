import linkedin from "../../assets/images/LinkedIn_icon_circle.svg.png";

const Message = () => {
  return (
    <div className="chat chat-end">
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img src={linkedin} alt="" />
        </div>
      </div>
      <div className="chat-bubble text-white bg-blue-500">Hi! what is upp?</div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        12:42
      </div>
    </div>
  );
};

export default Message;
