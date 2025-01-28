"use client";
import React, { useState } from "react";

const ShoeGrid = () => {
  const shoesData = Array.from({ length: 30 }, (_, i) => ({
    id: i + 1,
    name: `Shoe Style ${i + 1}`,
    image: `/images/s${(i % 21) + 1}.jpg`,
  }));

  const itemsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedShoe, setSelectedShoe] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentShoes = shoesData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(shoesData.length / itemsPerPage);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const handleBuyNow = (shoe) => {
    setSelectedShoe(shoe);
    setShowModal(true);
  };

  const redirectToWhatsApp = () => {
    if (selectedShoe) {
      const message = `Hello, I am interested in buying "${selectedShoe.name}". Please provide more details.`;
      const whatsappLink = `https://wa.me/2341234567890?text=${encodeURIComponent(message)}`;
      window.open(whatsappLink, "_blank");
    }
    setShowModal(false);
  };

  return (
    <section
      id="collections"
      className="py-12 bg-gradient-to-b from-blue-900 via-black to-pink-700 animate-gradient"
    >
      <div className="container mx-auto px-4 text-center mb-8">
        <h2 className="text-4xl font-extrabold text-white mb-2">Explore Our Collections</h2>
        <p className="text-gray-300 text-lg">
          Page {currentPage} of {totalPages}
        </p>
      </div>

      {/* Shoe Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4">
        {currentShoes.map((shoe) => (
          <div
            key={shoe.id}
            className="bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-[1.03]"
          >
            <img
              src={shoe.image}
              alt={shoe.name}
              onError={(e) => (e.target.src = "/images/placeholder.jpg")}
              className="w-full h-64 object-cover rounded-t-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-700">{shoe.name}</h3>
              <button
                onClick={() => handleBuyNow(shoe)}
                className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-8 container mx-auto px-4">
        <button
          onClick={prevPage}
          disabled={currentPage === 1}
          className={`px-4 py-2 rounded-md ${
            currentPage === 1
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 rounded-md ${
            currentPage === totalPages
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          Next
        </button>
      </div>

      {/* Modal */}
      {showModal && selectedShoe && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md">
            <h3 className="text-xl font-bold text-gray-800 mb-4">Confirm Purchase</h3>
            <p className="text-gray-700 mb-4">
              Are you sure you want to buy <span className="font-semibold">{selectedShoe.name}</span>?
            </p>
            <div className="flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={redirectToWhatsApp}
                className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
              >
                Proceed to WhatsApp
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ShoeGrid;

/* Add CSS for background animation */
<style jsx global>{`
  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`}</style>;
