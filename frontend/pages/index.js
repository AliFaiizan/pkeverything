import { useState, useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { Banner, CreatorCard, MainContent } from '../components';
import images from '../assets';
import { frequentActions } from '../data';
import Head from 'next/head';

const Home = () => {
  const [hideButtons, setHideButtons] = useState(false);
  const parentRef = useRef(null);
  const scrollRef = useRef(null);
  const { theme } = useTheme();

  const handleScroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = window.innerWidth > 1800 ? 270 : 200;
    if (direction === 'left') {
      current.scrollLeft -= scrollAmount;
    } else {
      current.scrollLeft += scrollAmount;
    }
  };

  const isScrollable = () => {
    const { current } = scrollRef;
    const { current: parent } = parentRef;
    if (current?.scrollWidth >= parent?.offsetWidth) {
      setHideButtons(false);
    } else {
      setHideButtons(true);
    }
  };
  useEffect(() => {
    isScrollable();
    window.addEventListener('resize', isScrollable);

    return () => window.removeEventListener('resize', isScrollable);
  });

  return (
    <>
    <Head>
      <title>Bijleghar - Your Electricity Companion</title>
      <meta name="description" content="Bijleghar is your one-stop solution for all electricity-related needs. Access bills, get updates, and more."></meta>
      <meta name="keywords" content="Bijleghar, Electricity, Bills, Updates, Pakistan"></meta>
      <meta name="robots" content="index, follow"></meta>
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8"></meta>
      <meta name="language" content="English"></meta>
      <meta name="author" content="Bijleghar"></meta>
    </Head>
    <div className="flex justify-center sm:px-4 p-12 py-5">
      <div className="w-full minmd:w-4/5">
        <Image src={images.mainbanner}
        
        />
        
        <div>
          <div
            className="relative flex-1 justify-center max-w-full flex mt-1"
            ref={parentRef}
          >
            <div
              className="flex flex-row overflow-x-scroll no-scrollbar"
              ref={scrollRef}
            >
              {Object.keys(frequentActions).map((key) => (
                <CreatorCard key={key} element={frequentActions[key]} />
              ))}
              {!hideButtons && (
                <>
                  <div
                    onClick={() => handleScroll('left')}
                    className="absolute w-8 h-8 minlg:w-12 min:h-12 top-45 cursor-pointer left-0"
                  >
                    <Image
                      src={images.left}
                      alt="lefticon"
                      className={theme === 'light' && 'filter invert-75'}
                    />
                  </div>
                  <div
                    onClick={() => handleScroll('right')}
                    className="absolute w-8 h-8 minlg:w-12 min:h-12 top-45 cursor-pointer right-0"
                  >
                    <Image
                      src={images.right}
                      alt="righticon"
                      className={theme === 'light' && 'filter invert-75'}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
        <Banner
          name="Everything You Need To Know About Electricity"
          substyles="md:text-3xl sm:text-xl sx:text-xl text-left"
          styles="justify-start mb-3 h-50 p-12 xs:p-4 md:h-40 rounded-3xl"
        />
        <div className="mt-10 sm:mt-5">
          <div className="flexBetween  xs:mx-0 minlg:mx-8 sm:flex-col sm:items-start">
            <div className="flex-row flexBetween sm:mb-2 sm:w-full ">
              <div className=" bg-w-grey-1 dark:bg-w-black-1 p-2 pt-1 rounded-md">
                <p className="text-w-grey-2">Posts</p>
              </div>
              {/* <div className=" ml-5 ">
                <select className="dark:bg-w-black-1 bg-w-grey-1 border border-color rounded-lg w-full outline-none font-poppins dark:text-w-grey-1 text-w-grey-2 text-base p-1.5">
                  <option value="1">Latest</option>
                  <option value="1">Most Viewed</option>
                </select>
              </div> */}
            </div>
            <div className="flexBetween minlg:w-557  bg-color border border-color rounded-md  bg-w-grey-1 dark:bg-w-black-1">
              <input
                type="text"
                placeholder="Search"
                className="h-full flex-1 w-full bg-color px-4 rounded-md  font-normal text-xws minglg:text-lg outline-none  bg-w-grey-1 dark:bg-w-black-1 "
              />
              <i className="fas fa-search p-2 fa-grey " />
            </div>
          </div>
        </div>
        <MainContent />
      </div>
    </div>
    </>
  );
};
export default Home;

