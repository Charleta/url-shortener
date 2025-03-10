import { UrlShortener} from "./components/input-link";

export default function Home() {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center text-white mt-20">
        Acortador de URL
      </h1>
      <UrlShortener />
      
    </div>
  );
}
