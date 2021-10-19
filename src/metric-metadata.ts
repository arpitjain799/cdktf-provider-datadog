// https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricMetadataConfig extends cdktf.TerraformMetaArguments {
  /**
  * A description of the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#description MetricMetadata#description}
  */
  readonly description?: string;
  /**
  * The name of the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#metric MetricMetadata#metric}
  */
  readonly metric: string;
  /**
  * Per unit of the metric such as `second` in `bytes per second`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#per_unit MetricMetadata#per_unit}
  */
  readonly perUnit?: string;
  /**
  * A short name of the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#short_name MetricMetadata#short_name}
  */
  readonly shortName?: string;
  /**
  * If applicable, statsd flush interval in seconds for the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#statsd_interval MetricMetadata#statsd_interval}
  */
  readonly statsdInterval?: number;
  /**
  * Type of the metric.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#type MetricMetadata#type}
  */
  readonly type?: string;
  /**
  * Primary unit of the metric such as `byte` or `operation`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html#unit MetricMetadata#unit}
  */
  readonly unit?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html datadog_metric_metadata}
*/
export class MetricMetadata extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_metric_metadata";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/metric_metadata.html datadog_metric_metadata} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricMetadataConfig
  */
  public constructor(scope: Construct, id: string, config: MetricMetadataConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_metric_metadata',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._metric = config.metric;
    this._perUnit = config.perUnit;
    this._shortName = config.shortName;
    this._statsdInterval = config.statsdInterval;
    this._type = config.type;
    this._unit = config.unit;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string | undefined; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string | undefined) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // metric - computed: false, optional: false, required: true
  private _metric?: string; 
  public get metric() {
    return this.getStringAttribute('metric');
  }
  public set metric(value: string) {
    this._metric = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricInput() {
    return this._metric
  }

  // per_unit - computed: false, optional: true, required: false
  private _perUnit?: string | undefined; 
  public get perUnit() {
    return this.getStringAttribute('per_unit');
  }
  public set perUnit(value: string | undefined) {
    this._perUnit = value;
  }
  public resetPerUnit() {
    this._perUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perUnitInput() {
    return this._perUnit
  }

  // short_name - computed: false, optional: true, required: false
  private _shortName?: string | undefined; 
  public get shortName() {
    return this.getStringAttribute('short_name');
  }
  public set shortName(value: string | undefined) {
    this._shortName = value;
  }
  public resetShortName() {
    this._shortName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shortNameInput() {
    return this._shortName
  }

  // statsd_interval - computed: false, optional: true, required: false
  private _statsdInterval?: number | undefined; 
  public get statsdInterval() {
    return this.getNumberAttribute('statsd_interval');
  }
  public set statsdInterval(value: number | undefined) {
    this._statsdInterval = value;
  }
  public resetStatsdInterval() {
    this._statsdInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsdIntervalInput() {
    return this._statsdInterval
  }

  // type - computed: false, optional: true, required: false
  private _type?: string | undefined; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string | undefined) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type
  }

  // unit - computed: false, optional: true, required: false
  private _unit?: string | undefined; 
  public get unit() {
    return this.getStringAttribute('unit');
  }
  public set unit(value: string | undefined) {
    this._unit = value;
  }
  public resetUnit() {
    this._unit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unitInput() {
    return this._unit
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      metric: cdktf.stringToTerraform(this._metric),
      per_unit: cdktf.stringToTerraform(this._perUnit),
      short_name: cdktf.stringToTerraform(this._shortName),
      statsd_interval: cdktf.numberToTerraform(this._statsdInterval),
      type: cdktf.stringToTerraform(this._type),
      unit: cdktf.stringToTerraform(this._unit),
    };
  }
}
