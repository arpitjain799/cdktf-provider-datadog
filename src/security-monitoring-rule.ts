// https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecurityMonitoringRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether the rule is enabled.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#enabled SecurityMonitoringRule#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Whether the notifications include the triggering group-by values in their title.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#has_extended_title SecurityMonitoringRule#has_extended_title}
  */
  readonly hasExtendedTitle?: boolean | cdktf.IResolvable;
  /**
  * Message for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#message SecurityMonitoringRule#message}
  */
  readonly message: string;
  /**
  * The name of the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name: string;
  /**
  * Tags for generated signals.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#tags SecurityMonitoringRule#tags}
  */
  readonly tags?: string[];
  /**
  * The rule type. Valid values are `log_detection`, `infrastructure_configuration`, `workload_security`, `cloud_configuration`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#type SecurityMonitoringRule#type}
  */
  readonly type?: string;
  /**
  * case block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#case SecurityMonitoringRule#case}
  */
  readonly case: SecurityMonitoringRuleCase[];
  /**
  * filter block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#filter SecurityMonitoringRule#filter}
  */
  readonly filter?: SecurityMonitoringRuleFilter[];
  /**
  * options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#options SecurityMonitoringRule#options}
  */
  readonly options?: SecurityMonitoringRuleOptions;
  /**
  * query block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: SecurityMonitoringRuleQuery[];
}
export interface SecurityMonitoringRuleCase {
  /**
  * A rule case contains logical operations (`>`,`>=`, `&&`, `||`) to determine if a signal should be generated based on the event counts in the previously defined queries.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#condition SecurityMonitoringRule#condition}
  */
  readonly condition?: string;
  /**
  * Name of the case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Notification targets for each rule case.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#notifications SecurityMonitoringRule#notifications}
  */
  readonly notifications?: string[];
  /**
  * Severity of the Security Signal. Valid values are `info`, `low`, `medium`, `high`, `critical`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#status SecurityMonitoringRule#status}
  */
  readonly status: string;
}

function securityMonitoringRuleCaseToTerraform(struct?: SecurityMonitoringRuleCase): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    condition: cdktf.stringToTerraform(struct!.condition),
    name: cdktf.stringToTerraform(struct!.name),
    notifications: cdktf.listMapper(cdktf.stringToTerraform)(struct!.notifications),
    status: cdktf.stringToTerraform(struct!.status),
  }
}

export interface SecurityMonitoringRuleFilter {
  /**
  * The type of filtering action. Valid values are `require`, `suppress`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#action SecurityMonitoringRule#action}
  */
  readonly action: string;
  /**
  * Query for selecting logs to apply the filtering action.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: string;
}

function securityMonitoringRuleFilterToTerraform(struct?: SecurityMonitoringRuleFilter): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    query: cdktf.stringToTerraform(struct!.query),
  }
}

export interface SecurityMonitoringRuleOptionsNewValueOptions {
  /**
  * The duration in days after which a learned value is forgotten. Valid values are `1`, `2`, `7`, `14`, `21`, `28`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#forget_after SecurityMonitoringRule#forget_after}
  */
  readonly forgetAfter: number;
  /**
  * The duration in days during which values are learned, and after which signals will be generated for values that weren't learned. If set to 0, a signal will be generated for all new values after the first value is learned. Valid values are `0`, `1`, `7`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#learning_duration SecurityMonitoringRule#learning_duration}
  */
  readonly learningDuration: number;
}

function securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsNewValueOptionsOutputReference | SecurityMonitoringRuleOptionsNewValueOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forget_after: cdktf.numberToTerraform(struct!.forgetAfter),
    learning_duration: cdktf.numberToTerraform(struct!.learningDuration),
  }
}

export class SecurityMonitoringRuleOptionsNewValueOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // forget_after - computed: false, optional: false, required: true
  private _forgetAfter?: number; 
  public get forgetAfter() {
    return this.getNumberAttribute('forget_after');
  }
  public set forgetAfter(value: number) {
    this._forgetAfter = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forgetAfterInput() {
    return this._forgetAfter
  }

  // learning_duration - computed: false, optional: false, required: true
  private _learningDuration?: number; 
  public get learningDuration() {
    return this.getNumberAttribute('learning_duration');
  }
  public set learningDuration(value: number) {
    this._learningDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get learningDurationInput() {
    return this._learningDuration
  }
}
export interface SecurityMonitoringRuleOptions {
  /**
  * The detection method. Valid values are `threshold`, `new_value`, `anomaly_detection`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#detection_method SecurityMonitoringRule#detection_method}
  */
  readonly detectionMethod?: string;
  /**
  * A time window is specified to match when at least one of the cases matches true. This is a sliding window and evaluates in real time. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#evaluation_window SecurityMonitoringRule#evaluation_window}
  */
  readonly evaluationWindow: number;
  /**
  * Once a signal is generated, the signal will remain “open” if a case is matched at least once within this keep alive window. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#keep_alive SecurityMonitoringRule#keep_alive}
  */
  readonly keepAlive: number;
  /**
  * A signal will “close” regardless of the query being matched once the time exceeds the maximum duration. This time is calculated from the first seen timestamp. Valid values are `0`, `60`, `300`, `600`, `900`, `1800`, `3600`, `7200`, `10800`, `21600`, `43200`, `86400`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#max_signal_duration SecurityMonitoringRule#max_signal_duration}
  */
  readonly maxSignalDuration: number;
  /**
  * new_value_options block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#new_value_options SecurityMonitoringRule#new_value_options}
  */
  readonly newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions;
}

function securityMonitoringRuleOptionsToTerraform(struct?: SecurityMonitoringRuleOptionsOutputReference | SecurityMonitoringRuleOptions): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    detection_method: cdktf.stringToTerraform(struct!.detectionMethod),
    evaluation_window: cdktf.numberToTerraform(struct!.evaluationWindow),
    keep_alive: cdktf.numberToTerraform(struct!.keepAlive),
    max_signal_duration: cdktf.numberToTerraform(struct!.maxSignalDuration),
    new_value_options: securityMonitoringRuleOptionsNewValueOptionsToTerraform(struct!.newValueOptions),
  }
}

export class SecurityMonitoringRuleOptionsOutputReference extends cdktf.ComplexObject {
  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.ITerraformResource, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  // detection_method - computed: false, optional: true, required: false
  private _detectionMethod?: string | undefined; 
  public get detectionMethod() {
    return this.getStringAttribute('detection_method');
  }
  public set detectionMethod(value: string | undefined) {
    this._detectionMethod = value;
  }
  public resetDetectionMethod() {
    this._detectionMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionMethodInput() {
    return this._detectionMethod
  }

  // evaluation_window - computed: false, optional: false, required: true
  private _evaluationWindow?: number; 
  public get evaluationWindow() {
    return this.getNumberAttribute('evaluation_window');
  }
  public set evaluationWindow(value: number) {
    this._evaluationWindow = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationWindowInput() {
    return this._evaluationWindow
  }

  // keep_alive - computed: false, optional: false, required: true
  private _keepAlive?: number; 
  public get keepAlive() {
    return this.getNumberAttribute('keep_alive');
  }
  public set keepAlive(value: number) {
    this._keepAlive = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keepAliveInput() {
    return this._keepAlive
  }

  // max_signal_duration - computed: false, optional: false, required: true
  private _maxSignalDuration?: number; 
  public get maxSignalDuration() {
    return this.getNumberAttribute('max_signal_duration');
  }
  public set maxSignalDuration(value: number) {
    this._maxSignalDuration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSignalDurationInput() {
    return this._maxSignalDuration
  }

  // new_value_options - computed: false, optional: true, required: false
  private _newValueOptions?: SecurityMonitoringRuleOptionsNewValueOptions | undefined; 
  private __newValueOptionsOutput = new SecurityMonitoringRuleOptionsNewValueOptionsOutputReference(this as any, "new_value_options", true);
  public get newValueOptions() {
    return this.__newValueOptionsOutput;
  }
  public putNewValueOptions(value: SecurityMonitoringRuleOptionsNewValueOptions | undefined) {
    this._newValueOptions = value;
  }
  public resetNewValueOptions() {
    this._newValueOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newValueOptionsInput() {
    return this._newValueOptions
  }
}
export interface SecurityMonitoringRuleQueryAgentRule {
  /**
  * The Agent rule ID. Must be unique within the rule.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#agent_rule_id SecurityMonitoringRule#agent_rule_id}
  */
  readonly agentRuleId: string;
  /**
  * A Runtime Security expression determines what activity should be collected by the Datadog Agent. These logical expressions can use predefined operators and attributes. Tags cannot be used in Runtime Security expressions. Instead, allow or deny based on tags under the advanced option.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#expression SecurityMonitoringRule#expression}
  */
  readonly expression: string;
}

function securityMonitoringRuleQueryAgentRuleToTerraform(struct?: SecurityMonitoringRuleQueryAgentRule): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_rule_id: cdktf.stringToTerraform(struct!.agentRuleId),
    expression: cdktf.stringToTerraform(struct!.expression),
  }
}

export interface SecurityMonitoringRuleQuery {
  /**
  * The aggregation type. Valid values are `count`, `cardinality`, `sum`, `max`, `new_value`.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#aggregation SecurityMonitoringRule#aggregation}
  */
  readonly aggregation?: string;
  /**
  * Field for which the cardinality is measured. Sent as an array.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#distinct_fields SecurityMonitoringRule#distinct_fields}
  */
  readonly distinctFields?: string[];
  /**
  * Fields to group by.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#group_by_fields SecurityMonitoringRule#group_by_fields}
  */
  readonly groupByFields?: string[];
  /**
  * The target field to aggregate over when using the sum or max aggregations.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#metric SecurityMonitoringRule#metric}
  */
  readonly metric?: string;
  /**
  * Name of the query.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#name SecurityMonitoringRule#name}
  */
  readonly name?: string;
  /**
  * Query to run on logs.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#query SecurityMonitoringRule#query}
  */
  readonly query: string;
  /**
  * agent_rule block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html#agent_rule SecurityMonitoringRule#agent_rule}
  */
  readonly agentRule?: SecurityMonitoringRuleQueryAgentRule[];
}

function securityMonitoringRuleQueryToTerraform(struct?: SecurityMonitoringRuleQuery): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aggregation: cdktf.stringToTerraform(struct!.aggregation),
    distinct_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.distinctFields),
    group_by_fields: cdktf.listMapper(cdktf.stringToTerraform)(struct!.groupByFields),
    metric: cdktf.stringToTerraform(struct!.metric),
    name: cdktf.stringToTerraform(struct!.name),
    query: cdktf.stringToTerraform(struct!.query),
    agent_rule: cdktf.listMapper(securityMonitoringRuleQueryAgentRuleToTerraform)(struct!.agentRule),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html datadog_security_monitoring_rule}
*/
export class SecurityMonitoringRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "datadog_security_monitoring_rule";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/datadog/r/security_monitoring_rule.html datadog_security_monitoring_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecurityMonitoringRuleConfig
  */
  public constructor(scope: Construct, id: string, config: SecurityMonitoringRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'datadog_security_monitoring_rule',
      terraformGeneratorMetadata: {
        providerName: 'datadog'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._enabled = config.enabled;
    this._hasExtendedTitle = config.hasExtendedTitle;
    this._message = config.message;
    this._name = config.name;
    this._tags = config.tags;
    this._type = config.type;
    this._case = config.case;
    this._filter = config.filter;
    this._options = config.options;
    this._query = config.query;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable | undefined; 
  public get enabled() {
    return this.getBooleanAttribute('enabled') as any;
  }
  public set enabled(value: boolean | cdktf.IResolvable | undefined) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled
  }

  // has_extended_title - computed: false, optional: true, required: false
  private _hasExtendedTitle?: boolean | cdktf.IResolvable | undefined; 
  public get hasExtendedTitle() {
    return this.getBooleanAttribute('has_extended_title') as any;
  }
  public set hasExtendedTitle(value: boolean | cdktf.IResolvable | undefined) {
    this._hasExtendedTitle = value;
  }
  public resetHasExtendedTitle() {
    this._hasExtendedTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasExtendedTitleInput() {
    return this._hasExtendedTitle
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // message - computed: false, optional: false, required: true
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message
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

  // case - computed: false, optional: false, required: true
  private _case?: SecurityMonitoringRuleCase[]; 
  public get case() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('case') as any;
  }
  public set case(value: SecurityMonitoringRuleCase[]) {
    this._case = value;
  }
  // Temporarily expose input value. Use with caution.
  public get caseInput() {
    return this._case
  }

  // filter - computed: false, optional: true, required: false
  private _filter?: SecurityMonitoringRuleFilter[] | undefined; 
  public get filter() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('filter') as any;
  }
  public set filter(value: SecurityMonitoringRuleFilter[] | undefined) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter
  }

  // options - computed: false, optional: true, required: false
  private _options?: SecurityMonitoringRuleOptions | undefined; 
  private __optionsOutput = new SecurityMonitoringRuleOptionsOutputReference(this as any, "options", true);
  public get options() {
    return this.__optionsOutput;
  }
  public putOptions(value: SecurityMonitoringRuleOptions | undefined) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options
  }

  // query - computed: false, optional: false, required: true
  private _query?: SecurityMonitoringRuleQuery[]; 
  public get query() {
    // Getting the computed value is not yet implemented
    return this.interpolationForAttribute('query') as any;
  }
  public set query(value: SecurityMonitoringRuleQuery[]) {
    this._query = value;
  }
  // Temporarily expose input value. Use with caution.
  public get queryInput() {
    return this._query
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enabled: cdktf.booleanToTerraform(this._enabled),
      has_extended_title: cdktf.booleanToTerraform(this._hasExtendedTitle),
      message: cdktf.stringToTerraform(this._message),
      name: cdktf.stringToTerraform(this._name),
      tags: cdktf.listMapper(cdktf.stringToTerraform)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      case: cdktf.listMapper(securityMonitoringRuleCaseToTerraform)(this._case),
      filter: cdktf.listMapper(securityMonitoringRuleFilterToTerraform)(this._filter),
      options: securityMonitoringRuleOptionsToTerraform(this._options),
      query: cdktf.listMapper(securityMonitoringRuleQueryToTerraform)(this._query),
    };
  }
}
