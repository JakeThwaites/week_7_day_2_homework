const PubSub = require('../helpers/pub_sub.js');

const InstrumentInfoView = function(container) {
  this.container = container;
};

InstrumentInfoView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:selected-family-info', (event) => {
    const instrumentFamily = event.detail;
    this.render(instrumentFamily);
  });
};

InstrumentInfoView.prototype.render = function (instrumentFamily) {

  console.log(instrumentFamily);
  const instrumentFamilyName = document.createElement('h2');
  instrumentFamilyName.textContent = instrumentFamily.name;
  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;
  // this.container.innerHTML = "";
  this.container.appendChild(instrumentFamilyName);
  this.container.appendChild(infoParagraph);
};


module.exports = InstrumentInfoView;
