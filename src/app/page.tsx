import { UrlShortener } from "./components/input-link";
import Container from "./components/container";
import UrlList from "./components/url-list";

export default function Home() {
  return (
    <div>
      <Container>
        <h1 className="font-bold text-4xl text-center text-white mb-10">
          Acortador de URL
        </h1>
        <UrlShortener />
        <UrlList />
      </Container>
    </div>
  );
}
