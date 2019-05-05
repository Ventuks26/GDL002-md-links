const index = require("../index.js");
const readFile = require('../links.js');

describe("pathInserted is a function", () => {
  it('pathInserted', () => {
    expect(typeof index.pathInserted).toBe("function");
  });
});

describe("pathInserted", () => {
  it("Should return false", () => {
    expect(index.pathInserted()).toBe(false);
  });
  it("Should return true", () => {
    expect(index.pathInserted("./README.md")).toBe(true);
  });
});

describe("pathWorking is a function", () => {
  it("pathWorking", () => {
    expect(typeof index.pathWorking).toBe("function");
  });
});

describe("pathWorking", () => {
  it("Should be false", () => {
    expect(index.pathWorking("./README.txt")).toBe(false);
  });
  it("Should be true", () => {
    expect(index.pathWorking("./README.md")).toBe(true);
  });
});

describe("pathDirectory is a function", () => {
  it("pathDirectory", () => {
    expect(typeof index.pathDirectory).toBe("function");
  });
});

describe("pathDirectory", () => {
  it("Should be true", () => {
    expect(index.pathDirectory("/home/laboratoria-183/Escritorio/ventura")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.pathDirectory("./README.md")).toBe(false);
  });
});

describe("pathMd is a function", () => {
  it("pathMd", () => {
    expect(typeof index.pathMd).toBe("function");
  });
});

describe("pathMd", () => {
  it("Should be true", () => {
    expect(index.pathMd("./README.md")).toBe(true);
  });
  it("Should be false", () => {
    expect(index.pathMd("./README.txt")).toBe(false);
  });
});

test('should be read contend of file with a asyncronous function', () => {
  readFile('./prueba.md', null).then((result) => {
    expect(result).toEqual('Content of file');
  });
});

describe("links is a function", () => {
  it("links", () => {
    expect(typeof index.links).toBe("function");
  });
});


