// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

delete window.matchMedia;
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  onchange: null,
  addListener: jest.fn(), // deprecated
  removeListener: jest.fn(), // deprecated
  addEventListener: jest.fn(),
  removeEventListener: jest.fn(),
  dispatchEvent: jest.fn(),
});
import { jestPreviewConfigure } from "jest-preview";
// TODO: To add your global css here
import "./index.css";

jestPreviewConfigure({
  // Opt-in to automatic mode to preview failed test case automatically.
  autoPreview: true,
});
