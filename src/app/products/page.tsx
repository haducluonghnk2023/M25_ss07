"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function page() {
  const [inputNameValue, setInputNameValue] = useState("");
  const [inputCategoryValue, setInputCategoryValue] = useState("");
  const searchParam = useSearchParams();
  const searchName = searchParam.get("name");
  const searchCategory = searchParam.get("category");
  const route = useRouter();
  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputNameValue(event.target.value);
  };
  const handleChangeCategory = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputCategoryValue(event.target.value);
  };
  const handleClick = () => {
    route.push(
      `/products?name=${encodeURIComponent(
        inputNameValue
      )}&category=${encodeURIComponent(inputCategoryValue)}`
    );
  };
  return (
    <div>
      <input
        type="text"
        placeholder="tìm kiếm theo tên"
        onChange={handleChangeName}
      />
      <br />
      <input
        type="text"
        placeholder="tìm kiếm theo danh mục"
        onChange={handleChangeCategory}
      />
      <br />
      <button onClick={handleClick}>Tìm kiếm</button>
      <p>tên:{searchName}</p>
      <p>danh mục:{searchCategory}</p>
    </div>
  );
}
