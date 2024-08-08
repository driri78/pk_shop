import React from "react";
import AccountItem from "../../../AccountItem";
import { useSearchId } from "../../../../../contexts/SearchIdContext";

const SearchIdPhone = () => {
  const { searchPhone } = useSearchId();
  return (
    <div>
      {searchPhone.map((user) => (
        <AccountItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchIdPhone;
