import { shallowMount } from "@vue/test-utils";
import <%= ComponentName %> from "./<%= ComponentName %>";

const factory = (args = {}) => {
  return shallowMount(<%= ComponentName %>, args);
};

describe("<%= ComponentName %>", () => {
  test("mounts properly", () => {
    const wrapper = factory();
    expect(wrapper.find("").vm).toBeTruthy();
  });

  test("renders properly", () => {
    const wrapper = factory();
    expect(wrapper.html()).toMatchSnapshot();
  });

});
