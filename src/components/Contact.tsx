/* eslint-disable prefer-const */
import { useState } from "react";
import { APIGetFormToken } from "../api/getForm";

const Contact = () => {
  let [name, setName] = useState('');
  let [email, setEmail] = useState('');
  let [message, setMessage] = useState('');

  const handleButtonClick = () => {
    setName(name = '')
    setEmail(email = '')
    setMessage(message = '')
  }

  return (
    <div
      id="contato"
      className="w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 pt-28 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-3xl font-bold inline border-b-4 border-gray-500">
            Contato
          </p>
          <p className="py-6">Envie o formulário abaixo para entrar em contato comigo</p>
        </div>

        <div className="flex justify-center items-start">
          <form
            action={`${APIGetFormToken}`}
            method="POST"
            className="grid md:w-1/2"
          >
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Digite seu nome"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Digite seu email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              name="message"
              value={message}
              placeholder="Digite sua mensagem"
              className="p-2 bg-transparent pb-56 w-full border-2 rounded-md text-white outline-none"
              onChange={(e) => setMessage(e.target.value)}
            ></input>

            <button
              className="
              text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8
                mx-auto flex items-center rounded-md hover:scale-105 duration-300
              "

              onSubmit={handleButtonClick}
            >
              Vamos conversar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;