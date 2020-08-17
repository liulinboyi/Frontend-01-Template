import {
  parseHTML
} from "../src/parser.js";
import assert from "assert";

it("parser a single element", () => {
  let document = parseHTML("<div></div>");
  let div = document.children[0];
  assert.equal(div.tagName, "div");
  assert.equal(div.children.length, 0);
  assert.equal(div.attributes.length, 0);
  assert.equal(div.type, "element");
});

it("parser a single element with text content", () => {
  let document = parseHTML("<div>hello</div>");
  let div = document.children[0];
  let text = div.children[0];
  assert.equal(text.content, "hello");
  assert.equal(text.type, "text");
});

it("parser tag mismatch", () => {
  try {
    let document = parseHTML("<div></dov>");
  } catch (err) {
    assert.equal(err.message, "Tag start end doesn't match!");
  }
});

it("parser text with <", () => {
  let document = parseHTML("<div>a < b</div>");
  let div = document.children[0];
  let text = div.children[0];
  assert.equal(text.content, "a < b");
  assert.equal(text.type, "text");
});

it("parser end tag no name 1", () => {
  try {
    let document = parseHTML("<div></>");
  } catch (err) {
    assert.equal(err.message, "This is a missing end tag name parse error.");
  }
});

it("parser end tag no name 2", () => {
  try {
    let document = parseHTML("<div></");
  } catch (err) {
    assert.equal(err.message, "This is a eof before tag name parse error.");
  }
});

it("parser end tag no name 3", () => {
  try {
    let document = parseHTML("<div></2");
  } catch (err) {
    assert.equal(err.message, "This is a invalid first character of tag name parse error.");
  }
});

it("parser width property", () => {
  let document = parseHTML("<div id=a class='cls' data=\"sss\"   />");
  let div = document.children[0];
  let count = 0;
  for (let attr of div.attributes) {
    if (attr.name === "id") {
      count++;
      assert.equal(attr.value, "a");
    }

    if (attr.name === "class") {
      count++;
      assert.equal(attr.value, "cls");
    }

    if (attr.name === "data") {
      count++;
      assert.equal(attr.value, "sss");
    }
  }
  assert.ok(count === 3);
});

it("parser in script", () => {
  let content = `
    <div>dsf</div>
    <span>x</span>
    /script>
    <script
    <
    </
    </s
    </sc
    </scr
    </scri
    </scrip
    </script
    `;
  let document = parseHTML(`<script>${content}</script>`);
  let div = document.children[0];
  let text = div.children[0];
  assert.equal(text.content, content);
  assert.equal(text.type, "text");
});

it("parser attribute value eof 1", () => {
  try {
    let document = parseHTML('<div id="></div>');
  } catch (err) {
    assert.equal(err.message, "This is a eof in tag parse error.");
  }
});

it("parser attribute value eof 2", () => {
  try {
    let document = parseHTML("<div class=' ></div>");
  } catch (err) {
    assert.equal(err.message, "This is a eof in tag parse error.");
  }
});

it("parser attribute value eof 3", () => {
  try {
    let document = parseHTML('<div class="cls"');
  } catch (err) {
    assert.equal(err.message, "This is a eof in tag parse error.");
  }
});

it("parser attribute with no value", () => {
  let document = parseHTML("<div class ></div>");
});

it("parser attribute with no value", () => {
  let document = parseHTML("<div class id ></div>");
});

it("parser attribute with no value", () => {
  let document = parseHTML('<div class=  "cls" ></div>');
});

it("parser attribute name with ' \" < ", () => {
  try {
    let document = parseHTML("<div class'\"< ></div>");
  } catch (err) {
    assert.equal(err.message, "This is a unexpected character in attribute name parse error.");
  }
});

it("parser self Closing Start Tag", () => {
  let document = parseHTML("<div class=  'cls'/>");
});

it("parser unquote Attribute Value with /", () => {
  let document = parseHTML("<div class=cls/>");
});

it("parser unquote Attribute Value with >", () => {
  let document = parseHTML("<div class=cls></div>");
});