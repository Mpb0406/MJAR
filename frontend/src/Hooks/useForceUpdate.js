import React, { useState } from "react";

const useForceUpdate = () => {
  const [value, setValue] = useState(0);

  console.log(value);

  return () => setValue((value) => value + 1);
};

export default useForceUpdate;
