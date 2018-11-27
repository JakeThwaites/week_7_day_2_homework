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

  const instrumentFamilyName = document.createElement('h2');
  instrumentFamilyName.textContent = instrumentFamily.name;

  const infoParagraph = document.createElement('p');
  infoParagraph.textContent = instrumentFamily.description;

  const instrumentList = document.createElement('ul');
  const familyInstruments = this.createInstrumentList(instrumentFamily.instruments);

  this.container.innerHTML = "";
  this.container.appendChild(instrumentFamilyName);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(familyInstruments);
};

InstrumentInfoView.prototype.createInstrumentList = function (family) {

  const list = document.createElement('ul');

  family.forEach((instrument) => {
    const listItem = document.createElement('li');
    listItem.textContent = instrument;
    list.appendChild(listItem);
  })
  return list;
};

module.exports = InstrumentInfoView;
