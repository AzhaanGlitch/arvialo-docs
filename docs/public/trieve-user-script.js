const removeAllClickListeners = (element) => {
  const newElement = element.cloneNode(true);
  element.parentNode.replaceChild(newElement, element);
  return newElement;
};

const makeDefaultSearchTrieve = async () => {
  let defaultSearchBar = null;
  let retries = 0;
  while (!defaultSearchBar && retries < 10) {
    for (const el of document.querySelectorAll("*")) {
      if (el.querySelector('#local-search > button')) {
        defaultSearchBar = el.querySelector('#local-search > button');
        break;
      }
    }
    retries++;
    await new Promise((resolve) => setTimeout(resolve, 10));
  }

  if (!defaultSearchBar) {
    return;
  }

  defaultSearchBar = removeAllClickListeners(defaultSearchBar);

  defaultSearchBar.onclick = () => {
    const event = new CustomEvent("trieve-open-with-text", {
      detail: { text: "" },
    });
    window.dispatchEvent(event);
  };
};

window.addEventListener('load', function() {
  makeDefaultSearchTrieve();
});

const originalPushState = history.pushState;
history.pushState = function() {
  originalPushState.apply(this, arguments);
  makeDefaultSearchTrieve();
};