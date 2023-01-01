const Keyboard = {
  elements: {
    main: null,
    keysContainer: null,
    keys: [],
  },

  eventHandlers: {
    oninput: null,
    onclose: null,
  },

  properties: {
    value: "",
    capslock: false,
  },

  init() {
    //create main elements
    this.elements.main = document.createElement("div");
    this.elements.keysContainer = document.createElement("div");

    //set up main elements
    this.elements.main.classList.add("keyboard", "1keyboard--hidden");
    this.elements.keysContainer.classList.add("keys");

    //add to DOM
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  createKeys() {
    //returns document fragment
    const fragment = document.createDocumentFragment();
    const keyLayout = [
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "0",
      "backspace",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      "caps",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "enter",
      "done",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      ",",
      ".",
      "?",
      "space",
    ];

    //creates html for an icon

    // const creatIcon = (icon_name) => {
    //     return
    // }

    keyLayout.forEach((key) => {
      const KeyElement = document.createElement("button");
      const lineBreak = ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

      //add attributes/classes
    });
  },

  triggerEvents(handlerName) {
    console.log("event triggered!" + handlerName);
  },

  toggleCapsLock() {
    console.log("caps lock toggled");
  },

  open(initialValue, oninput, onclose) {},

  close() {},
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
