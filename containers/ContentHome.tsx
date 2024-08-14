import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { CiSearch } from "react-icons/ci";
import { useRouter } from "next/router";
import { ListProduct } from "../interfaces/product";
import { GetUsersQuery } from "../interfaces/user";
import { getAllProducts } from "../services/product";
import Link from "next/link";
import PaginationClient from "../components/Pagination/PaginationClient";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { Categorys, News, Support } from "../mockData";
import Footer from "../components/Footer";
import { IoSearch } from "react-icons/io5";

const minimalUi = {
  offscreenP: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  offscreenH: {
    y: -100,
    opacity: 0,
  },
};

const inputVariant = {
  open: {
    width: "800px",
    transition: {
      duration: 0.4,
    },
  },
  closed: {},
};
const DEFAULT_PRODUCTS_LIMIT = 52;
const ContentHome = () => {
  const [focused, setFocused] = useState(false);
  const [limitValue, setLimitValue] = useState(DEFAULT_PRODUCTS_LIMIT);

  const [searchValue, setSearchValue] = useState("");
  console.log({ searchValue });
  const [products, setProducts] = useState<ListProduct[]>();
  const [totalProduct, setTotalProduct] = useState(0);
  const images = [
    // "./images/logo.png",
    // "./images/logo1.jpg",
    // "./images/bannerhotel.jpeg",
    "./images/banner1.png",
    "./images/banner2.png",
    "./images/banner3.png",

    // "./images/anh3.png",
    // "./images/anh4.png",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  console.log(currentImageIndex, "currentImageIndex");

  const goToPreviousImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex - 1 >= 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const goToNextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex + 1 < images.length ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex + 1 < images.length ? prevIndex + 1 : 0
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const router = useRouter();

  const fetchProducts = async (query?: GetUsersQuery): Promise<void> => {
    try {
      const { data } = await getAllProducts({
        ...query,
        limit: limitValue,
        page: query?.page ? query?.page : 1,
      });

      setProducts(data.product);
      setTotalProduct(data.total);
    } catch (error) {
      console.log(error);
    }
  };
  const onChangePage = (page: number) => {
    router.push(
      {
        query: {
          page: page,
        },
      },
      undefined,
      { shallow: true }
    );
  };
  useEffect(() => {
    fetchProducts(router.query);
  }, [router.isReady, router.query]);

  const handleSearch = (e: any) => {
    e.preventDefault();
    const query = { ...router.query, query: searchValue };

    router.push({ pathname: "/product", query });
  };

  const [startIndex, setStartIndex] = useState(0);
  console.log(startIndex, "startIndex");

  const handleNext = () => {
    setStartIndex((prevIndex) => prevIndex + 7);
  };

  const handlePrevious = () => {
    setStartIndex((prevIndex) => prevIndex - 7);
  };
  console.log(startIndex, "xxxxsxsxs");
  console.log(startIndex + 8, "loghocai");
  const categorys = Categorys.slice(startIndex, startIndex + 8);

  // const categoryProducts = ["kids", "men", "women", "all"];
  let categoryProducts: any[] = [];
  products?.forEach((item) => {
    const categr = item.category.name;
    categoryProducts.push(categr);
  });
  if (!categoryProducts.includes("all")) {
    categoryProducts.push("all");
  }
  categoryProducts = [...(new Set(categoryProducts) as any)];

  console.log(categoryProducts, "jdshdkads");

  const handleClick = (id: number) => {
    router.push(`/article/${id}`);
  };
  const [openSearch, setOpenSearch] = useState(false);

  const iconVariants = {
    open: { rotate: 180, scale: 1.2 }, // Thay đổi tùy ý
    closed: { rotate: 0, scale: 1 },
  };
  return (
    <div className="max-w-sm md:max-w-2xl lg:max-w-[1200px] mx-auto">
      <div className="relative max-w-[672px] lg:max-w-[1200px] mx-auto">
        {openSearch ? (
          <form onSubmit={(e) => handleSearch(e)} className="mb-12">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative flex justify-center items-center w-full">
              <div className="relative w-full max-w-lg">
                <motion.input
                  onFocus={() => setOpenSearch(true)}
                  onBlur={() => setOpenSearch(false)}
                  variants={inputVariant}
                  initial="closed"
                  animate={openSearch ? "open" : "closed"}
                  onChange={(e) => setSearchValue(e.target.value)}
                  type="text"
                  id="simple-search"
                  className="bg-gray-800 text-white border border-gray-600 rounded-lg pl-10 pr-4 py-2 placeholder-gray-500 transition-all duration-300 w-full min-w-0 max-w-full"
                  placeholder="Search..."
                />
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <CiSearch className="text-gray-500" />
                </div>
              </div>
            </div>
          </form>
        ) : (
          <motion.div
            onClick={() => setOpenSearch(true)}
            className="flex items-center justify-end text-white hover:cursor-pointer mb-5"
            variants={iconVariants}
            initial="closed"
            animate={openSearch ? "open" : "closed"}
            transition={{ duration: 0.3 }} // Thay đổi thời gian animation nếu cần
          >
            <IoSearch size={26} />
          </motion.div>
        )}

        <div className="flex flex-col lg:flex-row gap-4 h-[400px]">
          <div className="lg:w-7/12 relative group flex-1 h-full">
            <img
              className="w-full h-full object-cover rounded-md"
              src={images[currentImageIndex]}
              alt="Slideshow"
            />
            <div className="slideshow-controls text-center absolute top-1/2 transform -translate-y-1/2 w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button
                className="hover:cursor-pointer mr-2 bg-black opacity-20 hover:opacity-30 text-white py-2 rounded-md px-4 text-3xl absolute left-3"
                onClick={goToPreviousImage}
              >
                <MdKeyboardArrowLeft />
              </button>
              <button
                onClick={goToNextImage}
                className="bg-black opacity-20 hover:opacity-30 text-white py-2 rounded-md px-4 text-3xl absolute right-3"
              >
                <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="hidden lg:flex lg:w-5/12 flex-col justify-between">
            <img
              className="w-full h-[calc(50%-4px)] object-cover rounded-lg"
              src="./images/anh5.jpg"
              alt="Image 1"
            />
            <img
              className="w-full h-[calc(50%-4px)] object-cover rounded-lg"
              src="./images/anh6.jpg"
              alt="Image 2"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12">
          <div className="col-span-1 lg:col-span-5 mt-16">
            <div className="text-[30px] font-light text-white mt-5 mb-[30px]">
              Hãy Đồng hành cùng chúng tôi
            </div>
            <div className="space-y-7">
              {Support.map((item, index) => (
                <div key={index} className="flex items-start gap-x-5">
                  <div className="text-primary">{item.icon}</div>
                  <div>
                    <div className="text-white text-lg font-bold">
                      {item.title}
                    </div>
                    <div className="text-[#ccc] text-sm">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-span-1 lg:col-span-7 flex justify-center">
            <img className="h-[560px]" src="./images/anhsp.png" alt="" />
          </div>
        </div>
        <div className="text-[30px] flex justify-center font-light text-white mt-5 mb-[30px]">
          Danh Mục Sản Phẩm.
        </div>
        <div>
          <div className="flex gap-x-[38px] whitespace-nowrap overflow-hidden">
            {categoryProducts.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center"
                style={{ minWidth: "124px" }}
              >
                <img
                  className="w-[124px] h-[124px] rounded-full object-cover"
                  src="./images/anh6.jpg"
                  alt=""
                />
                <div className="text-white mt-2">{item}</div>
              </div>
            ))}
          </div>
          <div className="text-white">
            <button onClick={handlePrevious} disabled={startIndex === 0}>
              Previous
            </button>
            <button
              onClick={handleNext}
              disabled={startIndex + 8 >= Categorys.length}
            >
              Next
            </button>
          </div>
        </div>
        <div className="text-[30px] flex justify-center font-light text-white mt-5 mb-[30px]">
          Danh Sách Sản Phẩm
        </div>
        {products && products.length > 0 ? (
          <div>
            {categoryProducts.map((categoryProduct, idx) => (
              <div key={idx}>
                <h2 className="text-white">{categoryProduct.toUpperCase()}</h2>
                <div className="grid grid-cols-4 gap-6 mb-10">
                  {products?.map(
                    (product, index) =>
                      (categoryProduct === "all" ||
                        product.category.name === categoryProduct) && (
                        <div key={index}>
                          <Link
                            href={`/product/${product?.id}`}
                            className="bg-product col-span-4 lg:col-span-1 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
                          >
                            <div className="p-2">
                              <img
                                className="rounded-lg w-[262px] h-[262px] object-cover"
                                src={product?.listImage[0]}
                                alt={product?.name}
                              />
                            </div>
                            <div className="py-6 px-2">
                              <h1 className="text-base font-semibold text-white">
                                {product?.name}
                              </h1>
                              <div className="flex items-center justify-between mt-5 px-3">
                                <div className="flex items-center">
                                  {product?.color.map((col, idx) => (
                                    <div
                                      className="h-3 w-3 rounded-full"
                                      key={idx}
                                      style={{ backgroundColor: col }}
                                    />
                                  ))}
                                </div>
                                <p className="text-base font-semibold text-white">
                                  {product?.price.toLocaleString("vi")} đ
                                </p>
                              </div>
                            </div>
                          </Link>
                        </div>
                      )
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="flex w-full justify-center items-center text-xl sm:text-2xl font-bold py-40 opacity-20">
            Không có sản phẩm bạn đang tìm!!
          </p>
        )}
        {/* {products && products?.length > 0 ? (
          <div className="grid grid-cols-4 gap-6 mb-10">
            {products.map((product, idx) => (
              <Link
                href={`/product/${product?.id}`}
                className="bg-product col-span-4 lg:col-span-1 rounded-lg cursor-pointer hover:-translate-y-1 transition-all duration-200"
                key={idx}
              >
                <div className="p-2">
                  <img
                    className="rounded-lg w-[262px] h-[262px] object-cover"
                    src={product?.listImage[0]}
                    alt={product?.name}
                  />
                </div>
                <div className="py-6 px-2">
                  <h1 className="text-base font-semibold text-white">
                    {product?.name}
                  </h1>
                  <div className="flex items-center justify-between mt-5 px-3">
                    <div className="flex items-center">
                      {product?.color.map((col, idx) => (
                        <div
                          className="h-3 w-3 rounded-full"
                          key={idx}
                          style={{ backgroundColor: col }}
                        />
                      ))}
                    </div>
                    <p className="text-base font-semibold text-white">
                      {product?.price.toLocaleString("vi")} đ
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <p className="flex w-full justify-center items-center text-xl sm:text-2xl font-bold py-40 opacity-20">
            Không có sản phẩm bạn đang tìm!!
          </p>
        )} */}
        <div className="text-[30px] flex justify-center font-light text-white mt-5 mb-[30px]">
          Tin Tức FitFusionZone
        </div>
        <div className="grid grid-cols-3 gap-5 mb-10">
          {News.map((item, index) => (
            <div
              onClick={() => handleClick(item.id)}
              key={item.id}
              className="flex flex-col items-center space-y-4"
            >
              <div className="w-[300px] h-[300px] ">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-white">{item.title}</div>
            </div>
          ))}
        </div>
        <PaginationClient
          current={Number(router.query.page || 1)}
          pageSize={limitValue}
          total={totalProduct}
          onChange={onChangePage}
        />
        <Footer />
      </div>
    </div>
  );
};

export default ContentHome;
