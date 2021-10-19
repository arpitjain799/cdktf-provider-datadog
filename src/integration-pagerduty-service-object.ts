// https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IntegrationPagerdutyServiceObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Your Service name associated service key in PagerDuty. Note: Since the Datadog API never returns service keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object.html#service_key IntegrationPagerdutyServiceObject#service_key}
  */
  readonly serviceKey: string;
  /**
  * Your Service name in PagerDuty.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object.html#service_name IntegrationPagerdutyServiceObject#service_name}
  */
  readonly serviceName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object.html datadog_integration_pagerduty_service_object}
*/
export class IntegrationPagerdutyServiceObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_integration_pagerduty_service_object";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/integration_pagerduty_service_object.html datadog_integration_pagerduty_service_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IntegrationPagerdutyServiceObjectConfig
  */
  public constructor(scope: Construct, id: string, config: IntegrationPagerdutyServiceObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_integration_pagerduty_service_object',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._serviceKey = config.serviceKey;
    this._serviceName = config.serviceName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // service_key - computed: false, optional: false, required: true
  private _serviceKey?: string; 
  public get serviceKey() {
    return this.getStringAttribute('service_key');
  }
  public set serviceKey(value: string) {
    this._serviceKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceKeyInput() {
    return this._serviceKey
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      service_key: cdktf.stringToTerraform(this._serviceKey),
      service_name: cdktf.stringToTerraform(this._serviceName),
    };
  }
}
