import Image from "next/image";

function SubHeader() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6">
      <div className="text-center">
        <h2 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="text-black block">Record Once</span>
          <span className="text-blue-500 block">Never Reproduce</span>
        </h2>
      </div>
    </div>
  );
}

function Feature({ title, content, type, picture }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900";
  const bodyColor = type == "dark" ? "text-white" : "text-gray-900";
  return (
    <div>
      <dt className={`text-xl leading-6 ${headerColor}`}>{title}</dt>

      <dd className={`mt-6 text-lg font-light text-gray-600 ${bodyColor}`}>
        {content}
      </dd>

      <div class="flex-shrink-0 inline-flex rounded-full mt-8">
        <img class="h-full w-full shadow-lg rounded-md" src={picture} alt="" />
      </div>
    </div>
  );
}

function FeatureGroup({ title, children, type }) {
  const headerColor = type == "dark" ? "text-white" : "text-gray-900";

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6">
      <div className="lg:gap-24 text-center">
        <div>
          <h2
            className={`text-center text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-5xl ${headerColor}`}
          >
            {title}
          </h2>
        </div>
        <div className="mt-0 lg:col-span-2">
          <dl className="space-y-12">{children}</dl>
        </div>
      </div>
    </div>
  );
}

function Quote({ content, name, position, picture }) {
  return (
    <div class="flex flex-col" style={{ maxWidth: "600px" }}>
      <blockquote class="flex-grow text-xl flex flex-col space-y-6">
        <div class="relative  flex-grow">
          <p class="relative py-0 text-xl text-gray-500">{content}</p>
        </div>
        <footer>
          <div class="flex items-start">
            <div class="flex-shrink-0 inline-flex rounded-full">
              <img class="h-12 w-12 rounded-full" src={picture} alt="" />
            </div>
            <div class="text-xl font-medium ml-4">
              <div class="text-gray-600">{name}</div>
              <div class="text-gray-600">{position}</div>
            </div>
          </div>
        </footer>
      </blockquote>
    </div>
  );
}

function FeatureQuote({ name, position, picture, style, content }) {
  return (
    <blockquote className="mt-6 md:flex-grow md:flex md:flex-col mx-8 lg:mx-12">
      <div className="relative text-lg font-light italic  md:flex-grow">
        <svg
          className="absolute top-0 left-0 transform -translate-x-10 -translate-y-2 h-8 w-8 text-blue-500"
          fill="currentColor"
          viewBox="0 0 32 32"
          aria-hidden="true"
        >
          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
        </svg>
        <Quote {...{ name, position, picture, style, content }} />
      </div>
    </blockquote>
  );
}

export default function Features() {
  return (
    <main className="bg-white space-y-16" style={{ paddingTop: "300px" }}>
      {/* <SubHeader /> */}
      <div className="bg-gray-100 py-16">
        <FeatureGroup type="light" title="Why Replay?">
          <Feature
            type="light"
            title={``}
            content={`The first step to understanding an issue is seeing it. Today teams use a blend of screenshots, screen recordings, and difficult-to-follow repro steps (if there are repro steps at all!) that take way too much time. We think there’s a better way to understand and fix bugs, so we built Replay.`}
          />
        </FeatureGroup>
      </div>
      <div className=" my-32 ">
        <FeatureGroup title="Capture the whole session">
          <Feature
            title={``}
            content={`Replay is the first runtime recorder. This means when you view a replay, you won’t need to reproduce a thing. We’ve got it all captured, so we can replay the session as it really happened.`}
            picture={"/recording.png"}
          />
        </FeatureGroup>
      </div>
      <div className=" my-32 ">
        <FeatureGroup title="Collaborate on everything">
          <Feature
            title={``}
            content={`You can add a comment on a place in the video, a point in time, a browser event, or even a line of code. Share with your team using a simple link that works in any browser so you can get on the same page.`}
            picture={"/viewing.png"}
          />
        </FeatureGroup>
      </div>
      <div className=" my-32 ">
        <FeatureGroup title="Fix difficult bugs faster">
          <Feature
            title={``}
            content={`Because Replay is a time-travelling debugger, you can add print statements to any point in time without having to refresh and replicate your steps. Find the issue, fix it, and move on.`}
            picture={"/devtools.png"}
          />
        </FeatureGroup>
      </div>
    </main>
  );
}

// "say it with a link" sounds great
