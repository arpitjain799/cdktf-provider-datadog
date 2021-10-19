// https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPagerdutyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your PagerDuty API token.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html#api_token IntegrationPagerduty#api_token}
  */
  readonly apiToken?: string;
  /**
  * Array of your schedule URLs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html#schedules IntegrationPagerduty#schedules}
  */
  readonly schedules?: string[];
  /**
  * Your PagerDuty account’s personalized subdomain name.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html#subdomain IntegrationPagerduty#subdomain}
  */
  readonly subdomain: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html datadog_integration_pagerduty}
*/
export class IntegrationPagerduty extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_pagerduty";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty.html datadog_integration_pagerduty} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPagerdutyConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPagerdutyConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_pagerduty',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._apiToken = config.apiToken;
    this._schedules = config.schedules;
    this._subdomain = config.subdomain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_token - computed: false, optional: true, required: false
  private _apiToken?: string | undefined; 
  public get apiToken() {
    return this.getStringAttribute('api_token');
  }
  public set apiToken(value: string | undefined) {
    this._apiToken = value;
  }
  public resetApiToken() {
    this._apiToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiTokenInput() {
    return this._apiToken
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // schedules - computed: false, optional: true, required: false
  private _schedules?: string[] | undefined; 
  public get schedules() {
    return this.getListAttribute('schedules');
  }
  public set schedules(value: string[] | undefined) {
    this._schedules = value;
  }
  public resetSchedules() {
    this._schedules = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schedulesInput() {
    return this._schedules
  }

  // subdomain - computed: false, optional: false, required: true
  private _subdomain?: string; 
  public get subdomain() {
    return this.getStringAttribute('subdomain');
  }
  public set subdomain(value: string) {
    this._subdomain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subdomainInput() {
    return this._subdomain
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_token: cdktf.stringToTerraform(this._apiToken),
      schedules: cdktf.listMapper(cdktf.stringToTerraform)(this._schedules),
      subdomain: cdktf.stringToTerraform(this._subdomain),
    };
  }
}
