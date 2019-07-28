import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Button } from "../../../dm-binder/core/components/button/button";

Enzyme.configure({ adapter: new Adapter() });

describe("Button", () => {
    test("renders", () => {
        const button = shallow(<Button text="text" typeStr="button" />);
        expect(button.exists()).toBe(true);
    });
});
