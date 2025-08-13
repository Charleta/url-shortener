"use client";
import { useEffect, useState } from "react";
import { Loading } from "./loading";

const UrlList = () => {
  const [urls, setUrls] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUrls = async () => {
      try {
        const response = await fetch("/api/urls");
        const data = await response.json();
        setUrls(data);
      } catch (error) {
        console.error("Error fetching URLs:", error);
      }
    };

    fetchUrls();
    setLoading(false);
  }, []);

  const handleDelete = async (id: string) => {
  
    try {
      await fetch(`/api/deleteUrls/${id}`,{method: "DELETE"});
      setUrls((prev)=> prev.filter((url) => url.id !== id));
      
    }catch(error){
      console.error("Error deleting URL:", error);
    }
    
  


  }

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4 text-center">URLs Acortadas</h2>

      {loading ? (
        <Loading />
      ) : (
        <div className="space-y-4">
          {urls.map((url) => (
            <div
              key={url.id}
              className="flex flex-col md:flex-row items-start md:items-center justify-between bg-white shadow rounded-lg p-4 border border-gray-100"
            >
              <div className="flex-1">
                <p className="text-gray-700 font-medium break-all">
                  Original:{" "}
                  <span className="text-blue-700">
                    {url.original.length > 50
                      ? url.original.slice(0, 50) + "..."
                      : url.original}
                  </span>
                </p>
              </div>
              <div className="mt-2 md:mt-0 md:ml-4">
                <p className="text-green-600 font-semibold">
                  Corto:{" "}
                  <a
                    href={`/api/shorten/${url.short}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline"
                  >
                    {url.short}
                  </a>
                </p>
              </div>
              <div>
                <button onClick={(e) => handleDelete(url.id)}>Borrar </button>
              </div>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UrlList;
