/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */

const { CdktfProviderProject } = require("@cdktf/provider-project");
const project = new CdktfProviderProject({
  useCustomGithubRunner: true,
  terraformProvider: "DataDog/datadog@~> 3.0",
  cdktfVersion: "^0.16.0",
  constructsVersion: "^10.0.0",
  minNodeVersion: "16.14.0",
  jsiiVersion: "^1.53.0",
  devDeps: ["@cdktf/provider-project@^0.2.95"],
});

project.synth();
