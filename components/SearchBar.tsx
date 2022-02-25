import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { SearchIcon } from "@heroicons/react/outline";
const SearchBar = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  useEffect(() => {
    router.replace(`/?keyword=${keyword}`);
  }, [keyword]);
  return (
    <div className="p-2 flex items-center bg-white rounded-lg border-2 focus-within:border-blue-500">
      <SearchIcon className="w-6 h-6 text-neutral-600 mr-2" />
      <input
        onChange={(e) => setKeyword(e.target.value)}
        className="w-full outline-none"
        placeholder="Search for articles..."
      />
    </div>
  );
};

export default SearchBar;
