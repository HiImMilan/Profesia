function LoginForm() {
 return (
    <div class="flex flex-col w-full max-w-md px-4 py-8 rounded-lg shadow bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200 sm:px-6 md:px-8 lg:px-10">
        <div class="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
            Login To WORKA Account
        </div>
        <div class="flex gap-4 item-center">
            <button type="button" class="py-2 px-4 flex justify-center items-center  bg-red-600 hover:bg-red-700 focus:ring-red-500 focus:ring-offset-red-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                <svg width="20" height="20" fill="currentColor" class="mr-2" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                    <path d="M896 786h725q12 67 12 128 0 217-91 387.5t-259.5 266.5-386.5 96q-157 0-299-60.5t-245-163.5-163.5-245-60.5-299 60.5-299 163.5-245 245-163.5 299-60.5q300 0 515 201l-209 201q-123-119-306-119-129 0-238.5 65t-173.5 176.5-64 243.5 64 243.5 173.5 176.5 238.5 65q87 0 160-24t120-60 82-82 51.5-87 22.5-78h-436v-264z">
                    </path>
                </svg>
                Google
            </button>
            {/* OAUTH2 pomocou springboot-oauth possibly?? keby nič kludne zmazať */}
        </div>
        <div class="mt-8">
            <form action="#" autoComplete="off">
                <div class="flex flex-col mb-2">
                    <div class="flex relative ">
                        <input type="text" id="sign-in-email" class="rounded-lg rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Worka ID"/>
                        </div>
                    </div>
                    <div class="flex flex-col mb-6">
                        <div class="flex relative ">
                            <input type="password" id="sign-in-email" class="rounded-lg rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Password"/>
                            </div>
                        </div>
                        <div class="flex items-center mb-6 -mt-4">
                            <div class="flex ml-auto">
                                <a href="#" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">Forgot Your Password?</a>
                                <div class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white"><span class="mx-2">|</span></div>
                                <a href="#" target="_blank" class="inline-flex text-xs font-thin text-gray-500 sm:text-sm dark:text-gray-100 hover:text-gray-700 dark:hover:text-white">Create Account?</a>
                            </div>
                            
                        </div>
                        <div class="flex w-full">
                            <button type="submit" class="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <div class="flex items-center justify-center mt-6">
                    
                </div>
            </div>
    )   
}

export default LoginForm;