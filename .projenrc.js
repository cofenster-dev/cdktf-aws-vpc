const { cdktf } = require('projen');
const project = new cdktf.ConstructLibraryCdktf({
  author: 'Tiago Mello',
  authorAddress: 'tiago@cofenster.com',
  cdktfVersion: '1.0.0',
  defaultReleaseBranch: 'main',
  name: 'cdktf-aws-vpc',
  repositoryUrl: 'https://github.com/cofenster-dev/cdktf-aws-vpc.git',

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();