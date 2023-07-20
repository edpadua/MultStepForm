import tw from "tailwind-styled-components"


const Form = tw.form`
lg:w-1/2
`;
export { Form };


const Input = tw.input`
w-full h-10 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-xl focus:shadow-outline
`;
export { Input };



const Button = tw.button`
hover:bg-indigo-400 bg-indigo-600 text-white font-bold py-2 px-4 rounded-xl
`;

export { Button };

interface TextAreaProps{
    rows:number;
}

const Textarea=tw.textarea<TextAreaProps>`
w-full h-24 px-3 mb-2 text-base text-gray-700 placeholder-gray-600 border rounded-xl focus:shadow-outline
`;
export { Textarea };