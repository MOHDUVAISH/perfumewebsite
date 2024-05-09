
import React from 'react';
import img4 from './All images/about us banner.jpg';
import { Link } from 'react-router-dom';

const Aboutus = () => {
    return (
      <>
        <div className="mt-10 md:mt-20 px-4">
          <img
            className="h-80 w-full md:w-92 md:h-auto duration-300 cursor-pointer object-cover"
            src={img4}
            alt=""
          />
        </div>

        {/* <div className="text-center md:text-left m-1">
                <h1 className="text-2xl md:text-4xl mx-4 mt-5 md:mt-5 ">About Us</h1>
            </div>  */}
        {/* <div class="text-center md:text-left m-1">
          <h1 class="text-2xl md:text-4xl mx-4 mt-5 md:mt-5">About Us</h1>
        </div> */}

        <div class="flex justify-center items-center m-1">
          <h1 class="text-2xl md:text-4xl mx-4 mt-5 md:mt-5">About Us</h1>
        </div>

        <Link to="/destination-page " className="no-underline">
          <div>
            <p
              className=" h-14 w-94% bg-gray-200 pt-2 text-center md:text-2xl "
              style={{
                marginLeft: "4%",
                marginRight: "4%",
                fontSize: "19px",
                color: "black ",
              }}
            >
              Home - About Us
            </p>
          </div>
        </Link>

        <div className="ml-6 text-base">
          <p className="">
            Fraganote is an artisanal fragrance brand established to enable
            greater access to high-quality fragrances. We manufacture our
            products in small batches with a higher concentration of perfume oil
            that guarantees a longer stay. Our formulations are exclusive,
            rendering each bottle a unique story that we can’t wait to share
            with you.{" "}
          </p>
          <p>
            At Fraganote, we invite you to create memories with our carefully
            designed fragrances with fragments of all that we love in
            landscapes, nature, and design.
          </p>
          <p>
            <b>Luxury fragrance products with accessible pricing</b>
            <br />
            Fraganote aims to provide greater access to high-quality perfumes
            and candles. Each product contains superior ingredients guaranteed
            to make the fragrances last long
          </p>
          <p>
            <b>Premium Ingredients</b>
            <br />
            We source the highest quality ingredients and produce in small
            batches with exceptional care. Our fragrance oil comes from a
            leading perfumer in India who procures raw materials from across the
            globe, including unique elements found exclusively in South Africa,
            Spain, and Australia.{" "}
          </p>
          <p>
            <b>Safe and Skin-friendly </b> <br />
            We go to great lengths to ensure that our products are friendly for
            all skin types and do not cause allergies or rashes. Our perfumes
            have no artificial coloring and are safe to use on the skin. We
            still recommend doing a patch test before applying anything on your
            skin.
          </p>
        </div>
      </>
    );
}

export default Aboutus;
