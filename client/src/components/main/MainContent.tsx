import InputBox from "../InputBox";
import PreviousMessage from "./PreviousMessage";

export default function MainContent() {
  return (
    <div className="min-h-[50vh] my-10 flex flex-col items-center justify-center gap-3">
      <PreviousMessage />
      <InputBox />
    </div>
  );
}
