import tw from "tailwind-styled-components"


const Form = tw.form`
lg:w-1/2
`;
export { Form };


const Input = tw.input`
w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-lg focus:shadow-outline
`;
export { Input };



const Button = tw.button`
hover:bg-cyan-400 bg-cyan-500 text-white font-bold py-2 px-4 rounded
`;


export { Button };