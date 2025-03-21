"use client";

// TP
import { useEffect, useState } from "react";
// BL
import { useGetAirports } from "@/lib/hooks/useGetAirports";
import useAppStore from "@/lib/store/appStore";

export default function Home() {
  const { getPaginatedAirports, getAirports } = useGetAirports();
  const paginatedAirports = useAppStore((state) => state.paginatedAirports);
  const [page, setPage] = useState(0);

  useEffect(() => {
    getPaginatedAirports({ offset: page });
  }, [page, getPaginatedAirports]);

  useEffect(() => {
    getAirports({ offset: 0 });
  }, []);

  return (
    <div>
      {paginatedAirports.map((airport, index) => (
        <p key={index}>{airport.airport_name}</p>
      ))}

      <button className="bg-green-300" onClick={() => setPage(page + 1)}>
        Adelante
      </button>
      {page > 0 && (
        <button className="bg-red-300" onClick={() => setPage(page - 1)}>
          Atras
        </button>
      )}
    </div>
  );
}
