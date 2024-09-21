import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Send, MessageSquare, Folder, User } from 'lucide-react';
import chaticon from '../../../../public/chaticon (2).svg'
const TutorListItem = ({ tutor, isActive, onClick }:any) => (
  <div 
    className={`flex items-center py-5 px-4 cursor-pointer  mr-[3%] rounded-xl my-3 bg-[#A296CC]`}
    onClick={onClick}
  >
    <Image src={tutor.image} alt={tutor.name} width={40} height={40} className="rounded-full mr-3" />
    <div className="flex-grow">
      <p className={`font-semibold text-lg ${isActive ? 'text-white' : 'text-white'}`}>{tutor.name}</p>
      {/* <p className={`text-sm truncate ${isActive ? 'text-gray-200' : 'text-gray-600'}`}>{lastMessage}</p> */}
    </div>
  </div>
);

const ChatMessage = ({ message, isUser }:any) => (
  <div className={`flex  ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
    <div className={`max-w-[70%] rounded-2xl p-3 ${isUser ? 'bg-[#685AAD] text-white' : 'bg-white text-[#473171]'}`}>
      <p className='text-xl font-medium'>helo helo helo helo helo helo {message.text}</p>
      <span className={`text-md opacity-70 mt-1 block   ${isUser?"text-white float-right":"text-[#9B85C8]"}`}>{message.time}</span>
    </div>
  </div>
);

const ChatComponent = () => {
  const [activeTutor, setActiveTutor] = useState(0);
  const [tutors, setTutors] = useState([
    { id: 0, name: "Mr. Abderrahman", image: "/api/placeholder/40/40", messages: [] },
    { id: 1, name: "Ms. Johnson", image: "/api/placeholder/40/40", messages: [] },
    { id: 2, name: "Dr. Smith", image: "/api/placeholder/40/40", messages: [] },
 
   
  ]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    // @ts-ignore
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [tutors]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      const updatedTutors = [...tutors];
      updatedTutors[activeTutor].messages.push({ 
        
        id: updatedTutors[activeTutor].messages.length + 1, 
        text: newMessage, 
        isUser: true, 
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      setTutors(updatedTutors);
      setNewMessage("");
      
      // Simulate tutor response
      setTimeout(() => {
        const tutorResponse = generateTutorResponse(newMessage);
        const updatedTutorsWithResponse = [...updatedTutors];
        updatedTutorsWithResponse[activeTutor].messages.push({ 
          id: updatedTutorsWithResponse[activeTutor].messages.length + 1, 
          text: tutorResponse, 
          isUser: false, 
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        });
        setTutors(updatedTutorsWithResponse);
      }, 1000);
    }
  };

  const generateTutorResponse = (userMessage) => {
    const responses = [
      "That's an interesting point. Let's discuss it further.",
      "I understand your concern. Here's what we can do...",
      "Great question! The answer is...",
      "Let me clarify that for you.",
      "I'd be happy to help you with that.",
      "Can you provide more details about your question?",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex h-screen overflow-hidden    ">
      {/* Sidebar */}
      <div className="w-1/3 bg-[#EDE8FA]  overflow-y-auto">
        <h2 className="text-3xl font-bold text-[#685AAD] p-4 ml-6">My eTutors</h2>

        <div className=' overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#685aad40]  scrollbar-thumb-rounded-3xl h-[90%]'>
        {tutors.map((tutor) => (
          <TutorListItem 
          key={tutor.id}
          tutor={tutor}
          isActive={activeTutor === tutor.id}
          onClick={() => setActiveTutor(tutor.id)}
          // lastMessage={tutor.messages.length > 0 ? tutor.messages[tutor.messages.length - 1].text : "No messages yet"}
          />
        ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-grow flex flex-col rounded-3xl  bg-[#A296CC] border-2 border-red-800 max-w-[66%]">
        {/* Chat Header */}
        <div className="bg-[#A296CC] py-4 px-4 flex items-center rounded-t-3xl  pl-8 ">
          
          <Image src={chaticon} alt={tutors[activeTutor].name} width={27} height={27} className=" mr-4" />
          <h2 className="text-2xl font-bold text-white">{tutors[activeTutor].name}</h2>
        </div>
       

        {/* Messages */}
        <div className="flex-grow  p-4 bg-[#A296CC] border-t border-[#8b55ff51] mx-4   overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#685aad40]  scrollbar-thumb-rounded-3xl">
          {tutors[activeTutor].messages.map((msg) => (
            <ChatMessage key={msg.id} message={msg} isUser={msg.isUser} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="p-4 bg-[#A296CC] border-red-700  rounded-b-3xl">
          <div className="flex items-center bg-[#8C7AB9] rounded-full">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-grow p-3 bg-transparent text-white placeholder-gray-300 focus:outline-none"
            />
            <button type="submit" className="p-3">
              <Send className="w-6 h-6 text-white" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChatComponent;