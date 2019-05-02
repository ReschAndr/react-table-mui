import * as React from "react";
import { shallow } from "enzyme";
import { tableMuiTheme } from "../index";
import { TablePlain } from "@dccs/react-table-plain";

it("should render", () => {
  shallow(<TablePlain {...tableMuiTheme} data={[]} desc={false} />);
});
