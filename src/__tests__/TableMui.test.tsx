import * as React from "react";
import { shallow } from "enzyme";
import { TableMui } from "../TableMui";

it("should render", () => {
  shallow(<TableMui data={[]} desc={false} />);
});
