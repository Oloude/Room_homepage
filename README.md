# Frontend Mentor - Room homepage solution

This is a solution to the [Room homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/room-homepage-BtdBY_ENq). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Navigate the slider using either their mouse/trackpad or keyboard

### Screenshot

![](./public/preview.png)

### Links

- Solution URL: [Github](https://github.com)

## My process

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language.

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function Homepage() {
  const [currentNum, setCurrentNum] = useState(1);

  function handlePrev() {
    setCurrentNum((prev) => (prev === 1 ? 3 : prev - 1));
  }

  function handleNext() {
    setCurrentNum((prev) => (prev === 3 ? 1 : prev + 1));
  }
  return (
    <section className="grid gird-cols-1 grid-rows-[auto_auto]">
      <div className="grid grid-cols-1 grid-rows-[auto_25rem] lg:grid-cols-5 lg:grid-rows-1">
        <div className="relative lg:col-span-3">
          <HeroImage
            imgMobile={data[currentNum - 1].mobile}
            imgDesktop={data[currentNum - 1].desktop}
          />
          <CarouselButton
            id={1}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </div>

        <Content name="hero">
          <h1 className="text-4xl font-bold text-black mb-4">
            {data[currentNum - 1].title}
          </h1>
          <p className="text-darkGray text-base mb-10 lg:mb-7">
            {data[currentNum - 1].desc}
          </p>
          <button className="flex text-black hover:text-darkGray text-base uppercase gap-2 items-center tracking-[10px]">
            Shop now <img src={arrowIcon} alt="" />
          </button>
          <CarouselButton
            id={2}
            handlePrev={handlePrev}
            handleNext={handleNext}
          />
        </Content>
      </div>
      <div className="grid grid-cols-1 grid-rows-[30rem_20rem_30rem] lg:grid-cols-3 lg:grid-rows-1">
        <Image img={aboutDark} />
        <Content name="about">
          <h3 className="text-xl font-bold text-black mb-4 uppercase tracking-[5px]">
            About our furniture{" "}
          </h3>
          <p className="text-darkGray text-base  ">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </Content>
        <Image img={aboutLight} />
      </div>
    </section>
  );
}
```

## Author

- Frontend Mentor - [@Oloude](https://www.frontendmentor.io/profile/Oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
