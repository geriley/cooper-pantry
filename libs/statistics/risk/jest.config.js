module.exports = {
  name: 'statistics-risk',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/statistics/risk',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
