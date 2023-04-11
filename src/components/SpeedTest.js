import React, { ChangeEvent, useState } from "react";
import Timer from "./TImer.js";

export default function SpeedTest() {
  const [chat, setchat] = useState("");
  const [count, setcount] = useState(0);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setchat(e.target.value);
    setcount(chat.length + 1);
  };

  const para = "Hello world my name is ansh how are you doing in this world ";

  let accuracy = 0;
  var number_of_words_to_type = para.length;

  for (let i = 0; i < para.length; i++) {
    if (chat[i] === para[i]) {
      accuracy = accuracy + 1;
    }
  }

  return (
    <div className="grid grid-cols-3">
      <section className="flex justify-center mt-5">
        <h1 className="text-red-500 text-3xl flex-row">
          Typing Speed Calculator
        </h1>
      </section>

      <section className="flex-col flex-auto mt-10">
        <div className="">
          <div className="box-content h-200 w-60 p-4 border-4 m-5">
            <h3>{chat}</h3>
          </div>
          <div className="box-content h-50 w-60 p-4 border-4 m-5">
            <h3>{para}</h3>
          </div>
        </div>
      </section>

      <section className="flex justify-center mt-20">
        <h2 className="text-xl">setTimer : </h2>
        <Timer />
        <h2 className="text-xl text-blue-500 ml-5">
          Number of words type are : {count}
        </h2>
        <h2 className="ml-4 mt-1">
          Number of words you type correct are {accuracy} out of{" "}
          {number_of_words_to_type}
        </h2>
      </section>

      <div className="flex justify-center mt-10">
        <h2 className="text-xl">Enter the above written lines : </h2>
        <input
          className="border-4 ml-20 input"
          type="text"
          onChange={handleChange}
          value={chat}
        ></input>
      </div>
    </div>
  );
}
