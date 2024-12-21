import {
    FaAngleDoubleRight,
    FaAngleDoubleLeft
} from 'react-icons/fa';

const NavigationButtons = ({
    currentPage,
    scrollToPage
}: { currentPage: any, scrollToPage:(pageIndex:number) => void}) => {
  const totalPages = 5;


  return (
    <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
      {/* Left Button */}
      {currentPage > 0 && (
        <button
          onClick={() => scrollToPage(currentPage - 1)}
          className="motion-preset-blur-down-md motion-duration-2000 w-8 h-8 bg-gray-400 dark:bg-gray-600 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-gray-600 dark:hover:bg-gray-800 cursor-w-resize"
        >
         <FaAngleDoubleLeft />
        </button>
      )}

      {/* Right Button */}
      {currentPage < totalPages - 1 && (
        <button
          onClick={() => scrollToPage(currentPage + 1)}
          className="motion-preset-blur-down-md motion-duration-2000 w-8 h-8 bg-gray-400 dark:bg-gray-600 text-white rounded-full flex items-center justify-center transition duration-300 hover:bg-gray-600 dark:hover:bg-gray-800 cursor-e-resize"
        >
          <FaAngleDoubleRight />
        </button>
      )}
    </div>
  );
};

export default NavigationButtons;