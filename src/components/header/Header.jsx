import React from "react";
import { BsCart2 } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

const Header = () => {
    return (
        <header className="border-b-2 bg-white">
            <div className="container  max-w-6xl mx-auto my-0">
                <div className="flex items-center px-4 md:px-0 justify-between">
                    <a href="/">
                        <img
                            className="w-40"
                            src="https://www.creativefabrica.com/wp-content/uploads/2020/09/17/Book-Logo-Graphics-5535886-1.jpg"
                            alt="logo"
                        />
                    </a>
                    <ul className="hidden md:flex items-center gap-6">
                        <li>
                            <a
                                className="text-white py-2 border-2 px-3 transition-all bg-slate-600 rounded-2xl hover:text-slate-600 hover:bg-white hover:border-slate-600 hover:border-2"
                                href="#">
                                Art book
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-white py-2 border-2 px-3 transition-all bg-slate-600 rounded-2xl hover:text-slate-600 hover:bg-white hover:border-slate-600 hover:border-2"
                                href="#">
                                Fairy tale book
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-white py-2 border-2 px-3 transition-all bg-slate-600 rounded-2xl hover:text-slate-600 hover:bg-white hover:border-slate-600 hover:border-2"
                                href="#">
                                Uzbek book
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-white py-2 border-2 px-3 transition-all bg-slate-600 rounded-2xl hover:text-slate-600 hover:bg-white hover:border-slate-600 hover:border-2"
                                href="#">
                                English book
                            </a>
                        </li>
                    </ul>
                    <div className="flex items-center gap-8">
                        <BsCart2 className="text-2xl text-cyan-700 cursor-pointer" />
                        <FiShoppingBag className="text-2xl text-cyan-700 cursor-pointer" />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
