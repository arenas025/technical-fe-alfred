// UI
import Button from "@/UI/atoms/Button/Button";

const Pagination = ({
  page,
  setPage,
}: {
  page: number;
  setPage: (page: number) => void;
}) => {
  const pagesNumbers = [page - 1, page, page + 1];
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
          className={`text-white  font-bold text-base ${
            number === page
              ? "bg-[#0060FF] w-10 rounded-md text-center text-black"
              : ""
          }`}
        >
          {number >= 0 ? number + 1 : ""}
        </p>
      ))}
      <Button
        text="Adelante"
        variant="pagination"
        onClick={() => setPage(page + 1)}
      />
    </div>
  );
};

export default Pagination;
