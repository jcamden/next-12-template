import { NextPage } from "next";
import React from "react";

import { Center } from "../../ui/components";

interface Five00Props {}

const Five00: NextPage<Five00Props> = () => {
  return (
    <Center>
      <h1 className="text-9xl">500, pal.</h1>
    </Center>
  );
};

export default Five00;
