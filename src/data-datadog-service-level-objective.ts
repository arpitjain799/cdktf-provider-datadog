// https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDatadogServiceLevelObjectiveConfig extends cdktf.TerraformMetaArguments {
  /**
  * A SLO ID to limit the search.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html#id DataDatadogServiceLevelObjective#id}
  */
  readonly id?: string;
  /**
  * Filter results based on SLO numerator and denominator.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html#metrics_query DataDatadogServiceLevelObjective#metrics_query}
  */
  readonly metricsQuery?: string;
  /**
  * Filter results based on SLO names.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html#name_query DataDatadogServiceLevelObjective#name_query}
  */
  readonly nameQuery?: string;
  /**
  * Filter results based on a single SLO tag.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html#tags_query DataDatadogServiceLevelObjective#tags_query}
  */
  readonly tagsQuery?: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html datadog_service_level_objective}
*/
export class DataDatadogServiceLevelObjective extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_service_level_objective";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/d/service_level_objective.html datadog_service_level_objective} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDatadogServiceLevelObjectiveConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataDatadogServiceLevelObjectiveConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'datadog_service_level_objective',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._id = config.id;
    this._metricsQuery = config.metricsQuery;
    this._nameQuery = config.nameQuery;
    this._tagsQuery = config.tagsQuery;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: false, optional: true, required: false
  private _id?: string | undefined; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string | undefined) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id
  }

  // metrics_query - computed: false, optional: true, required: false
  private _metricsQuery?: string | undefined; 
  public get metricsQuery() {
    return this.getStringAttribute('metrics_query');
  }
  public set metricsQuery(value: string | undefined) {
    this._metricsQuery = value;
  }
  public resetMetricsQuery() {
    this._metricsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsQueryInput() {
    return this._metricsQuery
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // name_query - computed: false, optional: true, required: false
  private _nameQuery?: string | undefined; 
  public get nameQuery() {
    return this.getStringAttribute('name_query');
  }
  public set nameQuery(value: string | undefined) {
    this._nameQuery = value;
  }
  public resetNameQuery() {
    this._nameQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameQueryInput() {
    return this._nameQuery
  }

  // tags_query - computed: false, optional: true, required: false
  private _tagsQuery?: string | undefined; 
  public get tagsQuery() {
    return this.getStringAttribute('tags_query');
  }
  public set tagsQuery(value: string | undefined) {
    this._tagsQuery = value;
  }
  public resetTagsQuery() {
    this._tagsQuery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsQueryInput() {
    return this._tagsQuery
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      metrics_query: cdktf.stringToTerraform(this._metricsQuery),
      name_query: cdktf.stringToTerraform(this._nameQuery),
      tags_query: cdktf.stringToTerraform(this._tagsQuery),
    };
  }
}
