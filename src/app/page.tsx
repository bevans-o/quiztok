import PreLiveFooter from "./components/layout/PreLiveFooter";
import PreLiveHeader from "./components/layout/PreLiveHeader";
import StreamView from "./components/layout/StreamView";

export default function Home() {
  return (
    <StreamView>
      <PreLiveHeader className="absolute top-0" />
      <PreLiveFooter className="absolute bottom-0" />
    </StreamView>
  );
}
