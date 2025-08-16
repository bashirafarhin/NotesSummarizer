// components/main/MainContent.tsx
import Header from "../Header";
import InputBox from "../InputBox";

export default function MainContent() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center relative">
      <Header />
      <div className="flex flex-col items-center gap-6">
        <h1 className="text-2xl">What's on the agenda today?</h1>
        <InputBox />
      </div>
    </div>
  );
}
