import { useState } from "react";
import classNames from "classnames";
export const Faq = () => {
    const [isShowFaq, setIsShowFaq] = useState(false);
    return (
        <div className="mx-auto">
                <div className="flex flex-col md:flex-row ">
                    <div className="md:w-1/3 p-4 text-lg">
                        <div className="sticky inset-x-0 top-0 left-0 py-4">
                            <div className="text-3xl text-blue-400 mb-8">
                                Frequently asked questions.
                            </div>
                            <div className="mb-2">
                                Lorem Ipsum ?
                            </div>
                            <div className="text-sm text-gray-600">
                                See our FAQ for more details
                            </div>
                            <div className="relative text-gray-600 mt-8 lg:mr-16">
                                <input type="search" name="serch" placeholder="Search" className="bg-white w-full h-10 px-5 border rounded-full text-sm focus:outline-none"/>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-2/3 py-4 h-[350px] overflow-y-scroll ">
                        {[...Array(4)].map(() => (
                            <div className="px-6 py-3">
                                <a href="#" 
                                    className="flex items-center justify-between"
                                    onClick={() => setIsShowFaq(!isShowFaq)}
                                >
                                    <h4 className="{'text-green-400 font-medium' : isOpen == true}">Lorem Ipsum ?</h4>
                                    <svg 
                                        className={classNames("w-5 h-5 text-gray-500 transform ", {
                                            "transform rotate-180 duration-1000": isShowFaq,
                                        })}
                                        fill="none" stroke-linecap="round" 
                                        stroke-linejoin="round" stroke-width="2" 
                                        viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M19 9l-7 7-7-7"></path>
                                    </svg>
                                </a>
                                        {isShowFaq && 
                                            (
                                            <div  className={classNames("mt-3 translate-y-0", {
                                                "transform translate-y-6 duration-2000 ease-in": isShowFaq,
                                            })}
                                            >
                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                            </div>
                                            )
                                        }
                                
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    )
  }
  