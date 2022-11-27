import React from "react";
import useIterator from "./useIterator";

const IteratorTest = () => {
  const [userList, current, loading, next, previous] = useIterator(
    "https://randomuser.me/api/"
  );

  return (
    <div>
      <p>
        All users:
        {/* {userList.map((user) =>
          current.name === user.name ? (
            <b>{user.name}</b>
          ) : (
            <span>{user.name}</span>
          )
        )} */}
      </p>
      {loading ? (
        "Loading..."
      ) : (
        <div>{/* <p>Current user: {current.name}</p> */}</div>
      )}
      <button
        onClick={() => {
          // next();
        }}
      >
        Next
      </button>
      <button
        onClick={() => {
          // previous();
        }}
      >
        Previous
      </button>
    </div>
  );
};

export default IteratorTest;
