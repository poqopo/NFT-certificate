
const namePrefix = "For Example";
const description = "Test for NFT description";
const baseUri = "https://bigdata-policing.kr";

const layerConfigurations = [
  {
    growEditionSizeTo: 100,
    layersOrder: [
      { name: "Background" },
    ],
  },
];

const format = {
  width: 2400,
  height: 1698,
  smoothing: true,
};

const debugLogs = false;

const text = {
  color: "#000000",
  size: 36,
  xGap: 660,
  yGap: 645,
  yspace : 75,
  align: "left",
  baseline: "top",
  weight: "bold",
  family: "Serif",
};

const extraMetadata = {};

module.exports = {
  format,
  baseUri,
  description,
  layerConfigurations,
  debugLogs,
  extraMetadata,
  text,
  namePrefix,
};