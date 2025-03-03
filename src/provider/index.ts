// https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatadogProviderConfig {
  /**
  * (Required unless validate is false) Datadog API key. This can also be set via the DD_API_KEY environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#api_key DatadogProvider#api_key}
  */
  readonly apiKey?: string;
  /**
  * The API URL. This can also be set via the DD_HOST environment variable. Note that this URL must not end with the `/api/` path. For example, `https://api.datadoghq.com/` is a correct value, while `https://api.datadoghq.com/api/` is not. And if you're working with "EU" version of Datadog, use `https://api.datadoghq.eu/`. Other Datadog region examples: `https://api.us5.datadoghq.com/`, `https://api.us3.datadoghq.com/` and `https://api.ddog-gov.com/`. See https://docs.datadoghq.com/getting_started/site/ for all available regions.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#api_url DatadogProvider#api_url}
  */
  readonly apiUrl?: string;
  /**
  * (Required unless validate is false) Datadog APP key. This can also be set via the DD_APP_KEY environment variable.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#app_key DatadogProvider#app_key}
  */
  readonly appKey?: string;
  /**
  * The HTTP request retry back off base. Defaults to 2.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#http_client_retry_backoff_base DatadogProvider#http_client_retry_backoff_base}
  */
  readonly httpClientRetryBackoffBase?: number;
  /**
  * The HTTP request retry back off multiplier. Defaults to 2.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#http_client_retry_backoff_multiplier DatadogProvider#http_client_retry_backoff_multiplier}
  */
  readonly httpClientRetryBackoffMultiplier?: number;
  /**
  * Enables request retries on HTTP status codes 429 and 5xx. Valid values are [`true`, `false`]. Defaults to `true`.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#http_client_retry_enabled DatadogProvider#http_client_retry_enabled}
  */
  readonly httpClientRetryEnabled?: string;
  /**
  * The HTTP request maximum retry number. Defaults to 3.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#http_client_retry_max_retries DatadogProvider#http_client_retry_max_retries}
  */
  readonly httpClientRetryMaxRetries?: number;
  /**
  * The HTTP request retry timeout period. Defaults to 60 seconds.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#http_client_retry_timeout DatadogProvider#http_client_retry_timeout}
  */
  readonly httpClientRetryTimeout?: number;
  /**
  * Enables validation of the provided API and APP keys during provider initialization. Valid values are [`true`, `false`]. Default is true. When false, api_key and app_key won't be checked.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#validate DatadogProvider#validate}
  */
  readonly validate?: string;
  /**
  * Alias name
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs#alias DatadogProvider#alias}
  */
  readonly alias?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs datadog}
*/
export class DatadogProvider extends cdktf.TerraformProvider {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "datadog";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datadog/datadog/3.24.0/docs datadog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatadogProviderConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DatadogProviderConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog',
      terraformGeneratorMetadata: {
        providerName: 'datadog',
        providerVersion: '3.24.0',
        providerVersionConstraint: '~> 3.0'
      },
      terraformProviderSource: 'DataDog/datadog'
    });
    this._apiKey = config.apiKey;
    this._apiUrl = config.apiUrl;
    this._appKey = config.appKey;
    this._httpClientRetryBackoffBase = config.httpClientRetryBackoffBase;
    this._httpClientRetryBackoffMultiplier = config.httpClientRetryBackoffMultiplier;
    this._httpClientRetryEnabled = config.httpClientRetryEnabled;
    this._httpClientRetryMaxRetries = config.httpClientRetryMaxRetries;
    this._httpClientRetryTimeout = config.httpClientRetryTimeout;
    this._validate = config.validate;
    this._alias = config.alias;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this._apiKey;
  }
  public set apiKey(value: string | undefined) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

  // api_url - computed: false, optional: true, required: false
  private _apiUrl?: string; 
  public get apiUrl() {
    return this._apiUrl;
  }
  public set apiUrl(value: string | undefined) {
    this._apiUrl = value;
  }
  public resetApiUrl() {
    this._apiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiUrlInput() {
    return this._apiUrl;
  }

  // app_key - computed: false, optional: true, required: false
  private _appKey?: string; 
  public get appKey() {
    return this._appKey;
  }
  public set appKey(value: string | undefined) {
    this._appKey = value;
  }
  public resetAppKey() {
    this._appKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appKeyInput() {
    return this._appKey;
  }

  // http_client_retry_backoff_base - computed: false, optional: true, required: false
  private _httpClientRetryBackoffBase?: number; 
  public get httpClientRetryBackoffBase() {
    return this._httpClientRetryBackoffBase;
  }
  public set httpClientRetryBackoffBase(value: number | undefined) {
    this._httpClientRetryBackoffBase = value;
  }
  public resetHttpClientRetryBackoffBase() {
    this._httpClientRetryBackoffBase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryBackoffBaseInput() {
    return this._httpClientRetryBackoffBase;
  }

  // http_client_retry_backoff_multiplier - computed: false, optional: true, required: false
  private _httpClientRetryBackoffMultiplier?: number; 
  public get httpClientRetryBackoffMultiplier() {
    return this._httpClientRetryBackoffMultiplier;
  }
  public set httpClientRetryBackoffMultiplier(value: number | undefined) {
    this._httpClientRetryBackoffMultiplier = value;
  }
  public resetHttpClientRetryBackoffMultiplier() {
    this._httpClientRetryBackoffMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryBackoffMultiplierInput() {
    return this._httpClientRetryBackoffMultiplier;
  }

  // http_client_retry_enabled - computed: false, optional: true, required: false
  private _httpClientRetryEnabled?: string; 
  public get httpClientRetryEnabled() {
    return this._httpClientRetryEnabled;
  }
  public set httpClientRetryEnabled(value: string | undefined) {
    this._httpClientRetryEnabled = value;
  }
  public resetHttpClientRetryEnabled() {
    this._httpClientRetryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryEnabledInput() {
    return this._httpClientRetryEnabled;
  }

  // http_client_retry_max_retries - computed: false, optional: true, required: false
  private _httpClientRetryMaxRetries?: number; 
  public get httpClientRetryMaxRetries() {
    return this._httpClientRetryMaxRetries;
  }
  public set httpClientRetryMaxRetries(value: number | undefined) {
    this._httpClientRetryMaxRetries = value;
  }
  public resetHttpClientRetryMaxRetries() {
    this._httpClientRetryMaxRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryMaxRetriesInput() {
    return this._httpClientRetryMaxRetries;
  }

  // http_client_retry_timeout - computed: false, optional: true, required: false
  private _httpClientRetryTimeout?: number; 
  public get httpClientRetryTimeout() {
    return this._httpClientRetryTimeout;
  }
  public set httpClientRetryTimeout(value: number | undefined) {
    this._httpClientRetryTimeout = value;
  }
  public resetHttpClientRetryTimeout() {
    this._httpClientRetryTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpClientRetryTimeoutInput() {
    return this._httpClientRetryTimeout;
  }

  // validate - computed: false, optional: true, required: false
  private _validate?: string; 
  public get validate() {
    return this._validate;
  }
  public set validate(value: string | undefined) {
    this._validate = value;
  }
  public resetValidate() {
    this._validate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateInput() {
    return this._validate;
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this._alias;
  }
  public set alias(value: string | undefined) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      api_url: cdktf.stringToTerraform(this._apiUrl),
      app_key: cdktf.stringToTerraform(this._appKey),
      http_client_retry_backoff_base: cdktf.numberToTerraform(this._httpClientRetryBackoffBase),
      http_client_retry_backoff_multiplier: cdktf.numberToTerraform(this._httpClientRetryBackoffMultiplier),
      http_client_retry_enabled: cdktf.stringToTerraform(this._httpClientRetryEnabled),
      http_client_retry_max_retries: cdktf.numberToTerraform(this._httpClientRetryMaxRetries),
      http_client_retry_timeout: cdktf.numberToTerraform(this._httpClientRetryTimeout),
      validate: cdktf.stringToTerraform(this._validate),
      alias: cdktf.stringToTerraform(this._alias),
    };
  }
}
