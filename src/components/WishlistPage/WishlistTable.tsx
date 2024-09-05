import Image from "next/image";
import product1 from "../../../public/img/product/1.png";
import product2 from "../../../public/img/product/2.png";
import product3 from "../../../public/img/product/3.png";
import { useState } from "react";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import dynamic from "next/dynamic";

const FontAwesomeIcon = dynamic(
  () =>
    import("@fortawesome/react-fontawesome").then(
      (module) => module.FontAwesomeIcon
    ),
  { ssr: false }
);

export const WishlistTable = () => {
  const initialProducts = [
    {
      id: 1,
      name: "Avocado",
      price: 260.0,
      vat: 26.0,
      stock: "In Stock",
      image: product1,
      quantity: 1,
    },
    {
      id: 2,
      name: "Lettuce",
      price: 260.0,
      vat: 26.0,
      stock: "In Stock",
      image: product2,
      quantity: 1,
    },
    {
      id: 3,
      name: "Egg",
      price: 260.0,
      vat: 26.0,
      stock: "In Stock",
      image: product3,
      quantity: 1,
    },
  ];

  const [products, setProducts] = useState(initialProducts);

  const removeProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  return (
    <main className="bg-[#F2F3F9]">
      <div className="max-w-screen-xl m-auto overflow-x-scroll lg:overflow-x-hidden py-20">
        <table className="w-full text-center">
          <thead>
            <tr>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                IMAGE
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                PRODUCT NAME
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                PRICE
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                STOCK STATUS
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                ADD TO CART
              </th>
              <th className="bg-[#7BAE00] text-white py-5 border border-[#DEE2E6]">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr className="border border-[#DEE2E6]">
                <td colSpan={6} className="text-center py-5">
                  <p className="text-lg font-semibold">
                    Please Add to Wishlist
                  </p>
                </td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.id}>
                  <td className="w-[120px] p-2 border border-[#DEE2E6]">
                    <Image
                      src={product.image}
                      height={330}
                      width={330}
                      alt={product.name}
                    />
                  </td>
                  <td className="border border-[#DEE2E6]">{product.name}</td>
                  <td className="border border-[#DEE2E6]">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="border border-[#DEE2E6]">{product.stock}</td>
                  <td className="border border-[#DEE2E6]">
                    <button className="text-white bg-[#7BAE00] hover:bg-[#0B2B3C] transition duration-300 font-bold py-[10px] px-[30px] rounded-full">
                      Add to cart
                    </button>
                  </td>
                  <td className="border border-[#DEE2E6]">
                    <button
                      className="group"
                      onClick={() => removeProduct(product.id)}
                    >
                      <FontAwesomeIcon
                        className="text-[25px] group-hover:text-[#7BAE00] transition duration-300"
                        icon={faXmark}
                      />
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
};
