import { NextPage } from "next";
import React from "react";

import { Center } from "../../ui/components";

interface Four04Props {}

const Four04: NextPage<Four04Props> = () => {
  return (
    <Center>
      <h1 className="text-9xl">404, buddy.</h1>
    </Center>
  );
};

export default Four04;
