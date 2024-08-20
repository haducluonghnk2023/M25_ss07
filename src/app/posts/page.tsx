"use client";

import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();
  const searchParam = useSearchParams();
  const search = searchParam.get("search");
  // khai báo hàm handleChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const handleClick = () => {
    console.log(inputValue);
    route.push(`/posts?search=${encodeURIComponent(inputValue)}`);
  };
  return (
    <div>
      <input type="text" onChange={handleChange} />
      <button onClick={handleClick}>Tìm kiếm</button>
      <h2>Search Value:{search}</h2>
    </div>
  );
}
