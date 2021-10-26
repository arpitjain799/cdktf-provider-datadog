// https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyntheticsTestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Required if `type = "browser"`. Array with the different device IDs used to run the test. Valid values are `laptop_large`, `tablet`, `mobile_small`, `chrome.laptop_large`, `chrome.tablet`, `chrome.mobile_small`, `firefox.laptop_large`, `firefox.tablet`, `firefox.mobile_small`, `edge.laptop_large`, `edge.tablet`, `edge.mobile_small`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#device_ids SyntheticsTest#device_ids}
  */
  readonly deviceIds?: string[];
  /**
  * Array of locations used to run the test. Refer to [Datadog documentation](https://docs.datadoghq.com/synthetics/api_test/#request) for available locations (e.g. `aws:eu-central-1`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#locations SyntheticsTest#locations}
  */
  readonly locations: string[];
  /**
  * A message to include with notifications for this synthetics test. Email notifications can be sent to specific users by using the same `@username` notation as events.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#message SyntheticsTest#message}
  */
  readonly message?: string;
  /**
  * Name of Datadog synthetics test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Query arguments name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#set_cookie SyntheticsTest#set_cookie}
  */
  readonly setCookie?: string;
  /**
  * Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#status SyntheticsTest#status}
  */
  readonly status: string;
  /**
  * The subtype of the Synthetic API test. Defaults to `http`. Valid values are `http`, `ssl`, `tcp`, `dns`, `multi`, `icmp`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * A list of tags to associate with your synthetics test. This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#tags SyntheticsTest#tags}
  */
  readonly tags?: string[];
  /**
  * Synthetics test type. Valid values are `api`, `browser`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * api_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#api_step SyntheticsTest#api_step}
  */
  readonly apiStep?: SyntheticsTestApiStep[];
  /**
  * assertion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestAssertion[];
  /**
  * browser_step block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#browser_step SyntheticsTest#browser_step}
  */
  readonly browserStep?: SyntheticsTestBrowserStep[];
  /**
  * browser_variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#browser_variable SyntheticsTest#browser_variable}
  */
  readonly browserVariable?: SyntheticsTestBrowserVariable[];
  /**
  * config_variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#config_variable SyntheticsTest#config_variable}
  */
  readonly configVariable?: SyntheticsTestConfigVariable[];
  /**
  * options_list block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#options_list SyntheticsTest#options_list}
  */
  readonly optionsList?: SyntheticsTestOptionsList;
  /**
  * request_basicauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestRequestBasicauth;
  /**
  * request_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestRequestClientCertificate;
  /**
  * request_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestRequestDefinition;
}
export interface SyntheticsTestApiStepAssertionTargetjsonpath {
  /**
  * The JSON path to assert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue: string;
}

function syntheticsTestApiStepAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestApiStepAssertionTargetjsonpathOutputReference | SyntheticsTestApiStepAssertionTargetjsonpath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonpath: cdktf.stringToTerraform(struct!.jsonpath),
    operator: cdktf.stringToTerraform(struct!.operator),
    targetvalue: cdktf.stringToTerraform(struct!.targetvalue),
  }
}

export class SyntheticsTestApiStepAssertionTargetjsonpathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // jsonpath - computed: false, optional: false, required: true
  private _jsonpath?: string; 
  public get jsonpath() {
    return this.getStringAttribute('jsonpath');
  }
  public set jsonpath(value: string) {
    this._jsonpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonpathInput() {
    return this._jsonpath
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
  }

  // targetvalue - computed: false, optional: false, required: true
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue
  }
}
export interface SyntheticsTestApiStepAssertion {
  /**
  * Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * If assertion type is `header`, this is the header name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Type of assertion. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * targetjsonpath block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestApiStepAssertionTargetjsonpath;
}

function syntheticsTestApiStepAssertionToTerraform(struct?: SyntheticsTestApiStepAssertion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    targetjsonpath: syntheticsTestApiStepAssertionTargetjsonpathToTerraform(struct!.targetjsonpath),
  }
}

export interface SyntheticsTestApiStepExtractedValueParser {
  /**
  * Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * Regex or JSON path used for the parser. Not used with type `raw`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#value SyntheticsTest#value}
  */
  readonly value?: string;
}

function syntheticsTestApiStepExtractedValueParserToTerraform(struct?: SyntheticsTestApiStepExtractedValueParserOutputReference | SyntheticsTestApiStepExtractedValueParser): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
  }
}

export class SyntheticsTestApiStepExtractedValueParserOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // value - computed: false, optional: true, required: false
  private _value?: string | undefined; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }
}
export interface SyntheticsTestApiStepExtractedValue {
  /**
  * When type is `http_header`, name of the header to use to extract the value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#field SyntheticsTest#field}
  */
  readonly field?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * parser block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#parser SyntheticsTest#parser}
  */
  readonly parser: SyntheticsTestApiStepExtractedValueParser;
}

function syntheticsTestApiStepExtractedValueToTerraform(struct?: SyntheticsTestApiStepExtractedValue): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field: cdktf.stringToTerraform(struct!.field),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    parser: syntheticsTestApiStepExtractedValueParserToTerraform(struct!.parser),
  }
}

export interface SyntheticsTestApiStepRequestBasicauth {
  /**
  * Password for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#password SyntheticsTest#password}
  */
  readonly password: string;
  /**
  * Username for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#username SyntheticsTest#username}
  */
  readonly username: string;
}

function syntheticsTestApiStepRequestBasicauthToTerraform(struct?: SyntheticsTestApiStepRequestBasicauthOutputReference | SyntheticsTestApiStepRequestBasicauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class SyntheticsTestApiStepRequestBasicauthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface SyntheticsTestApiStepRequestClientCertificateCert {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestApiStepRequestClientCertificateCertToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateCertOutputReference | SyntheticsTestApiStepRequestClientCertificateCert): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SyntheticsTestApiStepRequestClientCertificateCertOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SyntheticsTestApiStepRequestClientCertificateKey {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestApiStepRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateKeyOutputReference | SyntheticsTestApiStepRequestClientCertificateKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SyntheticsTestApiStepRequestClientCertificateKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SyntheticsTestApiStepRequestClientCertificate {
  /**
  * cert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestApiStepRequestClientCertificateCert;
  /**
  * key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestApiStepRequestClientCertificateKey;
}

function syntheticsTestApiStepRequestClientCertificateToTerraform(struct?: SyntheticsTestApiStepRequestClientCertificateOutputReference | SyntheticsTestApiStepRequestClientCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: syntheticsTestApiStepRequestClientCertificateCertToTerraform(struct!.cert),
    key: syntheticsTestApiStepRequestClientCertificateKeyToTerraform(struct!.key),
  }
}

export class SyntheticsTestApiStepRequestClientCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: SyntheticsTestApiStepRequestClientCertificateCert; 
  private __certOutput = new SyntheticsTestApiStepRequestClientCertificateCertOutputReference(this as any, "cert", true);
  public get cert() {
    return this.__certOutput;
  }
  public putCert(value: SyntheticsTestApiStepRequestClientCertificateCert) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert
  }

  // key - computed: false, optional: false, required: true
  private _key?: SyntheticsTestApiStepRequestClientCertificateKey; 
  private __keyOutput = new SyntheticsTestApiStepRequestClientCertificateKeyOutputReference(this as any, "key", true);
  public get key() {
    return this.__keyOutput;
  }
  public putKey(value: SyntheticsTestApiStepRequestClientCertificateKey) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }
}
export interface SyntheticsTestApiStepRequestDefinition {
  /**
  * Allows loading insecure content for an HTTP test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_insecure SyntheticsTest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * The request body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: number;
  /**
  * Determines whether or not the API HTTP test should follow redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#follow_redirects SyntheticsTest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Host name to perform the test with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * The HTTP method. Valid values are `GET`, `POST`, `PATCH`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean | cdktf.IResolvable;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Port to use when performing the test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#port SyntheticsTest#port}
  */
  readonly port?: number;
  /**
  * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#servername SyntheticsTest#servername}
  */
  readonly servername?: string;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds for the test. Defaults to `60`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * The URL to send the request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#url SyntheticsTest#url}
  */
  readonly url?: string;
}

function syntheticsTestApiStepRequestDefinitionToTerraform(struct?: SyntheticsTestApiStepRequestDefinitionOutputReference | SyntheticsTestApiStepRequestDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    body: cdktf.stringToTerraform(struct!.body),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktf.numberToTerraform(struct!.dnsServerPort),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    no_saving_response_body: cdktf.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktf.numberToTerraform(struct!.numberOfPackets),
    port: cdktf.numberToTerraform(struct!.port),
    servername: cdktf.stringToTerraform(struct!.servername),
    should_track_hops: cdktf.booleanToTerraform(struct!.shouldTrackHops),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class SyntheticsTestApiStepRequestDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable | undefined; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure') as any;
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string | undefined; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string | undefined) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer
  }

  // dns_server_port - computed: false, optional: true, required: false
  private _dnsServerPort?: number | undefined; 
  public get dnsServerPort() {
    return this.getNumberAttribute('dns_server_port');
  }
  public set dnsServerPort(value: number | undefined) {
    this._dnsServerPort = value;
  }
  public resetDnsServerPort() {
    this._dnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerPortInput() {
    return this._dnsServerPort
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable | undefined; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects') as any;
  }
  public set followRedirects(value: boolean | cdktf.IResolvable | undefined) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // method - computed: false, optional: true, required: false
  private _method?: string | undefined; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // no_saving_response_body - computed: false, optional: true, required: false
  private _noSavingResponseBody?: boolean | cdktf.IResolvable | undefined; 
  public get noSavingResponseBody() {
    return this.getBooleanAttribute('no_saving_response_body') as any;
  }
  public set noSavingResponseBody(value: boolean | cdktf.IResolvable | undefined) {
    this._noSavingResponseBody = value;
  }
  public resetNoSavingResponseBody() {
    this._noSavingResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSavingResponseBodyInput() {
    return this._noSavingResponseBody
  }

  // number_of_packets - computed: false, optional: true, required: false
  private _numberOfPackets?: number | undefined; 
  public get numberOfPackets() {
    return this.getNumberAttribute('number_of_packets');
  }
  public set numberOfPackets(value: number | undefined) {
    this._numberOfPackets = value;
  }
  public resetNumberOfPackets() {
    this._numberOfPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsInput() {
    return this._numberOfPackets
  }

  // port - computed: false, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string | undefined; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string | undefined) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername
  }

  // should_track_hops - computed: false, optional: true, required: false
  private _shouldTrackHops?: boolean | cdktf.IResolvable | undefined; 
  public get shouldTrackHops() {
    return this.getBooleanAttribute('should_track_hops') as any;
  }
  public set shouldTrackHops(value: boolean | cdktf.IResolvable | undefined) {
    this._shouldTrackHops = value;
  }
  public resetShouldTrackHops() {
    this._shouldTrackHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrackHopsInput() {
    return this._shouldTrackHops
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url - computed: false, optional: true, required: false
  private _url?: string | undefined; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }
}
export interface SyntheticsTestApiStep {
  /**
  * Determines whether or not to continue with test if this step fails.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean | cdktf.IResolvable;
  /**
  * Determines whether or not to consider the entire test as failed if this step fails. Can be used only if `allow_failure` is `true`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#is_critical SyntheticsTest#is_critical}
  */
  readonly isCritical?: boolean | cdktf.IResolvable;
  /**
  * The name of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Header name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_headers SyntheticsTest#request_headers}
  */
  readonly requestHeaders?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * Query arguments name and value map.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_query SyntheticsTest#request_query}
  */
  readonly requestQuery?: { [key: string]: string } | cdktf.IResolvable;
  /**
  * The subtype of the Synthetic multistep API test step. Valid values are `http`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtype SyntheticsTest#subtype}
  */
  readonly subtype?: string;
  /**
  * assertion block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#assertion SyntheticsTest#assertion}
  */
  readonly assertion?: SyntheticsTestApiStepAssertion[];
  /**
  * extracted_value block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#extracted_value SyntheticsTest#extracted_value}
  */
  readonly extractedValue?: SyntheticsTestApiStepExtractedValue[];
  /**
  * request_basicauth block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_basicauth SyntheticsTest#request_basicauth}
  */
  readonly requestBasicauth?: SyntheticsTestApiStepRequestBasicauth;
  /**
  * request_client_certificate block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_client_certificate SyntheticsTest#request_client_certificate}
  */
  readonly requestClientCertificate?: SyntheticsTestApiStepRequestClientCertificate;
  /**
  * request_definition block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request_definition SyntheticsTest#request_definition}
  */
  readonly requestDefinition?: SyntheticsTestApiStepRequestDefinition;
}

function syntheticsTestApiStepToTerraform(struct?: SyntheticsTestApiStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_failure: cdktf.booleanToTerraform(struct!.allowFailure),
    is_critical: cdktf.booleanToTerraform(struct!.isCritical),
    name: cdktf.stringToTerraform(struct!.name),
    request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestHeaders),
    request_query: cdktf.hashMapper(cdktf.anyToTerraform)(struct!.requestQuery),
    subtype: cdktf.stringToTerraform(struct!.subtype),
    assertion: cdktf.listMapper(syntheticsTestApiStepAssertionToTerraform)(struct!.assertion),
    extracted_value: cdktf.listMapper(syntheticsTestApiStepExtractedValueToTerraform)(struct!.extractedValue),
    request_basicauth: syntheticsTestApiStepRequestBasicauthToTerraform(struct!.requestBasicauth),
    request_client_certificate: syntheticsTestApiStepRequestClientCertificateToTerraform(struct!.requestClientCertificate),
    request_definition: syntheticsTestApiStepRequestDefinitionToTerraform(struct!.requestDefinition),
  }
}

export interface SyntheticsTestAssertionTargetjsonpath {
  /**
  * The JSON path to assert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#jsonpath SyntheticsTest#jsonpath}
  */
  readonly jsonpath: string;
  /**
  * The specific operator to use on the path.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * Expected matching value.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetvalue SyntheticsTest#targetvalue}
  */
  readonly targetvalue: string;
}

function syntheticsTestAssertionTargetjsonpathToTerraform(struct?: SyntheticsTestAssertionTargetjsonpathOutputReference | SyntheticsTestAssertionTargetjsonpath): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    jsonpath: cdktf.stringToTerraform(struct!.jsonpath),
    operator: cdktf.stringToTerraform(struct!.operator),
    targetvalue: cdktf.stringToTerraform(struct!.targetvalue),
  }
}

export class SyntheticsTestAssertionTargetjsonpathOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // jsonpath - computed: false, optional: false, required: true
  private _jsonpath?: string; 
  public get jsonpath() {
    return this.getStringAttribute('jsonpath');
  }
  public set jsonpath(value: string) {
    this._jsonpath = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonpathInput() {
    return this._jsonpath
  }

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator
  }

  // targetvalue - computed: false, optional: false, required: true
  private _targetvalue?: string; 
  public get targetvalue() {
    return this.getStringAttribute('targetvalue');
  }
  public set targetvalue(value: string) {
    this._targetvalue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetvalueInput() {
    return this._targetvalue
  }
}
export interface SyntheticsTestAssertion {
  /**
  * Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#operator SyntheticsTest#operator}
  */
  readonly operator: string;
  /**
  * If assertion type is `header`, this is the header name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#property SyntheticsTest#property}
  */
  readonly property?: string;
  /**
  * Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#target SyntheticsTest#target}
  */
  readonly target?: string;
  /**
  * Type of assertion. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * targetjsonpath block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#targetjsonpath SyntheticsTest#targetjsonpath}
  */
  readonly targetjsonpath?: SyntheticsTestAssertionTargetjsonpath;
}

function syntheticsTestAssertionToTerraform(struct?: SyntheticsTestAssertion): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    property: cdktf.stringToTerraform(struct!.property),
    target: cdktf.stringToTerraform(struct!.target),
    type: cdktf.stringToTerraform(struct!.type),
    targetjsonpath: syntheticsTestAssertionTargetjsonpathToTerraform(struct!.targetjsonpath),
  }
}

export interface SyntheticsTestBrowserStepParamsVariable {
  /**
  * Example of the extracted variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * Name of the extracted variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name?: string;
}

function syntheticsTestBrowserStepParamsVariableToTerraform(struct?: SyntheticsTestBrowserStepParamsVariableOutputReference | SyntheticsTestBrowserStepParamsVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    name: cdktf.stringToTerraform(struct!.name),
  }
}

export class SyntheticsTestBrowserStepParamsVariableOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // example - computed: false, optional: true, required: false
  private _example?: string | undefined; 
  public get example() {
    return this.getStringAttribute('example');
  }
  public set example(value: string | undefined) {
    this._example = value;
  }
  public resetExample() {
    this._example = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exampleInput() {
    return this._example
  }

  // name - computed: false, optional: true, required: false
  private _name?: string | undefined; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string | undefined) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }
}
export interface SyntheticsTestBrowserStepParams {
  /**
  * Name of the attribute to use for an "assert attribute" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#attribute SyntheticsTest#attribute}
  */
  readonly attribute?: string;
  /**
  * Check type to use for an assertion step. Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#check SyntheticsTest#check}
  */
  readonly check?: string;
  /**
  * Type of click to use for a "click" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#click_type SyntheticsTest#click_type}
  */
  readonly clickType?: string;
  /**
  * Javascript code to use for the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#code SyntheticsTest#code}
  */
  readonly code?: string;
  /**
  * Delay between each key stroke for a "type test" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#delay SyntheticsTest#delay}
  */
  readonly delay?: number;
  /**
  * Element to use for the step, json encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#element SyntheticsTest#element}
  */
  readonly element?: string;
  /**
  * Details of the email for an "assert email" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#email SyntheticsTest#email}
  */
  readonly email?: string;
  /**
  * For an "assert download" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#file SyntheticsTest#file}
  */
  readonly file?: string;
  /**
  * Details of the files for an "upload files" step, json encoded string.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#files SyntheticsTest#files}
  */
  readonly files?: string;
  /**
  * Modifier to use for a "press key" step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#modifiers SyntheticsTest#modifiers}
  */
  readonly modifiers?: string[];
  /**
  * ID of the tab to play the subtest.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#playing_tab_id SyntheticsTest#playing_tab_id}
  */
  readonly playingTabId?: string;
  /**
  * Request for an API step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#request SyntheticsTest#request}
  */
  readonly request?: string;
  /**
  * ID of the Synthetics test to use as subtest.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#subtest_public_id SyntheticsTest#subtest_public_id}
  */
  readonly subtestPublicId?: string;
  /**
  * Value of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#value SyntheticsTest#value}
  */
  readonly value?: string;
  /**
  * For "file upload" steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#with_click SyntheticsTest#with_click}
  */
  readonly withClick?: boolean | cdktf.IResolvable;
  /**
  * X coordinates for a "scroll step".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#x SyntheticsTest#x}
  */
  readonly x?: number;
  /**
  * Y coordinates for a "scroll step".
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#y SyntheticsTest#y}
  */
  readonly y?: number;
  /**
  * variable block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#variable SyntheticsTest#variable}
  */
  readonly variable?: SyntheticsTestBrowserStepParamsVariable;
}

function syntheticsTestBrowserStepParamsToTerraform(struct?: SyntheticsTestBrowserStepParamsOutputReference | SyntheticsTestBrowserStepParams): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    check: cdktf.stringToTerraform(struct!.check),
    click_type: cdktf.stringToTerraform(struct!.clickType),
    code: cdktf.stringToTerraform(struct!.code),
    delay: cdktf.numberToTerraform(struct!.delay),
    element: cdktf.stringToTerraform(struct!.element),
    email: cdktf.stringToTerraform(struct!.email),
    file: cdktf.stringToTerraform(struct!.file),
    files: cdktf.stringToTerraform(struct!.files),
    modifiers: cdktf.listMapper(cdktf.stringToTerraform)(struct!.modifiers),
    playing_tab_id: cdktf.stringToTerraform(struct!.playingTabId),
    request: cdktf.stringToTerraform(struct!.request),
    subtest_public_id: cdktf.stringToTerraform(struct!.subtestPublicId),
    value: cdktf.stringToTerraform(struct!.value),
    with_click: cdktf.booleanToTerraform(struct!.withClick),
    x: cdktf.numberToTerraform(struct!.x),
    y: cdktf.numberToTerraform(struct!.y),
    variable: syntheticsTestBrowserStepParamsVariableToTerraform(struct!.variable),
  }
}

export class SyntheticsTestBrowserStepParamsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // attribute - computed: false, optional: true, required: false
  private _attribute?: string | undefined; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string | undefined) {
    this._attribute = value;
  }
  public resetAttribute() {
    this._attribute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute
  }

  // check - computed: false, optional: true, required: false
  private _check?: string | undefined; 
  public get check() {
    return this.getStringAttribute('check');
  }
  public set check(value: string | undefined) {
    this._check = value;
  }
  public resetCheck() {
    this._check = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkInput() {
    return this._check
  }

  // click_type - computed: false, optional: true, required: false
  private _clickType?: string | undefined; 
  public get clickType() {
    return this.getStringAttribute('click_type');
  }
  public set clickType(value: string | undefined) {
    this._clickType = value;
  }
  public resetClickType() {
    this._clickType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clickTypeInput() {
    return this._clickType
  }

  // code - computed: false, optional: true, required: false
  private _code?: string | undefined; 
  public get code() {
    return this.getStringAttribute('code');
  }
  public set code(value: string | undefined) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code
  }

  // delay - computed: false, optional: true, required: false
  private _delay?: number | undefined; 
  public get delay() {
    return this.getNumberAttribute('delay');
  }
  public set delay(value: number | undefined) {
    this._delay = value;
  }
  public resetDelay() {
    this._delay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayInput() {
    return this._delay
  }

  // element - computed: false, optional: true, required: false
  private _element?: string | undefined; 
  public get element() {
    return this.getStringAttribute('element');
  }
  public set element(value: string | undefined) {
    this._element = value;
  }
  public resetElement() {
    this._element = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get elementInput() {
    return this._element
  }

  // email - computed: false, optional: true, required: false
  private _email?: string | undefined; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string | undefined) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email
  }

  // file - computed: false, optional: true, required: false
  private _file?: string | undefined; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string | undefined) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file
  }

  // files - computed: false, optional: true, required: false
  private _files?: string | undefined; 
  public get files() {
    return this.getStringAttribute('files');
  }
  public set files(value: string | undefined) {
    this._files = value;
  }
  public resetFiles() {
    this._files = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filesInput() {
    return this._files
  }

  // modifiers - computed: false, optional: true, required: false
  private _modifiers?: string[] | undefined; 
  public get modifiers() {
    return this.getListAttribute('modifiers');
  }
  public set modifiers(value: string[] | undefined) {
    this._modifiers = value;
  }
  public resetModifiers() {
    this._modifiers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifiersInput() {
    return this._modifiers
  }

  // playing_tab_id - computed: false, optional: true, required: false
  private _playingTabId?: string | undefined; 
  public get playingTabId() {
    return this.getStringAttribute('playing_tab_id');
  }
  public set playingTabId(value: string | undefined) {
    this._playingTabId = value;
  }
  public resetPlayingTabId() {
    this._playingTabId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get playingTabIdInput() {
    return this._playingTabId
  }

  // request - computed: false, optional: true, required: false
  private _request?: string | undefined; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string | undefined) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request
  }

  // subtest_public_id - computed: false, optional: true, required: false
  private _subtestPublicId?: string | undefined; 
  public get subtestPublicId() {
    return this.getStringAttribute('subtest_public_id');
  }
  public set subtestPublicId(value: string | undefined) {
    this._subtestPublicId = value;
  }
  public resetSubtestPublicId() {
    this._subtestPublicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtestPublicIdInput() {
    return this._subtestPublicId
  }

  // value - computed: false, optional: true, required: false
  private _value?: string | undefined; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string | undefined) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value
  }

  // with_click - computed: false, optional: true, required: false
  private _withClick?: boolean | cdktf.IResolvable | undefined; 
  public get withClick() {
    return this.getBooleanAttribute('with_click') as any;
  }
  public set withClick(value: boolean | cdktf.IResolvable | undefined) {
    this._withClick = value;
  }
  public resetWithClick() {
    this._withClick = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get withClickInput() {
    return this._withClick
  }

  // x - computed: false, optional: true, required: false
  private _x?: number | undefined; 
  public get x() {
    return this.getNumberAttribute('x');
  }
  public set x(value: number | undefined) {
    this._x = value;
  }
  public resetX() {
    this._x = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xInput() {
    return this._x
  }

  // y - computed: false, optional: true, required: false
  private _y?: number | undefined; 
  public get y() {
    return this.getNumberAttribute('y');
  }
  public set y(value: number | undefined) {
    this._y = value;
  }
  public resetY() {
    this._y = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get yInput() {
    return this._y
  }

  // variable - computed: false, optional: true, required: false
  private _variable?: SyntheticsTestBrowserStepParamsVariable | undefined; 
  private __variableOutput = new SyntheticsTestBrowserStepParamsVariableOutputReference(this as any, "variable", true);
  public get variable() {
    return this.__variableOutput;
  }
  public putVariable(value: SyntheticsTestBrowserStepParamsVariable | undefined) {
    this._variable = value;
  }
  public resetVariable() {
    this._variable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableInput() {
    return this._variable
  }
}
export interface SyntheticsTestBrowserStep {
  /**
  * Determines if the step should be allowed to fail.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_failure SyntheticsTest#allow_failure}
  */
  readonly allowFailure?: boolean | cdktf.IResolvable;
  /**
  * Force update of the "element" parameter for the step
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#force_element_update SyntheticsTest#force_element_update}
  */
  readonly forceElementUpdate?: boolean | cdktf.IResolvable;
  /**
  * Name of the step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Used to override the default timeout of a step.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * Type of the step. Valid values are `assertCurrentUrl`, `assertElementAttribute`, `assertElementContent`, `assertElementPresent`, `assertEmail`, `assertFileDownload`, `assertFromJavascript`, `assertPageContains`, `assertPageLacks`, `click`, `extractFromJavascript`, `extractVariable`, `goToEmailLink`, `goToUrl`, `goToUrlAndMeasureTti`, `hover`, `playSubTest`, `pressKey`, `refresh`, `runApiTest`, `scroll`, `selectOption`, `typeText`, `uploadFiles`, `wait`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
  /**
  * params block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#params SyntheticsTest#params}
  */
  readonly params: SyntheticsTestBrowserStepParams;
}

function syntheticsTestBrowserStepToTerraform(struct?: SyntheticsTestBrowserStep): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_failure: cdktf.booleanToTerraform(struct!.allowFailure),
    force_element_update: cdktf.booleanToTerraform(struct!.forceElementUpdate),
    name: cdktf.stringToTerraform(struct!.name),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    type: cdktf.stringToTerraform(struct!.type),
    params: syntheticsTestBrowserStepParamsToTerraform(struct!.params),
  }
}

export interface SyntheticsTestBrowserVariable {
  /**
  * Example for the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * ID of the global variable to use. This is actually only used (and required) in the case of using a variable of type `global`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#id SyntheticsTest#id}
  */
  readonly id?: string;
  /**
  * Name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
}

function syntheticsTestBrowserVariableToTerraform(struct?: SyntheticsTestBrowserVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SyntheticsTestConfigVariable {
  /**
  * Example for the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#example SyntheticsTest#example}
  */
  readonly example?: string;
  /**
  * When type = `global`, ID of the global variable to use.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#id SyntheticsTest#id}
  */
  readonly id?: string;
  /**
  * Name of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#name SyntheticsTest#name}
  */
  readonly name: string;
  /**
  * Pattern of the variable.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#pattern SyntheticsTest#pattern}
  */
  readonly pattern?: string;
  /**
  * Type of test configuration variable. Valid values are `global`, `text`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#type SyntheticsTest#type}
  */
  readonly type: string;
}

function syntheticsTestConfigVariableToTerraform(struct?: SyntheticsTestConfigVariable): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    example: cdktf.stringToTerraform(struct!.example),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    pattern: cdktf.stringToTerraform(struct!.pattern),
    type: cdktf.stringToTerraform(struct!.type),
  }
}

export interface SyntheticsTestOptionsListMonitorOptions {
  /**
  * Specify a renotification frequency.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#renotify_interval SyntheticsTest#renotify_interval}
  */
  readonly renotifyInterval?: number;
}

function syntheticsTestOptionsListMonitorOptionsToTerraform(struct?: SyntheticsTestOptionsListMonitorOptionsOutputReference | SyntheticsTestOptionsListMonitorOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    renotify_interval: cdktf.numberToTerraform(struct!.renotifyInterval),
  }
}

export class SyntheticsTestOptionsListMonitorOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // renotify_interval - computed: false, optional: true, required: false
  private _renotifyInterval?: number | undefined; 
  public get renotifyInterval() {
    return this.getNumberAttribute('renotify_interval');
  }
  public set renotifyInterval(value: number | undefined) {
    this._renotifyInterval = value;
  }
  public resetRenotifyInterval() {
    this._renotifyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get renotifyIntervalInput() {
    return this._renotifyInterval
  }
}
export interface SyntheticsTestOptionsListRetry {
  /**
  * Number of retries needed to consider a location as failed before sending a notification alert.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#count SyntheticsTest#count}
  */
  readonly count?: number;
  /**
  * Interval between a failed test and the next retry in milliseconds.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#interval SyntheticsTest#interval}
  */
  readonly interval?: number;
}

function syntheticsTestOptionsListRetryToTerraform(struct?: SyntheticsTestOptionsListRetryOutputReference | SyntheticsTestOptionsListRetry): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    interval: cdktf.numberToTerraform(struct!.interval),
  }
}

export class SyntheticsTestOptionsListRetryOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // count - computed: false, optional: true, required: false
  private _count?: number | undefined; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number | undefined) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number | undefined; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number | undefined) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval
  }
}
export interface SyntheticsTestOptionsList {
  /**
  * For SSL test, whether or not the test should allow self signed certificates.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#accept_self_signed SyntheticsTest#accept_self_signed}
  */
  readonly acceptSelfSigned?: boolean | cdktf.IResolvable;
  /**
  * Allows loading insecure content for an HTTP test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#allow_insecure SyntheticsTest#allow_insecure}
  */
  readonly allowInsecure?: boolean | cdktf.IResolvable;
  /**
  * Determines whether or not the API HTTP test should follow redirects.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#follow_redirects SyntheticsTest#follow_redirects}
  */
  readonly followRedirects?: boolean | cdktf.IResolvable;
  /**
  * Minimum amount of time in failure required to trigger an alert. Default is `0`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#min_failure_duration SyntheticsTest#min_failure_duration}
  */
  readonly minFailureDuration?: number;
  /**
  * Minimum number of locations in failure required to trigger an alert. Default is `1`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#min_location_failed SyntheticsTest#min_location_failed}
  */
  readonly minLocationFailed?: number;
  /**
  * The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#monitor_name SyntheticsTest#monitor_name}
  */
  readonly monitorName?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#monitor_priority SyntheticsTest#monitor_priority}
  */
  readonly monitorPriority?: number;
  /**
  * Prevents saving screenshots of the steps.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_screenshot SyntheticsTest#no_screenshot}
  */
  readonly noScreenshot?: boolean | cdktf.IResolvable;
  /**
  * How often the test should run (in seconds).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#tick_every SyntheticsTest#tick_every}
  */
  readonly tickEvery: number;
  /**
  * monitor_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#monitor_options SyntheticsTest#monitor_options}
  */
  readonly monitorOptions?: SyntheticsTestOptionsListMonitorOptions;
  /**
  * retry block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#retry SyntheticsTest#retry}
  */
  readonly retry?: SyntheticsTestOptionsListRetry;
}

function syntheticsTestOptionsListToTerraform(struct?: SyntheticsTestOptionsListOutputReference | SyntheticsTestOptionsList): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    accept_self_signed: cdktf.booleanToTerraform(struct!.acceptSelfSigned),
    allow_insecure: cdktf.booleanToTerraform(struct!.allowInsecure),
    follow_redirects: cdktf.booleanToTerraform(struct!.followRedirects),
    min_failure_duration: cdktf.numberToTerraform(struct!.minFailureDuration),
    min_location_failed: cdktf.numberToTerraform(struct!.minLocationFailed),
    monitor_name: cdktf.stringToTerraform(struct!.monitorName),
    monitor_priority: cdktf.numberToTerraform(struct!.monitorPriority),
    no_screenshot: cdktf.booleanToTerraform(struct!.noScreenshot),
    tick_every: cdktf.numberToTerraform(struct!.tickEvery),
    monitor_options: syntheticsTestOptionsListMonitorOptionsToTerraform(struct!.monitorOptions),
    retry: syntheticsTestOptionsListRetryToTerraform(struct!.retry),
  }
}

export class SyntheticsTestOptionsListOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // accept_self_signed - computed: false, optional: true, required: false
  private _acceptSelfSigned?: boolean | cdktf.IResolvable | undefined; 
  public get acceptSelfSigned() {
    return this.getBooleanAttribute('accept_self_signed') as any;
  }
  public set acceptSelfSigned(value: boolean | cdktf.IResolvable | undefined) {
    this._acceptSelfSigned = value;
  }
  public resetAcceptSelfSigned() {
    this._acceptSelfSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get acceptSelfSignedInput() {
    return this._acceptSelfSigned
  }

  // allow_insecure - computed: false, optional: true, required: false
  private _allowInsecure?: boolean | cdktf.IResolvable | undefined; 
  public get allowInsecure() {
    return this.getBooleanAttribute('allow_insecure') as any;
  }
  public set allowInsecure(value: boolean | cdktf.IResolvable | undefined) {
    this._allowInsecure = value;
  }
  public resetAllowInsecure() {
    this._allowInsecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowInsecureInput() {
    return this._allowInsecure
  }

  // follow_redirects - computed: false, optional: true, required: false
  private _followRedirects?: boolean | cdktf.IResolvable | undefined; 
  public get followRedirects() {
    return this.getBooleanAttribute('follow_redirects') as any;
  }
  public set followRedirects(value: boolean | cdktf.IResolvable | undefined) {
    this._followRedirects = value;
  }
  public resetFollowRedirects() {
    this._followRedirects = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get followRedirectsInput() {
    return this._followRedirects
  }

  // min_failure_duration - computed: false, optional: true, required: false
  private _minFailureDuration?: number | undefined; 
  public get minFailureDuration() {
    return this.getNumberAttribute('min_failure_duration');
  }
  public set minFailureDuration(value: number | undefined) {
    this._minFailureDuration = value;
  }
  public resetMinFailureDuration() {
    this._minFailureDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minFailureDurationInput() {
    return this._minFailureDuration
  }

  // min_location_failed - computed: false, optional: true, required: false
  private _minLocationFailed?: number | undefined; 
  public get minLocationFailed() {
    return this.getNumberAttribute('min_location_failed');
  }
  public set minLocationFailed(value: number | undefined) {
    this._minLocationFailed = value;
  }
  public resetMinLocationFailed() {
    this._minLocationFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLocationFailedInput() {
    return this._minLocationFailed
  }

  // monitor_name - computed: false, optional: true, required: false
  private _monitorName?: string | undefined; 
  public get monitorName() {
    return this.getStringAttribute('monitor_name');
  }
  public set monitorName(value: string | undefined) {
    this._monitorName = value;
  }
  public resetMonitorName() {
    this._monitorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorNameInput() {
    return this._monitorName
  }

  // monitor_priority - computed: false, optional: true, required: false
  private _monitorPriority?: number | undefined; 
  public get monitorPriority() {
    return this.getNumberAttribute('monitor_priority');
  }
  public set monitorPriority(value: number | undefined) {
    this._monitorPriority = value;
  }
  public resetMonitorPriority() {
    this._monitorPriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPriorityInput() {
    return this._monitorPriority
  }

  // no_screenshot - computed: false, optional: true, required: false
  private _noScreenshot?: boolean | cdktf.IResolvable | undefined; 
  public get noScreenshot() {
    return this.getBooleanAttribute('no_screenshot') as any;
  }
  public set noScreenshot(value: boolean | cdktf.IResolvable | undefined) {
    this._noScreenshot = value;
  }
  public resetNoScreenshot() {
    this._noScreenshot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noScreenshotInput() {
    return this._noScreenshot
  }

  // tick_every - computed: false, optional: false, required: true
  private _tickEvery?: number; 
  public get tickEvery() {
    return this.getNumberAttribute('tick_every');
  }
  public set tickEvery(value: number) {
    this._tickEvery = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tickEveryInput() {
    return this._tickEvery
  }

  // monitor_options - computed: false, optional: true, required: false
  private _monitorOptions?: SyntheticsTestOptionsListMonitorOptions | undefined; 
  private __monitorOptionsOutput = new SyntheticsTestOptionsListMonitorOptionsOutputReference(this as any, "monitor_options", true);
  public get monitorOptions() {
    return this.__monitorOptionsOutput;
  }
  public putMonitorOptions(value: SyntheticsTestOptionsListMonitorOptions | undefined) {
    this._monitorOptions = value;
  }
  public resetMonitorOptions() {
    this._monitorOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorOptionsInput() {
    return this._monitorOptions
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: SyntheticsTestOptionsListRetry | undefined; 
  private __retryOutput = new SyntheticsTestOptionsListRetryOutputReference(this as any, "retry", true);
  public get retry() {
    return this.__retryOutput;
  }
  public putRetry(value: SyntheticsTestOptionsListRetry | undefined) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry
  }
}
export interface SyntheticsTestRequestBasicauth {
  /**
  * Password for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#password SyntheticsTest#password}
  */
  readonly password: string;
  /**
  * Username for authentication.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#username SyntheticsTest#username}
  */
  readonly username: string;
}

function syntheticsTestRequestBasicauthToTerraform(struct?: SyntheticsTestRequestBasicauthOutputReference | SyntheticsTestRequestBasicauth): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    password: cdktf.stringToTerraform(struct!.password),
    username: cdktf.stringToTerraform(struct!.username),
  }
}

export class SyntheticsTestRequestBasicauthOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username
  }
}
export interface SyntheticsTestRequestClientCertificateCert {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestRequestClientCertificateCertToTerraform(struct?: SyntheticsTestRequestClientCertificateCertOutputReference | SyntheticsTestRequestClientCertificateCert): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SyntheticsTestRequestClientCertificateCertOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SyntheticsTestRequestClientCertificateKey {
  /**
  * Content of the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#content SyntheticsTest#content}
  */
  readonly content: string;
  /**
  * File name for the certificate.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#filename SyntheticsTest#filename}
  */
  readonly filename?: string;
}

function syntheticsTestRequestClientCertificateKeyToTerraform(struct?: SyntheticsTestRequestClientCertificateKeyOutputReference | SyntheticsTestRequestClientCertificateKey): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    content: cdktf.stringToTerraform(struct!.content),
    filename: cdktf.stringToTerraform(struct!.filename),
  }
}

export class SyntheticsTestRequestClientCertificateKeyOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // content - computed: false, optional: false, required: true
  private _content?: string; 
  public get content() {
    return this.getStringAttribute('content');
  }
  public set content(value: string) {
    this._content = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contentInput() {
    return this._content
  }

  // filename - computed: false, optional: true, required: false
  private _filename?: string | undefined; 
  public get filename() {
    return this.getStringAttribute('filename');
  }
  public set filename(value: string | undefined) {
    this._filename = value;
  }
  public resetFilename() {
    this._filename = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filenameInput() {
    return this._filename
  }
}
export interface SyntheticsTestRequestClientCertificate {
  /**
  * cert block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#cert SyntheticsTest#cert}
  */
  readonly cert: SyntheticsTestRequestClientCertificateCert;
  /**
  * key block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#key SyntheticsTest#key}
  */
  readonly key: SyntheticsTestRequestClientCertificateKey;
}

function syntheticsTestRequestClientCertificateToTerraform(struct?: SyntheticsTestRequestClientCertificateOutputReference | SyntheticsTestRequestClientCertificate): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cert: syntheticsTestRequestClientCertificateCertToTerraform(struct!.cert),
    key: syntheticsTestRequestClientCertificateKeyToTerraform(struct!.key),
  }
}

export class SyntheticsTestRequestClientCertificateOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // cert - computed: false, optional: false, required: true
  private _cert?: SyntheticsTestRequestClientCertificateCert; 
  private __certOutput = new SyntheticsTestRequestClientCertificateCertOutputReference(this as any, "cert", true);
  public get cert() {
    return this.__certOutput;
  }
  public putCert(value: SyntheticsTestRequestClientCertificateCert) {
    this._cert = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certInput() {
    return this._cert
  }

  // key - computed: false, optional: false, required: true
  private _key?: SyntheticsTestRequestClientCertificateKey; 
  private __keyOutput = new SyntheticsTestRequestClientCertificateKeyOutputReference(this as any, "key", true);
  public get key() {
    return this.__keyOutput;
  }
  public putKey(value: SyntheticsTestRequestClientCertificateKey) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key
  }
}
export interface SyntheticsTestRequestDefinition {
  /**
  * The request body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#body SyntheticsTest#body}
  */
  readonly body?: string;
  /**
  * DNS server to use for DNS tests (`subtype = "dns"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server SyntheticsTest#dns_server}
  */
  readonly dnsServer?: string;
  /**
  * DNS server port to use for DNS tests.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#dns_server_port SyntheticsTest#dns_server_port}
  */
  readonly dnsServerPort?: number;
  /**
  * Host name to perform the test with.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#host SyntheticsTest#host}
  */
  readonly host?: string;
  /**
  * The HTTP method. Valid values are `GET`, `POST`, `PATCH`, `PUT`, `DELETE`, `HEAD`, `OPTIONS`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#method SyntheticsTest#method}
  */
  readonly method?: string;
  /**
  * Determines whether or not to save the response body.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#no_saving_response_body SyntheticsTest#no_saving_response_body}
  */
  readonly noSavingResponseBody?: boolean | cdktf.IResolvable;
  /**
  * Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#number_of_packets SyntheticsTest#number_of_packets}
  */
  readonly numberOfPackets?: number;
  /**
  * Port to use when performing the test.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#port SyntheticsTest#port}
  */
  readonly port?: number;
  /**
  * For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#servername SyntheticsTest#servername}
  */
  readonly servername?: string;
  /**
  * This will turn on a traceroute probe to discover all gateways along the path to the host destination. For ICMP tests (`subtype = "icmp"`).
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#should_track_hops SyntheticsTest#should_track_hops}
  */
  readonly shouldTrackHops?: boolean | cdktf.IResolvable;
  /**
  * Timeout in seconds for the test. Defaults to `60`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#timeout SyntheticsTest#timeout}
  */
  readonly timeout?: number;
  /**
  * The URL to send the request to.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html#url SyntheticsTest#url}
  */
  readonly url?: string;
}

function syntheticsTestRequestDefinitionToTerraform(struct?: SyntheticsTestRequestDefinitionOutputReference | SyntheticsTestRequestDefinition): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    body: cdktf.stringToTerraform(struct!.body),
    dns_server: cdktf.stringToTerraform(struct!.dnsServer),
    dns_server_port: cdktf.numberToTerraform(struct!.dnsServerPort),
    host: cdktf.stringToTerraform(struct!.host),
    method: cdktf.stringToTerraform(struct!.method),
    no_saving_response_body: cdktf.booleanToTerraform(struct!.noSavingResponseBody),
    number_of_packets: cdktf.numberToTerraform(struct!.numberOfPackets),
    port: cdktf.numberToTerraform(struct!.port),
    servername: cdktf.stringToTerraform(struct!.servername),
    should_track_hops: cdktf.booleanToTerraform(struct!.shouldTrackHops),
    timeout: cdktf.numberToTerraform(struct!.timeout),
    url: cdktf.stringToTerraform(struct!.url),
  }
}

export class SyntheticsTestRequestDefinitionOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // body - computed: false, optional: true, required: false
  private _body?: string | undefined; 
  public get body() {
    return this.getStringAttribute('body');
  }
  public set body(value: string | undefined) {
    this._body = value;
  }
  public resetBody() {
    this._body = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bodyInput() {
    return this._body
  }

  // dns_server - computed: false, optional: true, required: false
  private _dnsServer?: string | undefined; 
  public get dnsServer() {
    return this.getStringAttribute('dns_server');
  }
  public set dnsServer(value: string | undefined) {
    this._dnsServer = value;
  }
  public resetDnsServer() {
    this._dnsServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerInput() {
    return this._dnsServer
  }

  // dns_server_port - computed: false, optional: true, required: false
  private _dnsServerPort?: number | undefined; 
  public get dnsServerPort() {
    return this.getNumberAttribute('dns_server_port');
  }
  public set dnsServerPort(value: number | undefined) {
    this._dnsServerPort = value;
  }
  public resetDnsServerPort() {
    this._dnsServerPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsServerPortInput() {
    return this._dnsServerPort
  }

  // host - computed: false, optional: true, required: false
  private _host?: string | undefined; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string | undefined) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host
  }

  // method - computed: false, optional: true, required: false
  private _method?: string | undefined; 
  public get method() {
    return this.getStringAttribute('method');
  }
  public set method(value: string | undefined) {
    this._method = value;
  }
  public resetMethod() {
    this._method = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get methodInput() {
    return this._method
  }

  // no_saving_response_body - computed: false, optional: true, required: false
  private _noSavingResponseBody?: boolean | cdktf.IResolvable | undefined; 
  public get noSavingResponseBody() {
    return this.getBooleanAttribute('no_saving_response_body') as any;
  }
  public set noSavingResponseBody(value: boolean | cdktf.IResolvable | undefined) {
    this._noSavingResponseBody = value;
  }
  public resetNoSavingResponseBody() {
    this._noSavingResponseBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSavingResponseBodyInput() {
    return this._noSavingResponseBody
  }

  // number_of_packets - computed: false, optional: true, required: false
  private _numberOfPackets?: number | undefined; 
  public get numberOfPackets() {
    return this.getNumberAttribute('number_of_packets');
  }
  public set numberOfPackets(value: number | undefined) {
    this._numberOfPackets = value;
  }
  public resetNumberOfPackets() {
    this._numberOfPackets = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfPacketsInput() {
    return this._numberOfPackets
  }

  // port - computed: false, optional: true, required: false
  private _port?: number | undefined; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number | undefined) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port
  }

  // servername - computed: false, optional: true, required: false
  private _servername?: string | undefined; 
  public get servername() {
    return this.getStringAttribute('servername');
  }
  public set servername(value: string | undefined) {
    this._servername = value;
  }
  public resetServername() {
    this._servername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servernameInput() {
    return this._servername
  }

  // should_track_hops - computed: false, optional: true, required: false
  private _shouldTrackHops?: boolean | cdktf.IResolvable | undefined; 
  public get shouldTrackHops() {
    return this.getBooleanAttribute('should_track_hops') as any;
  }
  public set shouldTrackHops(value: boolean | cdktf.IResolvable | undefined) {
    this._shouldTrackHops = value;
  }
  public resetShouldTrackHops() {
    this._shouldTrackHops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTrackHopsInput() {
    return this._shouldTrackHops
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout?: number | undefined; 
  public get timeout() {
    return this.getNumberAttribute('timeout');
  }
  public set timeout(value: number | undefined) {
    this._timeout = value;
  }
  public resetTimeout() {
    this._timeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout
  }

  // url - computed: false, optional: true, required: false
  private _url?: string | undefined; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string | undefined) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html datadog_synthetics_test}
*/
export class SyntheticsTest extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_synthetics_test";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test.html datadog_synthetics_test} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyntheticsTestConfig
  */
  public constructor(scope: Construct, id: string, config: SyntheticsTestConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_synthetics_test',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._deviceIds = config.deviceIds;
    this._locations = config.locations;
    this._message = config.message;
    this._name = config.name;
    this._requestHeaders = config.requestHeaders;
    this._requestQuery = config.requestQuery;
    this._setCookie = config.setCookie;
    this._status = config.status;
    this._subtype = config.subtype;
    this._tags = config.tags;
    this._type = config.type;
    this._apiStep = config.apiStep;
    this._assertion = config.assertion;
    this._browserStep = config.browserStep;
    this._browserVariable = config.browserVariable;
    this._configVariable = config.configVariable;
    this._optionsList = config.optionsList;
    this._requestBasicauth = config.requestBasicauth;
    this._requestClientCertificate = config.requestClientCertificate;
    this._requestDefinition = config.requestDefinition;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_ids - computed: false, optional: true, required: false
  private _deviceIds?: string[] | undefined; 
  public get deviceIds() {
    return this.getListAttribute('device_ids');
  }
  public set deviceIds(value: string[] | undefined) {
    this._deviceIds = value;
  }
  public resetDeviceIds() {
    this._deviceIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdsInput() {
    return this._deviceIds
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // locations - computed: false, optional: false, required: true
  private _locations?: string[]; 
  public get locations() {
    return this.getListAttribute('locations');
  }
  public set locations(value: string[]) {
    this._locations = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationsInput() {
    return this._locations
  }

  // message - computed: false, optional: true, required: false
  private _message?: string | undefined; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string | undefined) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
  }

  // monitor_id - computed: true, optional: false, required: false
  public get monitorId() {
    return this.getNumberAttribute('monitor_id');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name
  }

  // request_headers - computed: false, optional: true, required: false
  private _requestHeaders?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get requestHeaders() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_headers') as any;
  }
  public set requestHeaders(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._requestHeaders = value;
  }
  public resetRequestHeaders() {
    this._requestHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeadersInput() {
    return this._requestHeaders
  }

  // request_query - computed: false, optional: true, required: false
  private _requestQuery?: { [key: string]: string } | cdktf.IResolvable | undefined; 
  public get requestQuery() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('request_query') as any;
  }
  public set requestQuery(value: { [key: string]: string } | cdktf.IResolvable | undefined) {
    this._requestQuery = value;
  }
  public resetRequestQuery() {
    this._requestQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestQueryInput() {
    return this._requestQuery
  }

  // set_cookie - computed: false, optional: true, required: false
  private _setCookie?: string | undefined; 
  public get setCookie() {
    return this.getStringAttribute('set_cookie');
  }
  public set setCookie(value: string | undefined) {
    this._setCookie = value;
  }
  public resetSetCookie() {
    this._setCookie = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setCookieInput() {
    return this._setCookie
  }

  // status - computed: false, optional: false, required: true
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status
  }

  // subtype - computed: false, optional: true, required: false
  private _subtype?: string | undefined; 
  public get subtype() {
    return this.getStringAttribute('subtype');
  }
  public set subtype(value: string | undefined) {
    this._subtype = value;
  }
  public resetSubtype() {
    this._subtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subtypeInput() {
    return this._subtype
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: string[] | undefined; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[] | undefined) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // api_step - computed: false, optional: true, required: false
  private _apiStep?: SyntheticsTestApiStep[] | undefined; 
  public get apiStep() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('api_step') as any;
  }
  public set apiStep(value: SyntheticsTestApiStep[] | undefined) {
    this._apiStep = value;
  }
  public resetApiStep() {
    this._apiStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiStepInput() {
    return this._apiStep
  }

  // assertion - computed: false, optional: true, required: false
  private _assertion?: SyntheticsTestAssertion[] | undefined; 
  public get assertion() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('assertion') as any;
  }
  public set assertion(value: SyntheticsTestAssertion[] | undefined) {
    this._assertion = value;
  }
  public resetAssertion() {
    this._assertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assertionInput() {
    return this._assertion
  }

  // browser_step - computed: false, optional: true, required: false
  private _browserStep?: SyntheticsTestBrowserStep[] | undefined; 
  public get browserStep() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('browser_step') as any;
  }
  public set browserStep(value: SyntheticsTestBrowserStep[] | undefined) {
    this._browserStep = value;
  }
  public resetBrowserStep() {
    this._browserStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserStepInput() {
    return this._browserStep
  }

  // browser_variable - computed: false, optional: true, required: false
  private _browserVariable?: SyntheticsTestBrowserVariable[] | undefined; 
  public get browserVariable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('browser_variable') as any;
  }
  public set browserVariable(value: SyntheticsTestBrowserVariable[] | undefined) {
    this._browserVariable = value;
  }
  public resetBrowserVariable() {
    this._browserVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get browserVariableInput() {
    return this._browserVariable
  }

  // config_variable - computed: false, optional: true, required: false
  private _configVariable?: SyntheticsTestConfigVariable[] | undefined; 
  public get configVariable() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('config_variable') as any;
  }
  public set configVariable(value: SyntheticsTestConfigVariable[] | undefined) {
    this._configVariable = value;
  }
  public resetConfigVariable() {
    this._configVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configVariableInput() {
    return this._configVariable
  }

  // options_list - computed: false, optional: true, required: false
  private _optionsList?: SyntheticsTestOptionsList | undefined; 
  private __optionsListOutput = new SyntheticsTestOptionsListOutputReference(this as any, "options_list", true);
  public get optionsList() {
    return this.__optionsListOutput;
  }
  public putOptionsList(value: SyntheticsTestOptionsList | undefined) {
    this._optionsList = value;
  }
  public resetOptionsList() {
    this._optionsList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsListInput() {
    return this._optionsList
  }

  // request_basicauth - computed: false, optional: true, required: false
  private _requestBasicauth?: SyntheticsTestRequestBasicauth | undefined; 
  private __requestBasicauthOutput = new SyntheticsTestRequestBasicauthOutputReference(this as any, "request_basicauth", true);
  public get requestBasicauth() {
    return this.__requestBasicauthOutput;
  }
  public putRequestBasicauth(value: SyntheticsTestRequestBasicauth | undefined) {
    this._requestBasicauth = value;
  }
  public resetRequestBasicauth() {
    this._requestBasicauth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestBasicauthInput() {
    return this._requestBasicauth
  }

  // request_client_certificate - computed: false, optional: true, required: false
  private _requestClientCertificate?: SyntheticsTestRequestClientCertificate | undefined; 
  private __requestClientCertificateOutput = new SyntheticsTestRequestClientCertificateOutputReference(this as any, "request_client_certificate", true);
  public get requestClientCertificate() {
    return this.__requestClientCertificateOutput;
  }
  public putRequestClientCertificate(value: SyntheticsTestRequestClientCertificate | undefined) {
    this._requestClientCertificate = value;
  }
  public resetRequestClientCertificate() {
    this._requestClientCertificate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestClientCertificateInput() {
    return this._requestClientCertificate
  }

  // request_definition - computed: false, optional: true, required: false
  private _requestDefinition?: SyntheticsTestRequestDefinition | undefined; 
  private __requestDefinitionOutput = new SyntheticsTestRequestDefinitionOutputReference(this as any, "request_definition", true);
  public get requestDefinition() {
    return this.__requestDefinitionOutput;
  }
  public putRequestDefinition(value: SyntheticsTestRequestDefinition | undefined) {
    this._requestDefinition = value;
  }
  public resetRequestDefinition() {
    this._requestDefinition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestDefinitionInput() {
    return this._requestDefinition
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_ids: cdktf.listMapper(cdktf.stringToTerraform)(this._deviceIds),
      locations: cdktf.listMapper(cdktf.stringToTerraform)(this._locations),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      request_headers: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestHeaders),
      request_query: cdktf.hashMapper(cdktf.anyToTerraform)(this._requestQuery),
      set_cookie: cdktf.stringToTerraform(this._setCookie),
      status: cdktf.stringToTerraform(this._status),
      subtype: cdktf.stringToTerraform(this._subtype),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      api_step: cdktf.listMapper(syntheticsTestApiStepToTerraform)(this._apiStep),
      assertion: cdktf.listMapper(syntheticsTestAssertionToTerraform)(this._assertion),
      browser_step: cdktf.listMapper(syntheticsTestBrowserStepToTerraform)(this._browserStep),
      browser_variable: cdktf.listMapper(syntheticsTestBrowserVariableToTerraform)(this._browserVariable),
      config_variable: cdktf.listMapper(syntheticsTestConfigVariableToTerraform)(this._configVariable),
      options_list: syntheticsTestOptionsListToTerraform(this._optionsList),
      request_basicauth: syntheticsTestRequestBasicauthToTerraform(this._requestBasicauth),
      request_client_certificate: syntheticsTestRequestClientCertificateToTerraform(this._requestClientCertificate),
      request_definition: syntheticsTestRequestDefinitionToTerraform(this._requestDefinition),
    };
  }
}
