
import * as React from "react";

function BlogPost({ image, date, title, description }) {
  return (
    <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
      <img src={image} alt={title} className="w-full aspect-[1.1]" />
      <div className="mt-7 text-sm tracking-wide text-stone-500">{date}</div>
      <h3 className="mt-6 text-2xl font-medium leading-9 text-gray-800">
        {title}
      </h3>
      {description && (
        <p className="mt-7 text-lg leading-8 text-neutral-500">{description}</p>
      )}
    </div>
  );
}

function BlogPostsSection() {
  const blogPosts = [
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/9bddba33be1a0663af5e9ca45ed4581d1c0acd6a75ecaea93fd57e5f688acc0c?apiKey=f417b8c00fe14582a1a201b8017683ae&",
      date: "AUGUST 17, 2021",
      title: "How to get hired at a top Digital Marketing",
      description:
        "Agency life. We've all seen the photos posted on social media – the cool...",
    },
    {
      image: "https://cdn.builder.io/api/v1/image/assets/TEMP/eea953e2ab010556a1c8fe3ef14ceff3cbcca333940b55db86955481edfad33d?apiKey=f417b8c00fe14582a1a201b8017683ae&",
      date: "AUGUST 17, 2021",
      title: "Copywriting guidelines during the coronavirus",
      description:
        "Since the coronavirus hit earlier this year, it's hard to go anywhere...",
    },
  ];

  return (
    <div className="flex gap-5 max-md:flex-col max-md:gap-0">
      <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow max-md:mt-10 max-md:max-w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6087de6a8648818dd050ff912543d637cc53339ba868ac728fd47d2009035adb?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            alt="10 Reasons to invest in SEO copywriting services"
            className="w-full aspect-[1.56] max-md:max-w-full"
          />
          <div className="mt-7 text-lg tracking-wide text-stone-500 max-md:max-w-full">
            AUGUST 17, 2021
          </div>
          <h2 className="mt-7 text-2xl font-medium leading-9 text-gray-800 max-md:max-w-full">
            10 Reasons to invest in SEO copywriting services
          </h2>
        </div>
      </div>
      {blogPosts.map((post, index) => (
        <div
          key={index}
          className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full"
        >
          <BlogPost {...post} />
        </div>
      ))}
    </div>
  );
}

function BlogSection() {
  return (
    <section className="flex justify-center items-center px-16 py-16 bg-white max-md:px-5">
      <div className="flex flex-col mt-14 w-full max-w-[1170px] max-md:mt-10 max-md:max-w-full">
        <header className="flex gap-5 px-0.5 w-full max-md:flex-wrap max-md:max-w-full">
          <h1 className="flex-auto text-5xl font-bold tracking-wider text-gray-800 leading-[65px]">
            Read More Articles <br /> From Our Blog
          </h1>
          <div className="flex gap-5 self-end mt-20 text-2xl tracking-wide max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col text-gray-800">
              <div>Content Writing</div>
              <div className="shrink-0 self-center mt-2.5 bg-lime-500 h-[3px] w-[104px]" />
            </div>
            <div className="flex-auto self-start text-stone-500">
              Content Marketing
            </div>
          </div>
        </header>
        <div className="mt-16 max-md:mt-10 max-md:max-w-full">
          <BlogPostsSection />
        </div>
        <footer className="flex gap-5 justify-between mt-12 text-xl font-semibold tracking-wide text-lime-500 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
          <button className="justify-center px-12 py-7 border border-lime-400 border-solid shadow-2xl rounded-[192px] max-md:px-5">
            Read More
          </button>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a68b1354563999180a47172792c044944bdf2ee4a005b1b6bb97882a73761a71?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            alt=""
            className="shrink-0 aspect-square w-[68px]"
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9585a153bd24d4deeff9d7c58ecc17a669c77e998e6c7749a1e5d3fdba8dc6f8?apiKey=f417b8c00fe14582a1a201b8017683ae&"
            alt=""
            className="shrink-0 aspect-square w-[68px]"
          />
        </footer>
      </div>
    </section>
  );
}

export default BlogSection;
import * as React from "react";

function SubscribeSection() {
  return (
    <section className="flex flex-col items-center py-20 pr-7 pl-20 bg-white max-md:px-5">
      <div className="mt-10 w-full max-w-[1151px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[62%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-14 max-md:mt-10 max-md:max-w-full">
              <h2 className="text-3xl font-semibold tracking-wide text-white leading-[55px] max-md:max-w-full">
                Subscribe to get information, latest news and other interesting offers about{" "}
              </h2>
              <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/6839199ae65935893e5ac6e02ff5faea7f31ed22a85903935d8c3daaf37baa1a?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="" className="mt-10 max-w-full aspect-[6.25] w-[264px]" />
              <form className="flex gap-5 mt-16 max-md:flex-wrap max-md:mt-10 max-md:mr-2.5 max-md:max-w-full">
                <label htmlFor="email" className="sr-only">Your email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your email"
                  className="grow justify-center items-start px-10 py-8 text-lg font-medium tracking-wide border border-solid shadow-2xl border-white border-opacity-20 rounded-[192px] text-indigo-950 w-fit max-md:px-5"
                />
                <button type="submit" className="justify-center px-16 py-7 text-xl font-semibold tracking-wide text-white whitespace-nowrap border border-solid shadow-2xl border-white border-opacity-70 rounded-[192px] max-md:px-5">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[38%] max-md:ml-0 max-md:w-full">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/dca2742c094376e21a38f6c812779ad4bc02b271d1d78b12aafd49aa5ed7fc8b?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="" className="grow w-full aspect-[0.82] max-md:mt-10" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-20 w-full max-w-[1277px] max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-5 max-md:flex-col max-md:gap-0">
        <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col grow items-start text-xl tracking-wide leading-9 text-neutral-500 max-md:mt-10">
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/f6d7229f200eebafc7de4ff878a5326daf7cfc4ffc676d96044a8dbdf0502cbc?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="" className="max-w-full aspect-[6.25] w-[198px]" />
            <p className="self-stretch mt-10 max-md:mt-10">
              Marketing is a company that focus on developing company's strategy for increase digital marketing
            </p>
            <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/9758e49b92ffd6590d932903edb6f212891c0cdb4e2db28c8ddece568df5d238?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="" className="mt-9 max-w-full aspect-[4.17] w-[168px]" />
          </div>
        </div>
        <div className="flex flex-col ml-5 w-[59%] max-md:ml-0 max-md:w-full">
          <div className="mt-1 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <nav className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <h3 className="text-2xl font-bold leading-9 text-gray-800">Menu</h3>
                  <ul className="mt-12 text-base leading-9 text-neutral-500 max-md:mt-10">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact Us</li>
                  </ul>
                </div>
              </nav>
              <nav className="flex flex-col ml-5 w-[44%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col max-md:mt-10">
                  <h3 className="text-2xl font-bold leading-9 text-gray-800">Services</h3>
                  <ul className="mt-12 text-base leading-9 text-neutral-500 max-md:mt-10">
                    <li>Content Strategy</li>
                    <li>Content Development</li>
                    <li>Content Creation</li>
                    <li>Content Optimazion</li>
                  </ul>
                </div>
              </nav>
              <nav className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <h3 className="text-2xl font-bold leading-9 text-gray-800">Company</h3>
                  <ul className="mt-11 text-base leading-9 text-neutral-500 max-md:mt-10">
                    <li>Site Map</li>
                    <li>Terms of Use</li>
                    <li>Privacy Notice</li>
                    <li>Cookies</li>
                    <li>Modern Slavery</li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-16 w-full border border-solid border-indigo-950 border-opacity-10 max-w-[1170px] stroke-[1px] stroke-indigo-950 stroke-opacity-10 max-md:mt-10 max-md:max-w-full" />
      <div className="flex gap-1.5 mt-10 text-base leading-9 text-neutral-500">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/af9fdf392ab8988e916fa2a74ad606d777e7b9d67a2401662ecc2137958467c0?apiKey=f417b8c00fe14582a1a201b8017683ae&" alt="" className="shrink-0 self-start w-4 aspect-square" />
        <p className="flex-auto">Copyright Markethink. All right reserved</p>
      </div>
    </footer>
  );
}

function MarketingPage() {
  return (
    <div className="flex flex-col items-center py-20 pr-7 pl-20 bg-white max-md:px-5">
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default MarketingPage;