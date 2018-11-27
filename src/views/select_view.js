const PubSub = require('../helpers/pub_sub.js');

const SelectView = function(element) {
  this.element = element;
};

SelectView.prototype.bindEvents = function () {
  PubSub.subscribe('Instruments:all-instruments-ready', (event) => {
    const allInstruments = event.detail;
    this.populate(allInstruments);
  });
};


SelectView.prototype.populate = function (instrumentsData) {
  instrumentsData.forEach((instrumentFamily, index) => {
    const option = document.createElement('option');
    option.textContent = instrumentFamily.name;
    option.value = index;
    this.element.appendChild(option);
  })
};

module.exports = SelectView;
