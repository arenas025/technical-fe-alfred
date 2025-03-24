// UI
import Button from "@/UI/atoms/Button/Button";

const Pagination = ({
  totalResults,
  page,
  setPage,
}: {
  totalResults: number;
  page: number;
  setPage: (page: number) => void;
}) => {
  const pagesNumbers = [page - 1, page, page + 1].filter(
    (number) => number >= 0 && number < Math.ceil(totalResults / 10)
  );

  const isLastPage = page + 1 >= Math.ceil(totalResults / 10);

  return (
    <div className="flex justify-center py-5 items-center bg-transparent gap-4">
      {page > 0 && (
        <Button
          text="Atras"
          variant="pagination"
          onClick={() => setPage(page - 1)}
        />
      )}
      {pagesNumbers.map((number) => (
        <p
          key={number}
          className={`text-white font-bold text-base ${
            number === page
              ? "bg-[#0060FF] w-10 rounded-md text-center text-black"
              : ""
          }`}
        >
          {number + 1}
        </p>
      ))}
      {!isLastPage && (
        <Button
          text="Adelante"
          variant="pagination"
          onClick={() => setPage(page + 1)}
        />
      )}
    </div>
  );
};

export default Pagination;
