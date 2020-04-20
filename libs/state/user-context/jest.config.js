module.exports = {
  name: 'state-user-context',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/state/user-context',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
