const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const InstrumentInfoView = require('./views/instrument_family_info_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const selectElement = document.querySelector('select#instrument-families');
  const instrumentDropdown = new SelectView(selectElement);
  instrumentDropdown.bindEvents();

  const infoDiv = document.querySelector('div#instrument-family');
  const instrumentInfoView = new InstrumentInfoView(infoDiv);
  instrumentInfoView.bindEvents();

  const instrumentDataModel = new InstrumentFamilies();
  instrumentDataModel.bindEvents();
});
