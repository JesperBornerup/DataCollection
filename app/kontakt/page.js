"use client";
import useSWR from "swr";
export default function Kontakt() {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error, isLoading } = useSWR(`/api/notes`, fetcher);
  if(data) {
    return (
    <main className="flex justify-center items-center pt-8">
      <div className="text-center">
        <p>Navn: Jesper Skov Bornerup</p>
        <p>
          E-mail: jskb [AT] itu [DOT] dk
          </p>
      </div>
    </main>
  );
    }
}