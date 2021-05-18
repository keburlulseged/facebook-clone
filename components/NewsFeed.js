import Stories from "./Stories";
import InputBox from "./InputBox";

function NewsFeed() {
  return (
    <div className="flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto max-w-md md:max-w-lg">
        <Stories />
        <InputBox />
      </div>
      {/**Stories */}
      {/**Stories */}
    </div>
  );
}

export default NewsFeed;
