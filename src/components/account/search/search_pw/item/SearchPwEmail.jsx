import React from "react";
import AccountItem from "../../../AccountItem";
import { useSearchPw } from "../../../../../contexts/SearchPwContext";

const SearchIdEmail = () => {
  const { searchEmail } = useSearchPw();
  return (
    <div>
      {searchEmail.map((user) => (
        <AccountItem key={user.id} user={user} />
      ))}
    </div>
  );
};

export default SearchIdEmail;
