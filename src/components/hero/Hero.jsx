import React, { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri";

const Hero = () => {
    const [data, setData] = useState([]);
    const [text, setText] = useState("");
    const [price, setPrice] = useState("");
    const [deck, setDeck] = useState("");
    const [img, setImg] = useState("");

    const handleCreate = (e) => {
        e.preventDefault();
        let obj = {
            id: new Date().getTime(),
            text,
            price,
            deck,
            img,
        };
        setData((prev) => [...prev, obj]);
        setText("");
        setPrice("");
        setDeck("");
        setImg("");
    };
    return (
        <section className="pt-3 bg-slate-800 pb-6">
            <div className="container max-w-7xl mx-auto my-0">
                <form
                    className="flex flex-col md:flex-row items-center gap-5 justify-center pb-10"
                    onSubmit={handleCreate}>
                    <div className="flex flex-col gap-4">
                        <input
                            className="w-72 md:w-96 py-2 pl-2 rounded-xl text-base bg-transparent text-white border-2"
                            value={img}
                            onChange={(event) => setImg(event.target.value)}
                            autoComplete="off"
                            required
                            type="text"
                            name="text"
                            placeholder="Enter image url..."
                        />
                        <input
                            className="w-72 md:w-96 py-2 pl-2 rounded-xl text-base bg-transparent text-white border-2"
                            value={text}
                            onChange={(event) => setText(event.target.value)}
                            autoComplete="off"
                            required
                            type="text"
                            name="text"
                            placeholder="Enter the title of the book..."
                        />
                        <input
                            className="w-72 md:w-96 py-2 pl-2 rounded-xl text-base bg-transparent text-white border-2"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                            autoComplete="off"
                            required
                            type="number"
                            name="number"
                            placeholder="Enter the price of the book..."
                        />
                        <input
                            className="w-72 md:w-96 py-2 pl-2 rounded-xl text-base bg-transparent text-white border-2"
                            value={deck}
                            onChange={(event) => setDeck(event.target.value)}
                            autoComplete="off"
                            required
                            type="text"
                            name="text"
                            placeholder="Enter the book information..."
                        />
                    </div>
                    <button className="text-white p-3 border-2 rounded-xl">
                        Add
                    </button>
                </form>
                <div className="flex justify-center md:justify-start items-center gap-10 flex-wrap">
                    {data?.map((item) => (
                        <div
                            className="bg-yellow-50 w-72 flex flex-col  items-center gap-4 rounded-lg py-3 px-2"
                            key={item.id}>
                            <div>
                                <img
                                    className="w-56 h-auto rounded-lg hover:scale-105 hover:transition-all"
                                    src={item.img}
                                    alt={item.text}
                                />
                            </div>
                            <div
                                className="w-60 flex flex-col
                             gap-2">
                                <h3
                                    className="text-base text-ellipsis overflow-hidden whitespace-nowrap max-w-full"
                                    title={
                                        item.text.charAt(0).toUpperCase() +
                                        item.text.slice(1)
                                    }>
                                    {item.text.charAt(0).toUpperCase() +
                                        item.text.slice(1)}
                                </h3>
                                <p className="text-lg font-bold text-ellipsis overflow-hidden whitespace-nowrap max-w-full">
                                    {item.price} USD
                                </p>
                                <p
                                    className="flex-wrap text-ellipsis overflow-hidden whitespace-nowrap max-w-full text-slate-600 italic"
                                    title={
                                        item.deck.charAt(0).toUpperCase() +
                                        item.deck.slice(1)
                                    }>
                                    {item.deck.charAt(0).toUpperCase() +
                                        item.deck.slice(1)}
                                </p>
                                <p className="w-52 text-xs py-1 px-2 bg-yellow-300 rounded-md">
                                    {item.price * 0.096} so'm x 12 oy
                                </p>
                                <div className="flex items-center gap-8">
                                    <button className="py-1 px-3 rounded-lg bg-sky-300">
                                        Shop now
                                    </button>
                                    <RiShoppingCartLine className="text-emerald-600 text-xl cursor-pointer border-2" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;
