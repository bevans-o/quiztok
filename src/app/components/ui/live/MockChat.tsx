import React from "react";
import Message from "./Message";
import ChatBar from "./ChatBar";

function MockChat() {
  return (
    <div className="flex flex-col gap-4 fade-to-t w-full">
      <div className="flex flex-col gap-2">
        <Message
          name="Tick T. Tock"
          image="/background.png"
          score={5}
          message="ok next question i will get 100%"
          badge={{ name: "Winner", colour: "rose", icon: "heart", author: "", id: "" }}
        />
        <Message
          name="loser"
          image="/background.png"
          score={2}
          message="ughhhh i hope i win this time so i get a cool badge"
        />
        <Message
          name="Legend"
          image="/background.png"
          score={13}
          message="wowwww!!! activities are such a great feature!!"
          badge={{ name: "Trivia Lord", colour: "yellow", icon: "star", author: "", id: "" }}
        />
      </div>
      <ChatBar />
    </div>
  );
}

export default MockChat;
