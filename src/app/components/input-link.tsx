 "use client";

 import { useState } from "react";



 export const UrlShortener = () =>{
    //aca usamos el usestate para poder darle un valor inicial al input
    // y poder usarlo una vez este se modifique
    const [url, setUrl ] = useState ('');

    const handleSubmit = (e: React.FormEvent) => {

        //usamos el preventDefault para evitar que la pagina se recargue
        e.preventDefault();

        if(!url.trim()){ 
            //usamos el signo de admiracion para decir que si el campo esta vacio
            
            console.log('Campo vacio')
            return
        }
        console.log ("Url a acortar del input", url)
        
        setUrl(''); //Aca usamos esto para que limpie la Url, y no se quede guardada en el input

    };

    return <InputLink url={url} setUrl={setUrl} handleSubmit={handleSubmit} />;

 };
 


 
 interface InputLinkProps {
   url: string;
   setUrl: (value: string) => void;
   handleSubmit: (e: React.FormEvent) => void;
 }

 export const InputLink = ({ url, setUrl, handleSubmit }: InputLinkProps) => {
   return (
     <form
       onSubmit={handleSubmit}
       className="flex flex-col items-center justify-center w-full"
     >
       <input
         type="url"
         value={url}
         onChange={(e) => setUrl(e.target.value)}
         placeholder="Introduce un enlace"
         className="w-full px-4 py-2 text-black bg-gray-200 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
       />
       <button
         type="submit"
         className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600"
       >
         Acortar
       </button>
     </form>
   );
 };


