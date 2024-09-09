"use client";

import { Message } from "@prisma/client";
import moment from "moment";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";

const Messages = ({ messages }: { messages: Message[] }) => {
  const [isAuthenticAdmin, setIsAuthenticAdmin] = useState<boolean>(false);
  const [pin, setPin] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    const correctPin = process.env.NEXT_PUBLIC_PIN as string;

    if (pin === correctPin) {
      setIsAuthenticAdmin(true);
      setPin("");
    } else {
      toast.error("Wrong PIN");
      setPin("");
    }
  };

  return (
    <div className="flex flex-col gap-10 min-h-screen max-w-md">
      {isAuthenticAdmin &&
        messages.map((message) => (
          <div key={message.id} className="chat chat-start">
            <div className="chat-header flex gap-2.5 items-center">
              {message.firstName + " " + message.lastName}
              <time className="text-xs opacity-50">
                {moment(message.createdAt).startOf("minutes").fromNow()}
              </time>
            </div>
            <div className="chat-bubble">{message.message}</div>
            <Link
              href={`mailto:${message.email}`}
              className="chat-footer opacity-50"
            >
              {message.email}
            </Link>
          </div>
        ))}
      {!isAuthenticAdmin && (
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <label htmlFor="pin">PIN</label>
            <input
              type="password"
              id="pin"
              name="pin"
              placeholder="Enter your PIN"
              className="border p-2 rounded-lg"
              value={pin}
              onChange={(e) => setPin(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Proceed
          </button>
        </form>
      )}
    </div>
  );
};

export default Messages;
