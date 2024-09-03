import { useState } from "react";

export const Description = () => {
  const [activeTab, setActiveTab] = useState<string>("description");

  const renderContent = () => {
    switch (activeTab) {
      case "description":
        return (
          <div>
            <p className=" leading-7">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. One
            </p>
            <p className="py-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
            <p className=" leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
          </div>
        );
      case "additionalInfo":
        return (
          <div>
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
            <p className="py-7 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
            <p className=" leading-7">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. One
            </p>
          </div>
        );
      case "review":
        return (
          <div>
            <p className=" leading-7">
              Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus
              feugiat sem, quis fermentum turpis eros eget velit. Donec ac
              tempus ante. Fusce ultricies massa massa. Fusce aliquam, purus
              eget sagittis vulputate, sapien libero hendrerit est, sed commodo
              augue nisi non neque. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed tempor, lorem et placerat vestibulum, metus
              nisi posuere nisl, in accumsan elit odio quis mi. Cras neque
              metus, consequat et blandit et, luctus a nunc. Etiam gravida
              vehicula tellus, in imperdiet ligula euismod eget. One
            </p>

            <p className="py-4 leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
            <p className="leading-7">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
              fringilla augue nec est tristique auctor. Donec non est at libero
              vulputate rutrum. Morbi ornare lectus quis justo gravida semper.
              Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
              nulla.
            </p>
          </div>
        );
      default:
        return null;
    }
  };
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex border bg-white px-8 pt-8">
        <button
          className={`py-2 mr-10 transition-all duration-300 text-black border-b-2 font-[600] text-[15px] ${
            activeTab === "description"
              ? " border-[#7BAE00]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </button>
        <button
          className={`py-2 mr-10 transition-all duration-300 text-black border-b-2 font-[600] text-[15px] ${
            activeTab === "additionalInfo"
              ? "border-[#7BAE00]"
              : "border-transparent"
          }`}
          onClick={() => setActiveTab("additionalInfo")}
        >
          Additional Information
        </button>
        <button
          className={`py-2 mr-10 transition-all duration-300 text-black border-b-2 font-[600] text-[15px] ${
            activeTab === "review" ? "border-[#7BAE00]" : "border-transparent"
          }`}
          onClick={() => setActiveTab("review")}
        >
          Review
        </button>
      </div>
      <div className="px-8 py-7 bg-white text-[#666666] text-[15px] border rounded-b">
        {renderContent()}
      </div>
    </div>
  );
};
