import { useState } from "react";
import SearchText from "./SearchText";

const itemsData = [
  { id: 1, name: "Ali Ahmad", role: "Developer" },
  { id: 2, name: "Sara Khan", role: "Designer" },
  { id: 3, name: "Mohammed Idris", role: "Manager" },
  { id: 4, name: "Aisha Noor", role: "QA Engineer" },
  { id: 5, name: "Hamid Shah", role: "Backend Developer" }
];

export default function SearchFilter() {
  const [searchText, setSearchText] = useState("");

  const filteredItems = itemsData.filter((item) =>
    item.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="p-6 max-w-xl mx-auto">
      
      <SearchText searchText = {searchText} setSearchText = {setSearchText}/>
      

      {/* Filtered Items */}
      <div className="grid gap-4">
        {
          filteredItems.length > 0 ? (
            filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-4 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600">{item.role}</p>
            </div>
          ))
          ) : <p>No results found</p>
}
      </div>
    </div>
  );
}
