# `syntheticsTest` Submodule <a name="`syntheticsTest` Submodule" id="@cdktf/provider-datadog.syntheticsTest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SyntheticsTest <a name="SyntheticsTest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest"></a>

Represents a {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test datadog_synthetics_test}.

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTest(Construct Scope, string Id, SyntheticsTestConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig">SyntheticsTestConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep">PutApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion">PutAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep">PutBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable">PutBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable">PutConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList">PutOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth">PutRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate">PutRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition">PutRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy">PutRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep">ResetApiStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion">ResetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep">ResetBrowserStep</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable">ResetBrowserVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable">ResetConfigVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds">ResetDeviceIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList">ResetOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth">ResetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate">ResetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition">ResetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy">ResetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery">ResetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie">ResetSetCookie</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype">ResetSubtype</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `PutApiStep` <a name="PutApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep"></a>

```csharp
private void PutApiStep(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putApiStep.parameter.value"></a>

- *Type:* object

---

##### `PutAssertion` <a name="PutAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion"></a>

```csharp
private void PutAssertion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putAssertion.parameter.value"></a>

- *Type:* object

---

##### `PutBrowserStep` <a name="PutBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep"></a>

```csharp
private void PutBrowserStep(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserStep.parameter.value"></a>

- *Type:* object

---

##### `PutBrowserVariable` <a name="PutBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable"></a>

```csharp
private void PutBrowserVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putBrowserVariable.parameter.value"></a>

- *Type:* object

---

##### `PutConfigVariable` <a name="PutConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable"></a>

```csharp
private void PutConfigVariable(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putConfigVariable.parameter.value"></a>

- *Type:* object

---

##### `PutOptionsList` <a name="PutOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList"></a>

```csharp
private void PutOptionsList(SyntheticsTestOptionsList Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putOptionsList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `PutRequestBasicauth` <a name="PutRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth"></a>

```csharp
private void PutRequestBasicauth(SyntheticsTestRequestBasicauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `PutRequestClientCertificate` <a name="PutRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate"></a>

```csharp
private void PutRequestClientCertificate(SyntheticsTestRequestClientCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `PutRequestDefinition` <a name="PutRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition"></a>

```csharp
private void PutRequestDefinition(SyntheticsTestRequestDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `PutRequestProxy` <a name="PutRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy"></a>

```csharp
private void PutRequestProxy(SyntheticsTestRequestProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `ResetApiStep` <a name="ResetApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetApiStep"></a>

```csharp
private void ResetApiStep()
```

##### `ResetAssertion` <a name="ResetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetAssertion"></a>

```csharp
private void ResetAssertion()
```

##### `ResetBrowserStep` <a name="ResetBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserStep"></a>

```csharp
private void ResetBrowserStep()
```

##### `ResetBrowserVariable` <a name="ResetBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetBrowserVariable"></a>

```csharp
private void ResetBrowserVariable()
```

##### `ResetConfigVariable` <a name="ResetConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetConfigVariable"></a>

```csharp
private void ResetConfigVariable()
```

##### `ResetDeviceIds` <a name="ResetDeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetDeviceIds"></a>

```csharp
private void ResetDeviceIds()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetOptionsList` <a name="ResetOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetOptionsList"></a>

```csharp
private void ResetOptionsList()
```

##### `ResetRequestBasicauth` <a name="ResetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestBasicauth"></a>

```csharp
private void ResetRequestBasicauth()
```

##### `ResetRequestClientCertificate` <a name="ResetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestClientCertificate"></a>

```csharp
private void ResetRequestClientCertificate()
```

##### `ResetRequestDefinition` <a name="ResetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestDefinition"></a>

```csharp
private void ResetRequestDefinition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetRequestProxy` <a name="ResetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestProxy"></a>

```csharp
private void ResetRequestProxy()
```

##### `ResetRequestQuery` <a name="ResetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetRequestQuery"></a>

```csharp
private void ResetRequestQuery()
```

##### `ResetSetCookie` <a name="ResetSetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSetCookie"></a>

```csharp
private void ResetSetCookie()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetSubtype"></a>

```csharp
private void ResetSubtype()
```

##### `ResetTags` <a name="ResetTags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsTest.IsConstruct(object X);
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsTest.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

SyntheticsTest.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.isTerraformResource.parameter.x"></a>

- *Type:* object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep">ApiStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion">Assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep">BrowserStep</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable">BrowserVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable">ConfigVariable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId">MonitorId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList">OptionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput">ApiStepInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput">AssertionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput">BrowserStepInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput">BrowserVariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput">ConfigVariableInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput">DeviceIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput">LocationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput">OptionsListInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput">RequestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput">RequestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput">RequestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput">RequestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput">RequestQueryInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput">SetCookieInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput">StatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput">TagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds">DeviceIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations">Locations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery">RequestQuery</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie">SetCookie</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags">Tags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ApiStep`<sup>Required</sup> <a name="ApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStep"></a>

```csharp
public SyntheticsTestApiStepList ApiStep { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList">SyntheticsTestApiStepList</a>

---

##### `Assertion`<sup>Required</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertion"></a>

```csharp
public SyntheticsTestAssertionList Assertion { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList">SyntheticsTestAssertionList</a>

---

##### `BrowserStep`<sup>Required</sup> <a name="BrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStep"></a>

```csharp
public SyntheticsTestBrowserStepList BrowserStep { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList">SyntheticsTestBrowserStepList</a>

---

##### `BrowserVariable`<sup>Required</sup> <a name="BrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariable"></a>

```csharp
public SyntheticsTestBrowserVariableList BrowserVariable { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList">SyntheticsTestBrowserVariableList</a>

---

##### `ConfigVariable`<sup>Required</sup> <a name="ConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariable"></a>

```csharp
public SyntheticsTestConfigVariableList ConfigVariable { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList">SyntheticsTestConfigVariableList</a>

---

##### `MonitorId`<sup>Required</sup> <a name="MonitorId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.monitorId"></a>

```csharp
public double MonitorId { get; }
```

- *Type:* double

---

##### `OptionsList`<sup>Required</sup> <a name="OptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsList"></a>

```csharp
public SyntheticsTestOptionsListOutputReference OptionsList { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference">SyntheticsTestOptionsListOutputReference</a>

---

##### `RequestBasicauth`<sup>Required</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauth"></a>

```csharp
public SyntheticsTestRequestBasicauthOutputReference RequestBasicauth { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference">SyntheticsTestRequestBasicauthOutputReference</a>

---

##### `RequestClientCertificate`<sup>Required</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificate"></a>

```csharp
public SyntheticsTestRequestClientCertificateOutputReference RequestClientCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference">SyntheticsTestRequestClientCertificateOutputReference</a>

---

##### `RequestDefinition`<sup>Required</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinition"></a>

```csharp
public SyntheticsTestRequestDefinitionOutputReference RequestDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference">SyntheticsTestRequestDefinitionOutputReference</a>

---

##### `RequestProxy`<sup>Required</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxy"></a>

```csharp
public SyntheticsTestRequestProxyOutputReference RequestProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference">SyntheticsTestRequestProxyOutputReference</a>

---

##### `ApiStepInput`<sup>Optional</sup> <a name="ApiStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.apiStepInput"></a>

```csharp
public object ApiStepInput { get; }
```

- *Type:* object

---

##### `AssertionInput`<sup>Optional</sup> <a name="AssertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.assertionInput"></a>

```csharp
public object AssertionInput { get; }
```

- *Type:* object

---

##### `BrowserStepInput`<sup>Optional</sup> <a name="BrowserStepInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserStepInput"></a>

```csharp
public object BrowserStepInput { get; }
```

- *Type:* object

---

##### `BrowserVariableInput`<sup>Optional</sup> <a name="BrowserVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.browserVariableInput"></a>

```csharp
public object BrowserVariableInput { get; }
```

- *Type:* object

---

##### `ConfigVariableInput`<sup>Optional</sup> <a name="ConfigVariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.configVariableInput"></a>

```csharp
public object ConfigVariableInput { get; }
```

- *Type:* object

---

##### `DeviceIdsInput`<sup>Optional</sup> <a name="DeviceIdsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIdsInput"></a>

```csharp
public string[] DeviceIdsInput { get; }
```

- *Type:* string[]

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationsInput`<sup>Optional</sup> <a name="LocationsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locationsInput"></a>

```csharp
public string[] LocationsInput { get; }
```

- *Type:* string[]

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OptionsListInput`<sup>Optional</sup> <a name="OptionsListInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.optionsListInput"></a>

```csharp
public SyntheticsTestOptionsList OptionsListInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---

##### `RequestBasicauthInput`<sup>Optional</sup> <a name="RequestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestBasicauthInput"></a>

```csharp
public SyntheticsTestRequestBasicauth RequestBasicauthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---

##### `RequestClientCertificateInput`<sup>Optional</sup> <a name="RequestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestClientCertificateInput"></a>

```csharp
public SyntheticsTestRequestClientCertificate RequestClientCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---

##### `RequestDefinitionInput`<sup>Optional</sup> <a name="RequestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestDefinitionInput"></a>

```csharp
public SyntheticsTestRequestDefinition RequestDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestProxyInput`<sup>Optional</sup> <a name="RequestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestProxyInput"></a>

```csharp
public SyntheticsTestRequestProxy RequestProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---

##### `RequestQueryInput`<sup>Optional</sup> <a name="RequestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQueryInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQueryInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SetCookieInput`<sup>Optional</sup> <a name="SetCookieInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookieInput"></a>

```csharp
public string SetCookieInput { get; }
```

- *Type:* string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.statusInput"></a>

```csharp
public string StatusInput { get; }
```

- *Type:* string

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tagsInput"></a>

```csharp
public string[] TagsInput { get; }
```

- *Type:* string[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DeviceIds`<sup>Required</sup> <a name="DeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.deviceIds"></a>

```csharp
public string[] DeviceIds { get; }
```

- *Type:* string[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.locations"></a>

```csharp
public string[] Locations { get; }
```

- *Type:* string[]

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestQuery`<sup>Required</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.requestQuery"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQuery { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `SetCookie`<sup>Required</sup> <a name="SetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.setCookie"></a>

```csharp
public string SetCookie { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tags"></a>

```csharp
public string[] Tags { get; }
```

- *Type:* string[]

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTest.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### SyntheticsTestApiStep <a name="SyntheticsTestApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStep {
    string Name,
    object AllowFailure = null,
    object Assertion = null,
    object ExtractedValue = null,
    object IsCritical = null,
    SyntheticsTestApiStepRequestBasicauth RequestBasicauth = null,
    SyntheticsTestApiStepRequestClientCertificate RequestClientCertificate = null,
    SyntheticsTestApiStepRequestDefinition RequestDefinition = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    SyntheticsTestApiStepRequestProxy RequestProxy = null,
    System.Collections.Generic.IDictionary<string, string> RequestQuery = null,
    SyntheticsTestApiStepRetry Retry = null,
    string Subtype = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name">Name</a></code> | <code>string</code> | The name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure">AllowFailure</a></code> | <code>object</code> | Determines whether or not to continue with test if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion">Assertion</a></code> | <code>object</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue">ExtractedValue</a></code> | <code>object</code> | extracted_value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical">IsCritical</a></code> | <code>object</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery">RequestQuery</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype">Subtype</a></code> | <code>string</code> | The subtype of the Synthetic multistep API test step. Valid values are `http`. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.allowFailure"></a>

```csharp
public object AllowFailure { get; set; }
```

- *Type:* object

Determines whether or not to continue with test if this step fails.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `Assertion`<sup>Optional</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.assertion"></a>

```csharp
public object Assertion { get; set; }
```

- *Type:* object

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `ExtractedValue`<sup>Optional</sup> <a name="ExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.extractedValue"></a>

```csharp
public object ExtractedValue { get; set; }
```

- *Type:* object

extracted_value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#extracted_value SyntheticsTest#extracted_value}

---

##### `IsCritical`<sup>Optional</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.isCritical"></a>

```csharp
public object IsCritical { get; set; }
```

- *Type:* object

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `RequestBasicauth`<sup>Optional</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestBasicauth"></a>

```csharp
public SyntheticsTestApiStepRequestBasicauth RequestBasicauth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `RequestClientCertificate`<sup>Optional</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestClientCertificate"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificate RequestClientCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `RequestDefinition`<sup>Optional</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestDefinition"></a>

```csharp
public SyntheticsTestApiStepRequestDefinition RequestDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `RequestProxy`<sup>Optional</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestProxy"></a>

```csharp
public SyntheticsTestApiStepRequestProxy RequestProxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `RequestQuery`<sup>Optional</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.requestQuery"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQuery { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.retry"></a>

```csharp
public SyntheticsTestApiStepRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStep.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

The subtype of the Synthetic multistep API test step. Valid values are `http`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

### SyntheticsTestApiStepAssertion <a name="SyntheticsTestApiStepAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertion {
    string Operator,
    string Type,
    string Property = null,
    string Target = null,
    SyntheticsTestApiStepAssertionTargetjsonpath Targetjsonpath = null,
    SyntheticsTestApiStepAssertionTargetxpath Targetxpath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator">Operator</a></code> | <code>string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type">Type</a></code> | <code>string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property">Property</a></code> | <code>string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target">Target</a></code> | <code>string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.property"></a>

```csharp
public string Property { get; set; }
```

- *Type:* string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `Targetjsonpath`<sup>Optional</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetjsonpath"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetjsonpath Targetjsonpath { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `Targetxpath`<sup>Optional</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertion.property.targetxpath"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetxpath Targetxpath { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestApiStepAssertionTargetjsonpath <a name="SyntheticsTestApiStepAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionTargetjsonpath {
    string Jsonpath,
    string Operator,
    string Targetvalue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath">Jsonpath</a></code> | <code>string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator">Operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue">Targetvalue</a></code> | <code>string</code> | Expected matching value. |

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.jsonpath"></a>

```csharp
public string Jsonpath { get; set; }
```

- *Type:* string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath.property.targetvalue"></a>

```csharp
public string Targetvalue { get; set; }
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestApiStepAssertionTargetxpath <a name="SyntheticsTestApiStepAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionTargetxpath {
    string Operator,
    string Targetvalue,
    string Xpath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator">Operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue">Targetvalue</a></code> | <code>string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath">Xpath</a></code> | <code>string</code> | The xpath to assert. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.targetvalue"></a>

```csharp
public string Targetvalue { get; set; }
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath.property.xpath"></a>

```csharp
public string Xpath { get; set; }
```

- *Type:* string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestApiStepExtractedValue <a name="SyntheticsTestApiStepExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepExtractedValue {
    string Name,
    SyntheticsTestApiStepExtractedValueParser Parser,
    string Type,
    string Field = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser">Parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | parser block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type">Type</a></code> | <code>string</code> | Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field">Field</a></code> | <code>string</code> | When type is `http_header`, name of the header to use to extract the value. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}.

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.parser"></a>

```csharp
public SyntheticsTestApiStepExtractedValueParser Parser { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

parser block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#parser SyntheticsTest#parser}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Property of the Synthetics Test Response to use for the variable. Valid values are `http_body`, `http_header`, `local_variable`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValue.property.field"></a>

```csharp
public string Field { get; set; }
```

- *Type:* string

When type is `http_header`, name of the header to use to extract the value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#field SyntheticsTest#field}

---

### SyntheticsTestApiStepExtractedValueParser <a name="SyntheticsTestApiStepExtractedValueParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepExtractedValueParser {
    string Type,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type">Type</a></code> | <code>string</code> | Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value">Value</a></code> | <code>string</code> | Regex or JSON path used for the parser. Not used with type `raw`. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of parser for a Synthetics global variable from a synthetics test. Valid values are `raw`, `json_path`, `regex`, `x_path`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Regex or JSON path used for the parser. Not used with type `raw`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

### SyntheticsTestApiStepRequestBasicauth <a name="SyntheticsTestApiStepRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestBasicauth {
    string AccessKey = null,
    string AccessTokenUrl = null,
    string Audience = null,
    string ClientId = null,
    string ClientSecret = null,
    string Domain = null,
    string Password = null,
    string Region = null,
    string Resource = null,
    string Scope = null,
    string SecretKey = null,
    string ServiceName = null,
    string SessionToken = null,
    string TokenApiAuthentication = null,
    string Type = null,
    string Username = null,
    string Workstation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey">AccessKey</a></code> | <code>string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience">Audience</a></code> | <code>string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId">ClientId</a></code> | <code>string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain">Domain</a></code> | <code>string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password">Password</a></code> | <code>string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region">Region</a></code> | <code>string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource">Resource</a></code> | <code>string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope">Scope</a></code> | <code>string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey">SecretKey</a></code> | <code>string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName">ServiceName</a></code> | <code>string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken">SessionToken</a></code> | <code>string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type">Type</a></code> | <code>string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username">Username</a></code> | <code>string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation">Workstation</a></code> | <code>string</code> | Workstation for `ntlm` authentication. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; set; }
```

- *Type:* string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `SessionToken`<sup>Optional</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.sessionToken"></a>

```csharp
public string SessionToken { get; set; }
```

- *Type:* string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `TokenApiAuthentication`<sup>Optional</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.tokenApiAuthentication"></a>

```csharp
public string TokenApiAuthentication { get; set; }
```

- *Type:* string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `Workstation`<sup>Optional</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth.property.workstation"></a>

```csharp
public string Workstation { get; set; }
```

- *Type:* string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestApiStepRequestClientCertificate <a name="SyntheticsTestApiStepRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificate {
    SyntheticsTestApiStepRequestClientCertificateCert Cert,
    SyntheticsTestApiStepRequestClientCertificateKey Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | key block. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.cert"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateCert Cert { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate.property.key"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateKey Key { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestApiStepRequestClientCertificateCert <a name="SyntheticsTestApiStepRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificateCert {
    string Content,
    string Filename = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content">Content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename">Filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestClientCertificateKey <a name="SyntheticsTestApiStepRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificateKey {
    string Content,
    string Filename = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content">Content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename">Filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestApiStepRequestDefinition <a name="SyntheticsTestApiStepRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestDefinition {
    object AllowInsecure = null,
    string Body = null,
    string BodyType = null,
    string CallType = null,
    string[] CertificateDomains = null,
    string DnsServer = null,
    double DnsServerPort = null,
    object FollowRedirects = null,
    string Host = null,
    string Message = null,
    string Method = null,
    object NoSavingResponseBody = null,
    double NumberOfPackets = null,
    double Port = null,
    string Servername = null,
    string Service = null,
    object ShouldTrackHops = null,
    double Timeout = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body">Body</a></code> | <code>string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType">BodyType</a></code> | <code>string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType">CallType</a></code> | <code>string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains">CertificateDomains</a></code> | <code>string[]</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer">DnsServer</a></code> | <code>string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort">DnsServerPort</a></code> | <code>double</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host">Host</a></code> | <code>string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message">Message</a></code> | <code>string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method">Method</a></code> | <code>string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>object</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets">NumberOfPackets</a></code> | <code>double</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port">Port</a></code> | <code>double</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername">Servername</a></code> | <code>string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service">Service</a></code> | <code>string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>object</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout">Timeout</a></code> | <code>double</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url">Url</a></code> | <code>string</code> | The URL to send the request to. |

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; set; }
```

- *Type:* object

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `BodyType`<sup>Optional</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.bodyType"></a>

```csharp
public string BodyType { get; set; }
```

- *Type:* string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `CallType`<sup>Optional</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.callType"></a>

```csharp
public string CallType { get; set; }
```

- *Type:* string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `CertificateDomains`<sup>Optional</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.certificateDomains"></a>

```csharp
public string[] CertificateDomains { get; set; }
```

- *Type:* string[]

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServer"></a>

```csharp
public string DnsServer { get; set; }
```

- *Type:* string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `DnsServerPort`<sup>Optional</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.dnsServerPort"></a>

```csharp
public double DnsServerPort { get; set; }
```

- *Type:* double

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; set; }
```

- *Type:* object

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `NoSavingResponseBody`<sup>Optional</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.noSavingResponseBody"></a>

```csharp
public object NoSavingResponseBody { get; set; }
```

- *Type:* object

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `NumberOfPackets`<sup>Optional</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.numberOfPackets"></a>

```csharp
public double NumberOfPackets { get; set; }
```

- *Type:* double

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.servername"></a>

```csharp
public string Servername { get; set; }
```

- *Type:* string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `ShouldTrackHops`<sup>Optional</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.shouldTrackHops"></a>

```csharp
public object ShouldTrackHops { get; set; }
```

- *Type:* object

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestApiStepRequestProxy <a name="SyntheticsTestApiStepRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestProxy {
    string Url,
    System.Collections.Generic.IDictionary<string, string> Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url">Url</a></code> | <code>string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Header name and value map. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

### SyntheticsTestApiStepRetry <a name="SyntheticsTestApiStepRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRetry {
    double Count = null,
    double Interval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count">Count</a></code> | <code>double</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval">Interval</a></code> | <code>double</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestAssertion <a name="SyntheticsTestAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertion {
    string Operator,
    string Type,
    string Property = null,
    string Target = null,
    SyntheticsTestAssertionTargetjsonpath Targetjsonpath = null,
    SyntheticsTestAssertionTargetxpath Targetxpath = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator">Operator</a></code> | <code>string</code> | Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type">Type</a></code> | <code>string</code> | Type of assertion. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property">Property</a></code> | <code>string</code> | If assertion type is `header`, this is the header name. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target">Target</a></code> | <code>string</code> | Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | targetjsonpath block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | targetxpath block. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Assertion operator. **Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of assertion.

**Note** Only some combinations of `type` and `operator` are valid (please refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test)). Valid values are `body`, `header`, `statusCode`, `certificate`, `responseTime`, `property`, `recordEvery`, `recordSome`, `tlsVersion`, `minTlsVersion`, `latency`, `packetLossPercentage`, `packetsReceived`, `networkHop`, `receivedMessage`, `grpcHealthcheckStatus`, `connection`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.property"></a>

```csharp
public string Property { get; set; }
```

- *Type:* string

If assertion type is `header`, this is the header name.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#property SyntheticsTest#property}

---

##### `Target`<sup>Optional</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.target"></a>

```csharp
public string Target { get; set; }
```

- *Type:* string

Expected value. Depends on the assertion type, refer to [Datadog documentation](https://docs.datadoghq.com/api/latest/synthetics/#create-a-test) for details.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#target SyntheticsTest#target}

---

##### `Targetjsonpath`<sup>Optional</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetjsonpath"></a>

```csharp
public SyntheticsTestAssertionTargetjsonpath Targetjsonpath { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

targetjsonpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetjsonpath SyntheticsTest#targetjsonpath}

---

##### `Targetxpath`<sup>Optional</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertion.property.targetxpath"></a>

```csharp
public SyntheticsTestAssertionTargetxpath Targetxpath { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

targetxpath block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetxpath SyntheticsTest#targetxpath}

---

### SyntheticsTestAssertionTargetjsonpath <a name="SyntheticsTestAssertionTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionTargetjsonpath {
    string Jsonpath,
    string Operator,
    string Targetvalue
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath">Jsonpath</a></code> | <code>string</code> | The JSON path to assert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator">Operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue">Targetvalue</a></code> | <code>string</code> | Expected matching value. |

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.jsonpath"></a>

```csharp
public string Jsonpath { get; set; }
```

- *Type:* string

The JSON path to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#jsonpath SyntheticsTest#jsonpath}

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath.property.targetvalue"></a>

```csharp
public string Targetvalue { get; set; }
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

### SyntheticsTestAssertionTargetxpath <a name="SyntheticsTestAssertionTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionTargetxpath {
    string Operator,
    string Targetvalue,
    string Xpath
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator">Operator</a></code> | <code>string</code> | The specific operator to use on the path. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue">Targetvalue</a></code> | <code>string</code> | Expected matching value. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath">Xpath</a></code> | <code>string</code> | The xpath to assert. |

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

The specific operator to use on the path.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#operator SyntheticsTest#operator}

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.targetvalue"></a>

```csharp
public string Targetvalue { get; set; }
```

- *Type:* string

Expected matching value.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#targetvalue SyntheticsTest#targetvalue}

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath.property.xpath"></a>

```csharp
public string Xpath { get; set; }
```

- *Type:* string

The xpath to assert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#xpath SyntheticsTest#xpath}

---

### SyntheticsTestBrowserStep <a name="SyntheticsTestBrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStep {
    string Name,
    SyntheticsTestBrowserStepParams Params,
    string Type,
    object AllowFailure = null,
    object ForceElementUpdate = null,
    object IsCritical = null,
    double Timeout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name">Name</a></code> | <code>string</code> | Name of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params">Params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | params block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type">Type</a></code> | <code>string</code> | Type of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure">AllowFailure</a></code> | <code>object</code> | Determines if the step should be allowed to fail. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate">ForceElementUpdate</a></code> | <code>object</code> | Force update of the "element" parameter for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical">IsCritical</a></code> | <code>object</code> | Determines whether or not to consider the entire test as failed if this step fails. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout">Timeout</a></code> | <code>double</code> | Used to override the default timeout of a step. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.params"></a>

```csharp
public SyntheticsTestBrowserStepParams Params { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

params block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#params SyntheticsTest#params}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of the step.

Valid values are `assertCurrentUrl`, `assertElementAttribute`, `assertElementContent`, `assertElementPresent`, `assertEmail`, `assertFileDownload`, `assertFromJavascript`, `assertPageContains`, `assertPageLacks`, `click`, `extractFromJavascript`, `extractVariable`, `goToEmailLink`, `goToUrl`, `goToUrlAndMeasureTti`, `hover`, `playSubTest`, `pressKey`, `refresh`, `runApiTest`, `scroll`, `selectOption`, `typeText`, `uploadFiles`, `wait`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `AllowFailure`<sup>Optional</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.allowFailure"></a>

```csharp
public object AllowFailure { get; set; }
```

- *Type:* object

Determines if the step should be allowed to fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_failure SyntheticsTest#allow_failure}

---

##### `ForceElementUpdate`<sup>Optional</sup> <a name="ForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.forceElementUpdate"></a>

```csharp
public object ForceElementUpdate { get; set; }
```

- *Type:* object

Force update of the "element" parameter for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#force_element_update SyntheticsTest#force_element_update}

---

##### `IsCritical`<sup>Optional</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.isCritical"></a>

```csharp
public object IsCritical { get; set; }
```

- *Type:* object

Determines whether or not to consider the entire test as failed if this step fails.

Can be used only if `allow_failure` is `true`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_critical SyntheticsTest#is_critical}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStep.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Used to override the default timeout of a step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

### SyntheticsTestBrowserStepParams <a name="SyntheticsTestBrowserStepParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParams {
    string Attribute = null,
    string Check = null,
    string ClickType = null,
    string Code = null,
    double Delay = null,
    string Element = null,
    SyntheticsTestBrowserStepParamsElementUserLocator ElementUserLocator = null,
    string Email = null,
    string File = null,
    string Files = null,
    string[] Modifiers = null,
    string PlayingTabId = null,
    string Request = null,
    string SubtestPublicId = null,
    string Value = null,
    SyntheticsTestBrowserStepParamsVariable Variable = null,
    object WithClick = null,
    double X = null,
    double Y = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute">Attribute</a></code> | <code>string</code> | Name of the attribute to use for an "assert attribute" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check">Check</a></code> | <code>string</code> | Check type to use for an assertion step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType">ClickType</a></code> | <code>string</code> | Type of click to use for a "click" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code">Code</a></code> | <code>string</code> | Javascript code to use for the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay">Delay</a></code> | <code>double</code> | Delay between each key stroke for a "type test" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element">Element</a></code> | <code>string</code> | Element to use for the step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator">ElementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | element_user_locator block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email">Email</a></code> | <code>string</code> | Details of the email for an "assert email" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file">File</a></code> | <code>string</code> | For an "assert download" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files">Files</a></code> | <code>string</code> | Details of the files for an "upload files" step, json encoded string. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers">Modifiers</a></code> | <code>string[]</code> | Modifier to use for a "press key" step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId">PlayingTabId</a></code> | <code>string</code> | ID of the tab to play the subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request">Request</a></code> | <code>string</code> | Request for an API step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId">SubtestPublicId</a></code> | <code>string</code> | ID of the Synthetics test to use as subtest. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value">Value</a></code> | <code>string</code> | Value of the step. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick">WithClick</a></code> | <code>object</code> | For "file upload" steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x">X</a></code> | <code>double</code> | X coordinates for a "scroll step". |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y">Y</a></code> | <code>double</code> | Y coordinates for a "scroll step". |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Name of the attribute to use for an "assert attribute" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#attribute SyntheticsTest#attribute}

---

##### `Check`<sup>Optional</sup> <a name="Check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.check"></a>

```csharp
public string Check { get; set; }
```

- *Type:* string

Check type to use for an assertion step.

Valid values are `equals`, `notEquals`, `contains`, `notContains`, `startsWith`, `notStartsWith`, `greater`, `lower`, `greaterEquals`, `lowerEquals`, `matchRegex`, `between`, `isEmpty`, `notIsEmpty`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check SyntheticsTest#check}

---

##### `ClickType`<sup>Optional</sup> <a name="ClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.clickType"></a>

```csharp
public string ClickType { get; set; }
```

- *Type:* string

Type of click to use for a "click" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#click_type SyntheticsTest#click_type}

---

##### `Code`<sup>Optional</sup> <a name="Code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.code"></a>

```csharp
public string Code { get; set; }
```

- *Type:* string

Javascript code to use for the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#code SyntheticsTest#code}

---

##### `Delay`<sup>Optional</sup> <a name="Delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.delay"></a>

```csharp
public double Delay { get; set; }
```

- *Type:* double

Delay between each key stroke for a "type test" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#delay SyntheticsTest#delay}

---

##### `Element`<sup>Optional</sup> <a name="Element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.element"></a>

```csharp
public string Element { get; set; }
```

- *Type:* string

Element to use for the step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element SyntheticsTest#element}

---

##### `ElementUserLocator`<sup>Optional</sup> <a name="ElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.elementUserLocator"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocator ElementUserLocator { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

element_user_locator block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#element_user_locator SyntheticsTest#element_user_locator}

---

##### `Email`<sup>Optional</sup> <a name="Email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.email"></a>

```csharp
public string Email { get; set; }
```

- *Type:* string

Details of the email for an "assert email" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#email SyntheticsTest#email}

---

##### `File`<sup>Optional</sup> <a name="File" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.file"></a>

```csharp
public string File { get; set; }
```

- *Type:* string

For an "assert download" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#file SyntheticsTest#file}

---

##### `Files`<sup>Optional</sup> <a name="Files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.files"></a>

```csharp
public string Files { get; set; }
```

- *Type:* string

Details of the files for an "upload files" step, json encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#files SyntheticsTest#files}

---

##### `Modifiers`<sup>Optional</sup> <a name="Modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.modifiers"></a>

```csharp
public string[] Modifiers { get; set; }
```

- *Type:* string[]

Modifier to use for a "press key" step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#modifiers SyntheticsTest#modifiers}

---

##### `PlayingTabId`<sup>Optional</sup> <a name="PlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.playingTabId"></a>

```csharp
public string PlayingTabId { get; set; }
```

- *Type:* string

ID of the tab to play the subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#playing_tab_id SyntheticsTest#playing_tab_id}

---

##### `Request`<sup>Optional</sup> <a name="Request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.request"></a>

```csharp
public string Request { get; set; }
```

- *Type:* string

Request for an API step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request SyntheticsTest#request}

---

##### `SubtestPublicId`<sup>Optional</sup> <a name="SubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.subtestPublicId"></a>

```csharp
public string SubtestPublicId { get; set; }
```

- *Type:* string

ID of the Synthetics test to use as subtest.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtest_public_id SyntheticsTest#subtest_public_id}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value of the step.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `Variable`<sup>Optional</sup> <a name="Variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.variable"></a>

```csharp
public SyntheticsTestBrowserStepParamsVariable Variable { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#variable SyntheticsTest#variable}

---

##### `WithClick`<sup>Optional</sup> <a name="WithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.withClick"></a>

```csharp
public object WithClick { get; set; }
```

- *Type:* object

For "file upload" steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#with_click SyntheticsTest#with_click}

---

##### `X`<sup>Optional</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.x"></a>

```csharp
public double X { get; set; }
```

- *Type:* double

X coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#x SyntheticsTest#x}

---

##### `Y`<sup>Optional</sup> <a name="Y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams.property.y"></a>

```csharp
public double Y { get; set; }
```

- *Type:* double

Y coordinates for a "scroll step".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#y SyntheticsTest#y}

---

### SyntheticsTestBrowserStepParamsElementUserLocator <a name="SyntheticsTestBrowserStepParamsElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsElementUserLocator {
    SyntheticsTestBrowserStepParamsElementUserLocatorValue Value,
    object FailTestOnCannotLocate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value">Value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | value block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate">FailTestOnCannotLocate</a></code> | <code>object</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.value"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocatorValue Value { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

value block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}

---

##### `FailTestOnCannotLocate`<sup>Optional</sup> <a name="FailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator.property.failTestOnCannotLocate"></a>

```csharp
public object FailTestOnCannotLocate { get; set; }
```

- *Type:* object

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#fail_test_on_cannot_locate SyntheticsTest#fail_test_on_cannot_locate}.

---

### SyntheticsTestBrowserStepParamsElementUserLocatorValue <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsElementUserLocatorValue {
    string Value,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value">Value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type">Type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}. |

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#value SyntheticsTest#value}.

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}.

---

### SyntheticsTestBrowserStepParamsVariable <a name="SyntheticsTestBrowserStepParamsVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsVariable {
    string Example = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example">Example</a></code> | <code>string</code> | Example of the extracted variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name">Name</a></code> | <code>string</code> | Name of the extracted variable. |

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.example"></a>

```csharp
public string Example { get; set; }
```

- *Type:* string

Example of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the extracted variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

### SyntheticsTestBrowserVariable <a name="SyntheticsTestBrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserVariable {
    string Name,
    string Type,
    string Example = null,
    string Id = null,
    string Pattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name">Name</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type">Type</a></code> | <code>string</code> | Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example">Example</a></code> | <code>string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id">Id</a></code> | <code>string</code> | ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern">Pattern</a></code> | <code>string</code> | Pattern of the variable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of browser test variable. Valid values are `element`, `email`, `global`, `javascript`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.example"></a>

```csharp
public string Example { get; set; }
```

- *Type:* string

Example for the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

ID of the global variable to use.

This is actually only used (and required) in the case of using a variable of type `global`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariable.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Pattern of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

### SyntheticsTestConfig <a name="SyntheticsTestConfig" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestConfig {
    object Connection = null,
    double Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string[] Locations,
    string Name,
    string Status,
    string Type,
    object ApiStep = null,
    object Assertion = null,
    object BrowserStep = null,
    object BrowserVariable = null,
    object ConfigVariable = null,
    string[] DeviceIds = null,
    string Id = null,
    string Message = null,
    SyntheticsTestOptionsList OptionsList = null,
    SyntheticsTestRequestBasicauth RequestBasicauth = null,
    SyntheticsTestRequestClientCertificate RequestClientCertificate = null,
    SyntheticsTestRequestDefinition RequestDefinition = null,
    System.Collections.Generic.IDictionary<string, string> RequestHeaders = null,
    SyntheticsTestRequestProxy RequestProxy = null,
    System.Collections.Generic.IDictionary<string, string> RequestQuery = null,
    string SetCookie = null,
    string Subtype = null,
    string[] Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations">Locations</a></code> | <code>string[]</code> | Array of locations used to run the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name">Name</a></code> | <code>string</code> | Name of Datadog synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status">Status</a></code> | <code>string</code> | Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type">Type</a></code> | <code>string</code> | Synthetics test type. Valid values are `api`, `browser`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep">ApiStep</a></code> | <code>object</code> | api_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion">Assertion</a></code> | <code>object</code> | assertion block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep">BrowserStep</a></code> | <code>object</code> | browser_step block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable">BrowserVariable</a></code> | <code>object</code> | browser_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable">ConfigVariable</a></code> | <code>object</code> | config_variable block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds">DeviceIds</a></code> | <code>string[]</code> | Required if `type = "browser"`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message">Message</a></code> | <code>string</code> | A message to include with notifications for this synthetics test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList">OptionsList</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | options_list block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | request_basicauth block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | request_client_certificate block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | request_definition block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Header name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | request_proxy block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery">RequestQuery</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Query arguments name and value map. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie">SetCookie</a></code> | <code>string</code> | Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype">Subtype</a></code> | <code>string</code> | The subtype of the Synthetic API test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags">Tags</a></code> | <code>string[]</code> | A list of tags to associate with your synthetics test. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.locations"></a>

```csharp
public string[] Locations { get; set; }
```

- *Type:* string[]

Array of locations used to run the test.

Refer to [the Datadog Synthetics location data source](https://registry.terraform.io/providers/DataDog/datadog/latest/docs/data-sources/synthetics_locations) to retrieve the list of locations.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#locations SyntheticsTest#locations}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of Datadog synthetics test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.status"></a>

```csharp
public string Status { get; set; }
```

- *Type:* string

Define whether you want to start (`live`) or pause (`paused`) a Synthetic test. Valid values are `live`, `paused`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#status SyntheticsTest#status}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Synthetics test type. Valid values are `api`, `browser`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `ApiStep`<sup>Optional</sup> <a name="ApiStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.apiStep"></a>

```csharp
public object ApiStep { get; set; }
```

- *Type:* object

api_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#api_step SyntheticsTest#api_step}

---

##### `Assertion`<sup>Optional</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.assertion"></a>

```csharp
public object Assertion { get; set; }
```

- *Type:* object

assertion block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#assertion SyntheticsTest#assertion}

---

##### `BrowserStep`<sup>Optional</sup> <a name="BrowserStep" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserStep"></a>

```csharp
public object BrowserStep { get; set; }
```

- *Type:* object

browser_step block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_step SyntheticsTest#browser_step}

---

##### `BrowserVariable`<sup>Optional</sup> <a name="BrowserVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.browserVariable"></a>

```csharp
public object BrowserVariable { get; set; }
```

- *Type:* object

browser_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#browser_variable SyntheticsTest#browser_variable}

---

##### `ConfigVariable`<sup>Optional</sup> <a name="ConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.configVariable"></a>

```csharp
public object ConfigVariable { get; set; }
```

- *Type:* object

config_variable block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#config_variable SyntheticsTest#config_variable}

---

##### `DeviceIds`<sup>Optional</sup> <a name="DeviceIds" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.deviceIds"></a>

```csharp
public string[] DeviceIds { get; set; }
```

- *Type:* string[]

Required if `type = "browser"`.

Array with the different device IDs used to run the test. Valid values are `laptop_large`, `tablet`, `mobile_small`, `chrome.laptop_large`, `chrome.tablet`, `chrome.mobile_small`, `firefox.laptop_large`, `firefox.tablet`, `firefox.mobile_small`, `edge.laptop_large`, `edge.tablet`, `edge.mobile_small`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#device_ids SyntheticsTest#device_ids}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

A message to include with notifications for this synthetics test.

Email notifications can be sent to specific users by using the same `@username` notation as events.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `OptionsList`<sup>Optional</sup> <a name="OptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.optionsList"></a>

```csharp
public SyntheticsTestOptionsList OptionsList { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

options_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#options_list SyntheticsTest#options_list}

---

##### `RequestBasicauth`<sup>Optional</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestBasicauth"></a>

```csharp
public SyntheticsTestRequestBasicauth RequestBasicauth { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

request_basicauth block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_basicauth SyntheticsTest#request_basicauth}

---

##### `RequestClientCertificate`<sup>Optional</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestClientCertificate"></a>

```csharp
public SyntheticsTestRequestClientCertificate RequestClientCertificate { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

request_client_certificate block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_client_certificate SyntheticsTest#request_client_certificate}

---

##### `RequestDefinition`<sup>Optional</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestDefinition"></a>

```csharp
public SyntheticsTestRequestDefinition RequestDefinition { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

request_definition block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_definition SyntheticsTest#request_definition}

---

##### `RequestHeaders`<sup>Optional</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_headers SyntheticsTest#request_headers}

---

##### `RequestProxy`<sup>Optional</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestProxy"></a>

```csharp
public SyntheticsTestRequestProxy RequestProxy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

request_proxy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_proxy SyntheticsTest#request_proxy}

---

##### `RequestQuery`<sup>Optional</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.requestQuery"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQuery { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Query arguments name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#request_query SyntheticsTest#request_query}

---

##### `SetCookie`<sup>Optional</sup> <a name="SetCookie" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.setCookie"></a>

```csharp
public string SetCookie { get; set; }
```

- *Type:* string

Cookies to be used for a browser test request, using the [Set-Cookie](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie) syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#set_cookie SyntheticsTest#set_cookie}

---

##### `Subtype`<sup>Optional</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.subtype"></a>

```csharp
public string Subtype { get; set; }
```

- *Type:* string

The subtype of the Synthetic API test.

Defaults to `http`. Valid values are `http`, `ssl`, `tcp`, `dns`, `multi`, `icmp`, `udp`, `websocket`, `grpc`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#subtype SyntheticsTest#subtype}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfig.property.tags"></a>

```csharp
public string[] Tags { get; set; }
```

- *Type:* string[]

A list of tags to associate with your synthetics test.

This can help you categorize and filter tests in the manage synthetics page of the UI. Default is an empty list (`[]`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tags SyntheticsTest#tags}

---

### SyntheticsTestConfigVariable <a name="SyntheticsTestConfigVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestConfigVariable {
    string Name,
    string Type,
    string Example = null,
    string Id = null,
    string Pattern = null,
    object Secure = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name">Name</a></code> | <code>string</code> | Name of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type">Type</a></code> | <code>string</code> | Type of test configuration variable. Valid values are `global`, `text`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example">Example</a></code> | <code>string</code> | Example for the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id">Id</a></code> | <code>string</code> | When type = `global`, ID of the global variable to use. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern">Pattern</a></code> | <code>string</code> | Pattern of the variable. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure">Secure</a></code> | <code>object</code> | Whether the value of this variable will be obfuscated in test results. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the variable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#name SyntheticsTest#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of test configuration variable. Valid values are `global`, `text`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Example`<sup>Optional</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.example"></a>

```csharp
public string Example { get; set; }
```

- *Type:* string

Example for the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#example SyntheticsTest#example}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

When type = `global`, ID of the global variable to use.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#id SyntheticsTest#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Pattern`<sup>Optional</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.pattern"></a>

```csharp
public string Pattern { get; set; }
```

- *Type:* string

Pattern of the variable.

This value is not returned by the api when `secure = true`. Avoid drift by only making updates to this value from within Terraform.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#pattern SyntheticsTest#pattern}

---

##### `Secure`<sup>Optional</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariable.property.secure"></a>

```csharp
public object Secure { get; set; }
```

- *Type:* object

Whether the value of this variable will be obfuscated in test results.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secure SyntheticsTest#secure}

---

### SyntheticsTestOptionsList <a name="SyntheticsTestOptionsList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsList {
    double TickEvery,
    object AcceptSelfSigned = null,
    object AllowInsecure = null,
    object CheckCertificateRevocation = null,
    SyntheticsTestOptionsListCi Ci = null,
    object DisableCors = null,
    object DisableCsp = null,
    object FollowRedirects = null,
    string HttpVersion = null,
    object IgnoreServerCertificateError = null,
    double InitialNavigationTimeout = null,
    double MinFailureDuration = null,
    double MinLocationFailed = null,
    string MonitorName = null,
    SyntheticsTestOptionsListMonitorOptions MonitorOptions = null,
    double MonitorPriority = null,
    object NoScreenshot = null,
    string[] RestrictedRoles = null,
    SyntheticsTestOptionsListRetry Retry = null,
    SyntheticsTestOptionsListRumSettings RumSettings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery">TickEvery</a></code> | <code>double</code> | How often the test should run (in seconds). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned">AcceptSelfSigned</a></code> | <code>object</code> | For SSL test, whether or not the test should allow self signed certificates. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | Allows loading insecure content for an HTTP test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation">CheckCertificateRevocation</a></code> | <code>object</code> | For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci">Ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | ci block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors">DisableCors</a></code> | <code>object</code> | Disable Cross-Origin Resource Sharing for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp">DisableCsp</a></code> | <code>object</code> | Disable Content Security Policy for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | Determines whether or not the API HTTP test should follow redirects. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion">HttpVersion</a></code> | <code>string</code> | HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError">IgnoreServerCertificateError</a></code> | <code>object</code> | Ignore server certificate error. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout">InitialNavigationTimeout</a></code> | <code>double</code> | Timeout before declaring the initial step as failed (in seconds) for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration">MinFailureDuration</a></code> | <code>double</code> | Minimum amount of time in failure required to trigger an alert. Default is `0`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed">MinLocationFailed</a></code> | <code>double</code> | Minimum number of locations in failure required to trigger an alert. Default is `1`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName">MonitorName</a></code> | <code>string</code> | The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | monitor_options block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority">MonitorPriority</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot">NoScreenshot</a></code> | <code>object</code> | Prevents saving screenshots of the steps. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | A list of role identifiers pulled from the Roles API to restrict read and write access. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | retry block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings">RumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | rum_settings block. |

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.tickEvery"></a>

```csharp
public double TickEvery { get; set; }
```

- *Type:* double

How often the test should run (in seconds).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#tick_every SyntheticsTest#tick_every}

---

##### `AcceptSelfSigned`<sup>Optional</sup> <a name="AcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.acceptSelfSigned"></a>

```csharp
public object AcceptSelfSigned { get; set; }
```

- *Type:* object

For SSL test, whether or not the test should allow self signed certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#accept_self_signed SyntheticsTest#accept_self_signed}

---

##### `AllowInsecure`<sup>Optional</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; set; }
```

- *Type:* object

Allows loading insecure content for an HTTP test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#allow_insecure SyntheticsTest#allow_insecure}

---

##### `CheckCertificateRevocation`<sup>Optional</sup> <a name="CheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.checkCertificateRevocation"></a>

```csharp
public object CheckCertificateRevocation { get; set; }
```

- *Type:* object

For SSL test, whether or not the test should fail on revoked certificate in stapled OCSP.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#check_certificate_revocation SyntheticsTest#check_certificate_revocation}

---

##### `Ci`<sup>Optional</sup> <a name="Ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ci"></a>

```csharp
public SyntheticsTestOptionsListCi Ci { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

ci block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ci SyntheticsTest#ci}

---

##### `DisableCors`<sup>Optional</sup> <a name="DisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCors"></a>

```csharp
public object DisableCors { get; set; }
```

- *Type:* object

Disable Cross-Origin Resource Sharing for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_cors SyntheticsTest#disable_cors}

---

##### `DisableCsp`<sup>Optional</sup> <a name="DisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.disableCsp"></a>

```csharp
public object DisableCsp { get; set; }
```

- *Type:* object

Disable Content Security Policy for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#disable_csp SyntheticsTest#disable_csp}

---

##### `FollowRedirects`<sup>Optional</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; set; }
```

- *Type:* object

Determines whether or not the API HTTP test should follow redirects.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#follow_redirects SyntheticsTest#follow_redirects}

---

##### `HttpVersion`<sup>Optional</sup> <a name="HttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.httpVersion"></a>

```csharp
public string HttpVersion { get; set; }
```

- *Type:* string

HTTP version to use for a Synthetics API test. Valid values are `http1`, `http2`, `any`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#http_version SyntheticsTest#http_version}

---

##### `IgnoreServerCertificateError`<sup>Optional</sup> <a name="IgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.ignoreServerCertificateError"></a>

```csharp
public object IgnoreServerCertificateError { get; set; }
```

- *Type:* object

Ignore server certificate error.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#ignore_server_certificate_error SyntheticsTest#ignore_server_certificate_error}

---

##### `InitialNavigationTimeout`<sup>Optional</sup> <a name="InitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.initialNavigationTimeout"></a>

```csharp
public double InitialNavigationTimeout { get; set; }
```

- *Type:* double

Timeout before declaring the initial step as failed (in seconds) for browser tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#initial_navigation_timeout SyntheticsTest#initial_navigation_timeout}

---

##### `MinFailureDuration`<sup>Optional</sup> <a name="MinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minFailureDuration"></a>

```csharp
public double MinFailureDuration { get; set; }
```

- *Type:* double

Minimum amount of time in failure required to trigger an alert. Default is `0`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_failure_duration SyntheticsTest#min_failure_duration}

---

##### `MinLocationFailed`<sup>Optional</sup> <a name="MinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.minLocationFailed"></a>

```csharp
public double MinLocationFailed { get; set; }
```

- *Type:* double

Minimum number of locations in failure required to trigger an alert. Default is `1`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#min_location_failed SyntheticsTest#min_location_failed}

---

##### `MonitorName`<sup>Optional</sup> <a name="MonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorName"></a>

```csharp
public string MonitorName { get; set; }
```

- *Type:* string

The monitor name is used for the alert title as well as for all monitor dashboard widgets and SLOs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_name SyntheticsTest#monitor_name}

---

##### `MonitorOptions`<sup>Optional</sup> <a name="MonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorOptions"></a>

```csharp
public SyntheticsTestOptionsListMonitorOptions MonitorOptions { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

monitor_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_options SyntheticsTest#monitor_options}

---

##### `MonitorPriority`<sup>Optional</sup> <a name="MonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.monitorPriority"></a>

```csharp
public double MonitorPriority { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#monitor_priority SyntheticsTest#monitor_priority}.

---

##### `NoScreenshot`<sup>Optional</sup> <a name="NoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.noScreenshot"></a>

```csharp
public object NoScreenshot { get; set; }
```

- *Type:* object

Prevents saving screenshots of the steps.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_screenshot SyntheticsTest#no_screenshot}

---

##### `RestrictedRoles`<sup>Optional</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; set; }
```

- *Type:* string[]

A list of role identifiers pulled from the Roles API to restrict read and write access.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#restricted_roles SyntheticsTest#restricted_roles}

---

##### `Retry`<sup>Optional</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.retry"></a>

```csharp
public SyntheticsTestOptionsListRetry Retry { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

retry block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#retry SyntheticsTest#retry}

---

##### `RumSettings`<sup>Optional</sup> <a name="RumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList.property.rumSettings"></a>

```csharp
public SyntheticsTestOptionsListRumSettings RumSettings { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

rum_settings block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#rum_settings SyntheticsTest#rum_settings}

---

### SyntheticsTestOptionsListCi <a name="SyntheticsTestOptionsListCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListCi {
    string ExecutionRule = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule">ExecutionRule</a></code> | <code>string</code> | Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`. |

---

##### `ExecutionRule`<sup>Optional</sup> <a name="ExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi.property.executionRule"></a>

```csharp
public string ExecutionRule { get; set; }
```

- *Type:* string

Execution rule for a Synthetics test. Valid values are `blocking`, `non_blocking`, `skipped`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#execution_rule SyntheticsTest#execution_rule}

---

### SyntheticsTestOptionsListMonitorOptions <a name="SyntheticsTestOptionsListMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListMonitorOptions {
    double RenotifyInterval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | Specify a renotification frequency. |

---

##### `RenotifyInterval`<sup>Optional</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; set; }
```

- *Type:* double

Specify a renotification frequency.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#renotify_interval SyntheticsTest#renotify_interval}

---

### SyntheticsTestOptionsListRetry <a name="SyntheticsTestOptionsListRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListRetry {
    double Count = null,
    double Interval = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count">Count</a></code> | <code>double</code> | Number of retries needed to consider a location as failed before sending a notification alert. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval">Interval</a></code> | <code>double</code> | Interval between a failed test and the next retry in milliseconds. |

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

Number of retries needed to consider a location as failed before sending a notification alert.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#count SyntheticsTest#count}

---

##### `Interval`<sup>Optional</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry.property.interval"></a>

```csharp
public double Interval { get; set; }
```

- *Type:* double

Interval between a failed test and the next retry in milliseconds.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#interval SyntheticsTest#interval}

---

### SyntheticsTestOptionsListRumSettings <a name="SyntheticsTestOptionsListRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListRumSettings {
    object IsEnabled,
    string ApplicationId = null,
    double ClientTokenId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled">IsEnabled</a></code> | <code>object</code> | Determines whether RUM data is collected during test runs. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId">ApplicationId</a></code> | <code>string</code> | RUM application ID used to collect RUM data for the browser test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId">ClientTokenId</a></code> | <code>double</code> | RUM application API key ID used to collect RUM data for the browser test. |

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.isEnabled"></a>

```csharp
public object IsEnabled { get; set; }
```

- *Type:* object

Determines whether RUM data is collected during test runs.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#is_enabled SyntheticsTest#is_enabled}

---

##### `ApplicationId`<sup>Optional</sup> <a name="ApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.applicationId"></a>

```csharp
public string ApplicationId { get; set; }
```

- *Type:* string

RUM application ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#application_id SyntheticsTest#application_id}

---

##### `ClientTokenId`<sup>Optional</sup> <a name="ClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings.property.clientTokenId"></a>

```csharp
public double ClientTokenId { get; set; }
```

- *Type:* double

RUM application API key ID used to collect RUM data for the browser test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_token_id SyntheticsTest#client_token_id}

---

### SyntheticsTestRequestBasicauth <a name="SyntheticsTestRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestBasicauth {
    string AccessKey = null,
    string AccessTokenUrl = null,
    string Audience = null,
    string ClientId = null,
    string ClientSecret = null,
    string Domain = null,
    string Password = null,
    string Region = null,
    string Resource = null,
    string Scope = null,
    string SecretKey = null,
    string ServiceName = null,
    string SessionToken = null,
    string TokenApiAuthentication = null,
    string Type = null,
    string Username = null,
    string Workstation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey">AccessKey</a></code> | <code>string</code> | Access key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | Access token url for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience">Audience</a></code> | <code>string</code> | Audience for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId">ClientId</a></code> | <code>string</code> | Client ID for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret">ClientSecret</a></code> | <code>string</code> | Client secret for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain">Domain</a></code> | <code>string</code> | Domain for `ntlm` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password">Password</a></code> | <code>string</code> | Password for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region">Region</a></code> | <code>string</code> | Region for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource">Resource</a></code> | <code>string</code> | Resource for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope">Scope</a></code> | <code>string</code> | Scope for `oauth-client` or `oauth-rop` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey">SecretKey</a></code> | <code>string</code> | Secret key for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName">ServiceName</a></code> | <code>string</code> | Service name for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken">SessionToken</a></code> | <code>string</code> | Session token for `SIGV4` authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>string</code> | Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type">Type</a></code> | <code>string</code> | Type of basic authentication to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username">Username</a></code> | <code>string</code> | Username for authentication. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation">Workstation</a></code> | <code>string</code> | Workstation for `ntlm` authentication. |

---

##### `AccessKey`<sup>Optional</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessKey"></a>

```csharp
public string AccessKey { get; set; }
```

- *Type:* string

Access key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_key SyntheticsTest#access_key}

---

##### `AccessTokenUrl`<sup>Optional</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; set; }
```

- *Type:* string

Access token url for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#access_token_url SyntheticsTest#access_token_url}

---

##### `Audience`<sup>Optional</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.audience"></a>

```csharp
public string Audience { get; set; }
```

- *Type:* string

Audience for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#audience SyntheticsTest#audience}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

Client ID for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_id SyntheticsTest#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

Client secret for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#client_secret SyntheticsTest#client_secret}

---

##### `Domain`<sup>Optional</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Domain for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#domain SyntheticsTest#domain}

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Password for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#password SyntheticsTest#password}

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

Region for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#region SyntheticsTest#region}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.resource"></a>

```csharp
public string Resource { get; set; }
```

- *Type:* string

Resource for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#resource SyntheticsTest#resource}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.scope"></a>

```csharp
public string Scope { get; set; }
```

- *Type:* string

Scope for `oauth-client` or `oauth-rop` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#scope SyntheticsTest#scope}

---

##### `SecretKey`<sup>Optional</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.secretKey"></a>

```csharp
public string SecretKey { get; set; }
```

- *Type:* string

Secret key for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#secret_key SyntheticsTest#secret_key}

---

##### `ServiceName`<sup>Optional</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.serviceName"></a>

```csharp
public string ServiceName { get; set; }
```

- *Type:* string

Service name for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service_name SyntheticsTest#service_name}

---

##### `SessionToken`<sup>Optional</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.sessionToken"></a>

```csharp
public string SessionToken { get; set; }
```

- *Type:* string

Session token for `SIGV4` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#session_token SyntheticsTest#session_token}

---

##### `TokenApiAuthentication`<sup>Optional</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.tokenApiAuthentication"></a>

```csharp
public string TokenApiAuthentication { get; set; }
```

- *Type:* string

Token API Authentication for `oauth-client` or `oauth-rop` authentication. Valid values are `header`, `body`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#token_api_authentication SyntheticsTest#token_api_authentication}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Type of basic authentication to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#type SyntheticsTest#type}

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.username"></a>

```csharp
public string Username { get; set; }
```

- *Type:* string

Username for authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#username SyntheticsTest#username}

---

##### `Workstation`<sup>Optional</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth.property.workstation"></a>

```csharp
public string Workstation { get; set; }
```

- *Type:* string

Workstation for `ntlm` authentication.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#workstation SyntheticsTest#workstation}

---

### SyntheticsTestRequestClientCertificate <a name="SyntheticsTestRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificate {
    SyntheticsTestRequestClientCertificateCert Cert,
    SyntheticsTestRequestClientCertificateKey Key
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | cert block. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | key block. |

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.cert"></a>

```csharp
public SyntheticsTestRequestClientCertificateCert Cert { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

cert block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#cert SyntheticsTest#cert}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate.property.key"></a>

```csharp
public SyntheticsTestRequestClientCertificateKey Key { get; set; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

key block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#key SyntheticsTest#key}

---

### SyntheticsTestRequestClientCertificateCert <a name="SyntheticsTestRequestClientCertificateCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificateCert {
    string Content,
    string Filename = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content">Content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename">Filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestClientCertificateKey <a name="SyntheticsTestRequestClientCertificateKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificateKey {
    string Content,
    string Filename = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content">Content</a></code> | <code>string</code> | Content of the certificate. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename">Filename</a></code> | <code>string</code> | File name for the certificate. |

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Content of the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#content SyntheticsTest#content}

---

##### `Filename`<sup>Optional</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey.property.filename"></a>

```csharp
public string Filename { get; set; }
```

- *Type:* string

File name for the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#filename SyntheticsTest#filename}

---

### SyntheticsTestRequestDefinition <a name="SyntheticsTestRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestDefinition {
    string Body = null,
    string BodyType = null,
    string CallType = null,
    string[] CertificateDomains = null,
    string DnsServer = null,
    double DnsServerPort = null,
    string Host = null,
    string Message = null,
    string Method = null,
    object NoSavingResponseBody = null,
    double NumberOfPackets = null,
    double Port = null,
    string Servername = null,
    string Service = null,
    object ShouldTrackHops = null,
    double Timeout = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body">Body</a></code> | <code>string</code> | The request body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType">BodyType</a></code> | <code>string</code> | Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType">CallType</a></code> | <code>string</code> | The type of gRPC call to perform. Valid values are `healthcheck`, `unary`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains">CertificateDomains</a></code> | <code>string[]</code> | By default, the client certificate is applied on the domain of the starting URL for browser tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer">DnsServer</a></code> | <code>string</code> | DNS server to use for DNS tests (`subtype = "dns"`). |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort">DnsServerPort</a></code> | <code>double</code> | DNS server port to use for DNS tests. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host">Host</a></code> | <code>string</code> | Host name to perform the test with. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message">Message</a></code> | <code>string</code> | For UDP and websocket tests, message to send with the request. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method">Method</a></code> | <code>string</code> | Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>object</code> | Determines whether or not to save the response body. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets">NumberOfPackets</a></code> | <code>double</code> | Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port">Port</a></code> | <code>double</code> | Port to use when performing the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername">Servername</a></code> | <code>string</code> | For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service">Service</a></code> | <code>string</code> | The gRPC service on which you want to perform the gRPC call. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>object</code> | This will turn on a traceroute probe to discover all gateways along the path to the host destination. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout">Timeout</a></code> | <code>double</code> | Timeout in seconds for the test. Defaults to `60`. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url">Url</a></code> | <code>string</code> | The URL to send the request to. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.body"></a>

```csharp
public string Body { get; set; }
```

- *Type:* string

The request body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body SyntheticsTest#body}

---

##### `BodyType`<sup>Optional</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.bodyType"></a>

```csharp
public string BodyType { get; set; }
```

- *Type:* string

Type of the request body. Valid values are `text/plain`, `application/json`, `text/xml`, `text/html`, `application/x-www-form-urlencoded`, `graphql`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#body_type SyntheticsTest#body_type}

---

##### `CallType`<sup>Optional</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.callType"></a>

```csharp
public string CallType { get; set; }
```

- *Type:* string

The type of gRPC call to perform. Valid values are `healthcheck`, `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#call_type SyntheticsTest#call_type}

---

##### `CertificateDomains`<sup>Optional</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.certificateDomains"></a>

```csharp
public string[] CertificateDomains { get; set; }
```

- *Type:* string[]

By default, the client certificate is applied on the domain of the starting URL for browser tests.

If you want your client certificate to be applied on other domains instead, add them in `certificate_domains`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#certificate_domains SyntheticsTest#certificate_domains}

---

##### `DnsServer`<sup>Optional</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServer"></a>

```csharp
public string DnsServer { get; set; }
```

- *Type:* string

DNS server to use for DNS tests (`subtype = "dns"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server SyntheticsTest#dns_server}

---

##### `DnsServerPort`<sup>Optional</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.dnsServerPort"></a>

```csharp
public double DnsServerPort { get; set; }
```

- *Type:* double

DNS server port to use for DNS tests.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#dns_server_port SyntheticsTest#dns_server_port}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Host name to perform the test with.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#host SyntheticsTest#host}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.message"></a>

```csharp
public string Message { get; set; }
```

- *Type:* string

For UDP and websocket tests, message to send with the request.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#message SyntheticsTest#message}

---

##### `Method`<sup>Optional</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.method"></a>

```csharp
public string Method { get; set; }
```

- *Type:* string

Either the HTTP method/verb to use or a gRPC method available on the service set in the `service` field.

Required if `subtype` is `HTTP` or if `subtype` is `grpc` and `callType` is `unary`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#method SyntheticsTest#method}

---

##### `NoSavingResponseBody`<sup>Optional</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.noSavingResponseBody"></a>

```csharp
public object NoSavingResponseBody { get; set; }
```

- *Type:* object

Determines whether or not to save the response body.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#no_saving_response_body SyntheticsTest#no_saving_response_body}

---

##### `NumberOfPackets`<sup>Optional</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.numberOfPackets"></a>

```csharp
public double NumberOfPackets { get; set; }
```

- *Type:* double

Number of pings to use per test for ICMP tests (`subtype = "icmp"`) between 0 and 10.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#number_of_packets SyntheticsTest#number_of_packets}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Port to use when performing the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#port SyntheticsTest#port}

---

##### `Servername`<sup>Optional</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.servername"></a>

```csharp
public string Servername { get; set; }
```

- *Type:* string

For SSL tests, it specifies on which server you want to initiate the TLS handshake, allowing the server to present one of multiple possible certificates on the same IP address and TCP port number.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#servername SyntheticsTest#servername}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

The gRPC service on which you want to perform the gRPC call.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#service SyntheticsTest#service}

---

##### `ShouldTrackHops`<sup>Optional</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.shouldTrackHops"></a>

```csharp
public object ShouldTrackHops { get; set; }
```

- *Type:* object

This will turn on a traceroute probe to discover all gateways along the path to the host destination.

For ICMP tests (`subtype = "icmp"`).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#should_track_hops SyntheticsTest#should_track_hops}

---

##### `Timeout`<sup>Optional</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.timeout"></a>

```csharp
public double Timeout { get; set; }
```

- *Type:* double

Timeout in seconds for the test. Defaults to `60`.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#timeout SyntheticsTest#timeout}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

The URL to send the request to.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

### SyntheticsTestRequestProxy <a name="SyntheticsTestRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestProxy {
    string Url,
    System.Collections.Generic.IDictionary<string, string> Headers = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url">Url</a></code> | <code>string</code> | URL of the proxy to perform the test. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Header name and value map. |

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the proxy to perform the test.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#url SyntheticsTest#url}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Header name and value map.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/datadog/r/synthetics_test#headers SyntheticsTest#headers}

---

## Classes <a name="Classes" id="Classes"></a>

### SyntheticsTestApiStepAssertionList <a name="SyntheticsTestApiStepAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get"></a>

```csharp
private SyntheticsTestApiStepAssertionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepAssertionOutputReference <a name="SyntheticsTestApiStepAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath">PutTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath">PutTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath">ResetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath">ResetTargetxpath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetjsonpath` <a name="PutTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath"></a>

```csharp
private void PutTargetjsonpath(SyntheticsTestApiStepAssertionTargetjsonpath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `PutTargetxpath` <a name="PutTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath"></a>

```csharp
private void PutTargetxpath(SyntheticsTestApiStepAssertionTargetxpath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetProperty"></a>

```csharp
private void ResetProperty()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTargetjsonpath` <a name="ResetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetjsonpath"></a>

```csharp
private void ResetTargetjsonpath()
```

##### `ResetTargetxpath` <a name="ResetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.resetTargetxpath"></a>

```csharp
private void ResetTargetxpath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput">PropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput">TargetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput">TargetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property">Property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targetjsonpath`<sup>Required</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpath"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetjsonpathOutputReference Targetjsonpath { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference">SyntheticsTestApiStepAssertionTargetjsonpathOutputReference</a>

---

##### `Targetxpath`<sup>Required</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpath"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetxpathOutputReference Targetxpath { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference">SyntheticsTestApiStepAssertionTargetxpathOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.propertyInput"></a>

```csharp
public string PropertyInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TargetjsonpathInput`<sup>Optional</sup> <a name="TargetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetjsonpathInput"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetjsonpath TargetjsonpathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---

##### `TargetxpathInput`<sup>Optional</sup> <a name="TargetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.targetxpathInput"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetxpath TargetxpathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.property"></a>

```csharp
public string Property { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepAssertionTargetjsonpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionTargetjsonpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput">JsonpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath">Jsonpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonpathInput`<sup>Optional</sup> <a name="JsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```csharp
public string JsonpathInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```csharp
public string TargetvalueInput { get; }
```

- *Type:* string

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```csharp
public string Jsonpath { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```csharp
public string Targetvalue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetjsonpath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetjsonpath">SyntheticsTestApiStepAssertionTargetjsonpath</a>

---


### SyntheticsTestApiStepAssertionTargetxpathOutputReference <a name="SyntheticsTestApiStepAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepAssertionTargetxpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput">XpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath">Xpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```csharp
public string TargetvalueInput { get; }
```

- *Type:* string

---

##### `XpathInput`<sup>Optional</sup> <a name="XpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpathInput"></a>

```csharp
public string XpathInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.targetvalue"></a>

```csharp
public string Targetvalue { get; }
```

- *Type:* string

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.xpath"></a>

```csharp
public string Xpath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpathOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepAssertionTargetxpath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionTargetxpath">SyntheticsTestApiStepAssertionTargetxpath</a>

---


### SyntheticsTestApiStepExtractedValueList <a name="SyntheticsTestApiStepExtractedValueList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepExtractedValueList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get"></a>

```csharp
private SyntheticsTestApiStepExtractedValueOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepExtractedValueOutputReference <a name="SyntheticsTestApiStepExtractedValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepExtractedValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser">PutParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParser` <a name="PutParser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser"></a>

```csharp
private void PutParser(SyntheticsTestApiStepExtractedValueParser Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.putParser.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.resetField"></a>

```csharp
private void ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser">Parser</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput">FieldInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput">ParserInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field">Field</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Parser`<sup>Required</sup> <a name="Parser" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parser"></a>

```csharp
public SyntheticsTestApiStepExtractedValueParserOutputReference Parser { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference">SyntheticsTestApiStepExtractedValueParserOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.fieldInput"></a>

```csharp
public string FieldInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParserInput`<sup>Optional</sup> <a name="ParserInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.parserInput"></a>

```csharp
public SyntheticsTestApiStepExtractedValueParser ParserInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.field"></a>

```csharp
public string Field { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepExtractedValueParserOutputReference <a name="SyntheticsTestApiStepExtractedValueParserOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepExtractedValueParserOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParserOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepExtractedValueParser InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueParser">SyntheticsTestApiStepExtractedValueParser</a>

---


### SyntheticsTestApiStepList <a name="SyntheticsTestApiStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get"></a>

```csharp
private SyntheticsTestApiStepOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepOutputReference <a name="SyntheticsTestApiStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion">PutAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue">PutExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth">PutRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate">PutRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition">PutRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy">PutRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion">ResetAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue">ResetExtractedValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical">ResetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth">ResetRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate">ResetRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition">ResetRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders">ResetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy">ResetRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery">ResetRequestQuery</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype">ResetSubtype</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAssertion` <a name="PutAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion"></a>

```csharp
private void PutAssertion(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putAssertion.parameter.value"></a>

- *Type:* object

---

##### `PutExtractedValue` <a name="PutExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue"></a>

```csharp
private void PutExtractedValue(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putExtractedValue.parameter.value"></a>

- *Type:* object

---

##### `PutRequestBasicauth` <a name="PutRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth"></a>

```csharp
private void PutRequestBasicauth(SyntheticsTestApiStepRequestBasicauth Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestBasicauth.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `PutRequestClientCertificate` <a name="PutRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate"></a>

```csharp
private void PutRequestClientCertificate(SyntheticsTestApiStepRequestClientCertificate Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestClientCertificate.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `PutRequestDefinition` <a name="PutRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition"></a>

```csharp
private void PutRequestDefinition(SyntheticsTestApiStepRequestDefinition Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestDefinition.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `PutRequestProxy` <a name="PutRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy"></a>

```csharp
private void PutRequestProxy(SyntheticsTestApiStepRequestProxy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRequestProxy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry"></a>

```csharp
private void PutRetry(SyntheticsTestApiStepRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAllowFailure"></a>

```csharp
private void ResetAllowFailure()
```

##### `ResetAssertion` <a name="ResetAssertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetAssertion"></a>

```csharp
private void ResetAssertion()
```

##### `ResetExtractedValue` <a name="ResetExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetExtractedValue"></a>

```csharp
private void ResetExtractedValue()
```

##### `ResetIsCritical` <a name="ResetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetIsCritical"></a>

```csharp
private void ResetIsCritical()
```

##### `ResetRequestBasicauth` <a name="ResetRequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestBasicauth"></a>

```csharp
private void ResetRequestBasicauth()
```

##### `ResetRequestClientCertificate` <a name="ResetRequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestClientCertificate"></a>

```csharp
private void ResetRequestClientCertificate()
```

##### `ResetRequestDefinition` <a name="ResetRequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestDefinition"></a>

```csharp
private void ResetRequestDefinition()
```

##### `ResetRequestHeaders` <a name="ResetRequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestHeaders"></a>

```csharp
private void ResetRequestHeaders()
```

##### `ResetRequestProxy` <a name="ResetRequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestProxy"></a>

```csharp
private void ResetRequestProxy()
```

##### `ResetRequestQuery` <a name="ResetRequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRequestQuery"></a>

```csharp
private void ResetRequestQuery()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetSubtype` <a name="ResetSubtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.resetSubtype"></a>

```csharp
private void ResetSubtype()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion">Assertion</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue">ExtractedValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth">RequestBasicauth</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate">RequestClientCertificate</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition">RequestDefinition</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy">RequestProxy</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput">AssertionInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput">ExtractedValueInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput">IsCriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput">RequestBasicauthInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput">RequestClientCertificateInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput">RequestDefinitionInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput">RequestHeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput">RequestProxyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput">RequestQueryInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput">SubtypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical">IsCritical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders">RequestHeaders</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery">RequestQuery</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype">Subtype</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Assertion`<sup>Required</sup> <a name="Assertion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertion"></a>

```csharp
public SyntheticsTestApiStepAssertionList Assertion { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepAssertionList">SyntheticsTestApiStepAssertionList</a>

---

##### `ExtractedValue`<sup>Required</sup> <a name="ExtractedValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValue"></a>

```csharp
public SyntheticsTestApiStepExtractedValueList ExtractedValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepExtractedValueList">SyntheticsTestApiStepExtractedValueList</a>

---

##### `RequestBasicauth`<sup>Required</sup> <a name="RequestBasicauth" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauth"></a>

```csharp
public SyntheticsTestApiStepRequestBasicauthOutputReference RequestBasicauth { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference">SyntheticsTestApiStepRequestBasicauthOutputReference</a>

---

##### `RequestClientCertificate`<sup>Required</sup> <a name="RequestClientCertificate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificate"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateOutputReference RequestClientCertificate { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference">SyntheticsTestApiStepRequestClientCertificateOutputReference</a>

---

##### `RequestDefinition`<sup>Required</sup> <a name="RequestDefinition" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinition"></a>

```csharp
public SyntheticsTestApiStepRequestDefinitionOutputReference RequestDefinition { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference">SyntheticsTestApiStepRequestDefinitionOutputReference</a>

---

##### `RequestProxy`<sup>Required</sup> <a name="RequestProxy" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxy"></a>

```csharp
public SyntheticsTestApiStepRequestProxyOutputReference RequestProxy { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference">SyntheticsTestApiStepRequestProxyOutputReference</a>

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retry"></a>

```csharp
public SyntheticsTestApiStepRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference">SyntheticsTestApiStepRetryOutputReference</a>

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailureInput"></a>

```csharp
public object AllowFailureInput { get; }
```

- *Type:* object

---

##### `AssertionInput`<sup>Optional</sup> <a name="AssertionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.assertionInput"></a>

```csharp
public object AssertionInput { get; }
```

- *Type:* object

---

##### `ExtractedValueInput`<sup>Optional</sup> <a name="ExtractedValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.extractedValueInput"></a>

```csharp
public object ExtractedValueInput { get; }
```

- *Type:* object

---

##### `IsCriticalInput`<sup>Optional</sup> <a name="IsCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCriticalInput"></a>

```csharp
public object IsCriticalInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequestBasicauthInput`<sup>Optional</sup> <a name="RequestBasicauthInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestBasicauthInput"></a>

```csharp
public SyntheticsTestApiStepRequestBasicauth RequestBasicauthInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---

##### `RequestClientCertificateInput`<sup>Optional</sup> <a name="RequestClientCertificateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestClientCertificateInput"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificate RequestClientCertificateInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---

##### `RequestDefinitionInput`<sup>Optional</sup> <a name="RequestDefinitionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestDefinitionInput"></a>

```csharp
public SyntheticsTestApiStepRequestDefinition RequestDefinitionInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---

##### `RequestHeadersInput`<sup>Optional</sup> <a name="RequestHeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeadersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestProxyInput`<sup>Optional</sup> <a name="RequestProxyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestProxyInput"></a>

```csharp
public SyntheticsTestApiStepRequestProxy RequestProxyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---

##### `RequestQueryInput`<sup>Optional</sup> <a name="RequestQueryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQueryInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQueryInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.retryInput"></a>

```csharp
public SyntheticsTestApiStepRetry RetryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---

##### `SubtypeInput`<sup>Optional</sup> <a name="SubtypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtypeInput"></a>

```csharp
public string SubtypeInput { get; }
```

- *Type:* string

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.allowFailure"></a>

```csharp
public object AllowFailure { get; }
```

- *Type:* object

---

##### `IsCritical`<sup>Required</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.isCritical"></a>

```csharp
public object IsCritical { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `RequestHeaders`<sup>Required</sup> <a name="RequestHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestHeaders"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestHeaders { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `RequestQuery`<sup>Required</sup> <a name="RequestQuery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.requestQuery"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> RequestQuery { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Subtype`<sup>Required</sup> <a name="Subtype" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.subtype"></a>

```csharp
public string Subtype { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestApiStepRequestBasicauthOutputReference <a name="SyntheticsTestApiStepRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestBasicauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken">ResetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication">ResetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation">ResetWorkstation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```csharp
private void ResetAccessTokenUrl()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetSessionToken` <a name="ResetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetSessionToken"></a>

```csharp
private void ResetSessionToken()
```

##### `ResetTokenApiAuthentication` <a name="ResetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```csharp
private void ResetTokenApiAuthentication()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWorkstation` <a name="ResetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.resetWorkstation"></a>

```csharp
private void ResetWorkstation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput">SessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">TokenApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput">WorkstationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken">SessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation">Workstation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```csharp
public string AccessTokenUrlInput { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SessionTokenInput`<sup>Optional</sup> <a name="SessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```csharp
public string SessionTokenInput { get; }
```

- *Type:* string

---

##### `TokenApiAuthenticationInput`<sup>Optional</sup> <a name="TokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```csharp
public string TokenApiAuthenticationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WorkstationInput`<sup>Optional</sup> <a name="WorkstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstationInput"></a>

```csharp
public string WorkstationInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SessionToken`<sup>Required</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.sessionToken"></a>

```csharp
public string SessionToken { get; }
```

- *Type:* string

---

##### `TokenApiAuthentication`<sup>Required</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```csharp
public string TokenApiAuthentication { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `Workstation`<sup>Required</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.workstation"></a>

```csharp
public string Workstation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauthOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestBasicauth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestBasicauth">SyntheticsTestApiStepRequestBasicauth</a>

---


### SyntheticsTestApiStepRequestClientCertificateCertOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificateCertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateCert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---


### SyntheticsTestApiStepRequestClientCertificateKeyOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificateKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


### SyntheticsTestApiStepRequestClientCertificateOutputReference <a name="SyntheticsTestApiStepRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestClientCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert">PutCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey">PutKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCert` <a name="PutCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert"></a>

```csharp
private void PutCert(SyntheticsTestApiStepRequestClientCertificateCert Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `PutKey` <a name="PutKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey"></a>

```csharp
private void PutKey(SyntheticsTestApiStepRequestClientCertificateKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput">CertInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput">KeyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.cert"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateCertOutputReference Cert { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCertOutputReference">SyntheticsTestApiStepRequestClientCertificateCertOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.key"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateKeyOutputReference Key { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKeyOutputReference">SyntheticsTestApiStepRequestClientCertificateKeyOutputReference</a>

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.certInput"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateCert CertInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateCert">SyntheticsTestApiStepRequestClientCertificateCert</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.keyInput"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificateKey KeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateKey">SyntheticsTestApiStepRequestClientCertificateKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificateOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestClientCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestClientCertificate">SyntheticsTestApiStepRequestClientCertificate</a>

---


### SyntheticsTestApiStepRequestDefinitionOutputReference <a name="SyntheticsTestApiStepRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType">ResetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType">ResetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains">ResetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort">ResetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody">ResetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets">ResetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername">ResetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops">ResetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetAllowInsecure"></a>

```csharp
private void ResetAllowInsecure()
```

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetBodyType` <a name="ResetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetBodyType"></a>

```csharp
private void ResetBodyType()
```

##### `ResetCallType` <a name="ResetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCallType"></a>

```csharp
private void ResetCallType()
```

##### `ResetCertificateDomains` <a name="ResetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetCertificateDomains"></a>

```csharp
private void ResetCertificateDomains()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServer"></a>

```csharp
private void ResetDnsServer()
```

##### `ResetDnsServerPort` <a name="ResetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetDnsServerPort"></a>

```csharp
private void ResetDnsServerPort()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetFollowRedirects"></a>

```csharp
private void ResetFollowRedirects()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetNoSavingResponseBody` <a name="ResetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```csharp
private void ResetNoSavingResponseBody()
```

##### `ResetNumberOfPackets` <a name="ResetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```csharp
private void ResetNumberOfPackets()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetServername"></a>

```csharp
private void ResetServername()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetShouldTrackHops` <a name="ResetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```csharp
private void ResetShouldTrackHops()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput">BodyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput">CallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput">CertificateDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput">DnsServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput">NoSavingResponseBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput">NumberOfPacketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput">ServernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput">ShouldTrackHopsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType">BodyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType">CallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains">CertificateDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer">DnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort">DnsServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets">NumberOfPackets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername">Servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecureInput"></a>

```csharp
public object AllowInsecureInput { get; }
```

- *Type:* object

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `BodyTypeInput`<sup>Optional</sup> <a name="BodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```csharp
public string BodyTypeInput { get; }
```

- *Type:* string

---

##### `CallTypeInput`<sup>Optional</sup> <a name="CallTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callTypeInput"></a>

```csharp
public string CallTypeInput { get; }
```

- *Type:* string

---

##### `CertificateDomainsInput`<sup>Optional</sup> <a name="CertificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```csharp
public string[] CertificateDomainsInput { get; }
```

- *Type:* string[]

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerInput"></a>

```csharp
public string DnsServerInput { get; }
```

- *Type:* string

---

##### `DnsServerPortInput`<sup>Optional</sup> <a name="DnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```csharp
public double DnsServerPortInput { get; }
```

- *Type:* double

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirectsInput"></a>

```csharp
public object FollowRedirectsInput { get; }
```

- *Type:* object

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NoSavingResponseBodyInput`<sup>Optional</sup> <a name="NoSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```csharp
public object NoSavingResponseBodyInput { get; }
```

- *Type:* object

---

##### `NumberOfPacketsInput`<sup>Optional</sup> <a name="NumberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```csharp
public double NumberOfPacketsInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servernameInput"></a>

```csharp
public string ServernameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ShouldTrackHopsInput`<sup>Optional</sup> <a name="ShouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```csharp
public object ShouldTrackHopsInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; }
```

- *Type:* object

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `BodyType`<sup>Required</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.bodyType"></a>

```csharp
public string BodyType { get; }
```

- *Type:* string

---

##### `CallType`<sup>Required</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.callType"></a>

```csharp
public string CallType { get; }
```

- *Type:* string

---

##### `CertificateDomains`<sup>Required</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.certificateDomains"></a>

```csharp
public string[] CertificateDomains { get; }
```

- *Type:* string[]

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServer"></a>

```csharp
public string DnsServer { get; }
```

- *Type:* string

---

##### `DnsServerPort`<sup>Required</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.dnsServerPort"></a>

```csharp
public double DnsServerPort { get; }
```

- *Type:* double

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; }
```

- *Type:* object

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `NoSavingResponseBody`<sup>Required</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```csharp
public object NoSavingResponseBody { get; }
```

- *Type:* object

---

##### `NumberOfPackets`<sup>Required</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.numberOfPackets"></a>

```csharp
public double NumberOfPackets { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.servername"></a>

```csharp
public string Servername { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ShouldTrackHops`<sup>Required</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```csharp
public object ShouldTrackHops { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinitionOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestDefinition">SyntheticsTestApiStepRequestDefinition</a>

---


### SyntheticsTestApiStepRequestProxyOutputReference <a name="SyntheticsTestApiStepRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRequestProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxyOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRequestProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRequestProxy">SyntheticsTestApiStepRequestProxy</a>

---


### SyntheticsTestApiStepRetryOutputReference <a name="SyntheticsTestApiStepRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestApiStepRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetryOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestApiStepRetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestApiStepRetry">SyntheticsTestApiStepRetry</a>

---


### SyntheticsTestAssertionList <a name="SyntheticsTestAssertionList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get"></a>

```csharp
private SyntheticsTestAssertionOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestAssertionOutputReference <a name="SyntheticsTestAssertionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath">PutTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath">PutTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget">ResetTarget</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath">ResetTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath">ResetTargetxpath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetjsonpath` <a name="PutTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath"></a>

```csharp
private void PutTargetjsonpath(SyntheticsTestAssertionTargetjsonpath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetjsonpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `PutTargetxpath` <a name="PutTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath"></a>

```csharp
private void PutTargetxpath(SyntheticsTestAssertionTargetxpath Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.putTargetxpath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetProperty"></a>

```csharp
private void ResetProperty()
```

##### `ResetTarget` <a name="ResetTarget" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTarget"></a>

```csharp
private void ResetTarget()
```

##### `ResetTargetjsonpath` <a name="ResetTargetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetjsonpath"></a>

```csharp
private void ResetTargetjsonpath()
```

##### `ResetTargetxpath` <a name="ResetTargetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.resetTargetxpath"></a>

```csharp
private void ResetTargetxpath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath">Targetjsonpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath">Targetxpath</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput">PropertyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput">TargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput">TargetjsonpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput">TargetxpathInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property">Property</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target">Target</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Targetjsonpath`<sup>Required</sup> <a name="Targetjsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpath"></a>

```csharp
public SyntheticsTestAssertionTargetjsonpathOutputReference Targetjsonpath { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference">SyntheticsTestAssertionTargetjsonpathOutputReference</a>

---

##### `Targetxpath`<sup>Required</sup> <a name="Targetxpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpath"></a>

```csharp
public SyntheticsTestAssertionTargetxpathOutputReference Targetxpath { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference">SyntheticsTestAssertionTargetxpathOutputReference</a>

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.propertyInput"></a>

```csharp
public string PropertyInput { get; }
```

- *Type:* string

---

##### `TargetInput`<sup>Optional</sup> <a name="TargetInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetInput"></a>

```csharp
public string TargetInput { get; }
```

- *Type:* string

---

##### `TargetjsonpathInput`<sup>Optional</sup> <a name="TargetjsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetjsonpathInput"></a>

```csharp
public SyntheticsTestAssertionTargetjsonpath TargetjsonpathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---

##### `TargetxpathInput`<sup>Optional</sup> <a name="TargetxpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.targetxpathInput"></a>

```csharp
public SyntheticsTestAssertionTargetxpath TargetxpathInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.property"></a>

```csharp
public string Property { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.target"></a>

```csharp
public string Target { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestAssertionTargetjsonpathOutputReference <a name="SyntheticsTestAssertionTargetjsonpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionTargetjsonpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput">JsonpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath">Jsonpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `JsonpathInput`<sup>Optional</sup> <a name="JsonpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpathInput"></a>

```csharp
public string JsonpathInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalueInput"></a>

```csharp
public string TargetvalueInput { get; }
```

- *Type:* string

---

##### `Jsonpath`<sup>Required</sup> <a name="Jsonpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.jsonpath"></a>

```csharp
public string Jsonpath { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.targetvalue"></a>

```csharp
public string Targetvalue { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpathOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestAssertionTargetjsonpath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetjsonpath">SyntheticsTestAssertionTargetjsonpath</a>

---


### SyntheticsTestAssertionTargetxpathOutputReference <a name="SyntheticsTestAssertionTargetxpathOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestAssertionTargetxpathOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput">TargetvalueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput">XpathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue">Targetvalue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath">Xpath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `TargetvalueInput`<sup>Optional</sup> <a name="TargetvalueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalueInput"></a>

```csharp
public string TargetvalueInput { get; }
```

- *Type:* string

---

##### `XpathInput`<sup>Optional</sup> <a name="XpathInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpathInput"></a>

```csharp
public string XpathInput { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Targetvalue`<sup>Required</sup> <a name="Targetvalue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.targetvalue"></a>

```csharp
public string Targetvalue { get; }
```

- *Type:* string

---

##### `Xpath`<sup>Required</sup> <a name="Xpath" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.xpath"></a>

```csharp
public string Xpath { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpathOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestAssertionTargetxpath InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestAssertionTargetxpath">SyntheticsTestAssertionTargetxpath</a>

---


### SyntheticsTestBrowserStepList <a name="SyntheticsTestBrowserStepList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get"></a>

```csharp
private SyntheticsTestBrowserStepOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestBrowserStepOutputReference <a name="SyntheticsTestBrowserStepOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams">PutParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure">ResetAllowFailure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate">ResetForceElementUpdate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical">ResetIsCritical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutParams` <a name="PutParams" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams"></a>

```csharp
private void PutParams(SyntheticsTestBrowserStepParams Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.putParams.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `ResetAllowFailure` <a name="ResetAllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetAllowFailure"></a>

```csharp
private void ResetAllowFailure()
```

##### `ResetForceElementUpdate` <a name="ResetForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetForceElementUpdate"></a>

```csharp
private void ResetForceElementUpdate()
```

##### `ResetIsCritical` <a name="ResetIsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetIsCritical"></a>

```csharp
private void ResetIsCritical()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params">Params</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput">AllowFailureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput">ForceElementUpdateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput">IsCriticalInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput">ParamsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure">AllowFailure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate">ForceElementUpdate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical">IsCritical</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.params"></a>

```csharp
public SyntheticsTestBrowserStepParamsOutputReference Params { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference">SyntheticsTestBrowserStepParamsOutputReference</a>

---

##### `AllowFailureInput`<sup>Optional</sup> <a name="AllowFailureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailureInput"></a>

```csharp
public object AllowFailureInput { get; }
```

- *Type:* object

---

##### `ForceElementUpdateInput`<sup>Optional</sup> <a name="ForceElementUpdateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdateInput"></a>

```csharp
public object ForceElementUpdateInput { get; }
```

- *Type:* object

---

##### `IsCriticalInput`<sup>Optional</sup> <a name="IsCriticalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCriticalInput"></a>

```csharp
public object IsCriticalInput { get; }
```

- *Type:* object

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.paramsInput"></a>

```csharp
public SyntheticsTestBrowserStepParams ParamsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AllowFailure`<sup>Required</sup> <a name="AllowFailure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.allowFailure"></a>

```csharp
public object AllowFailure { get; }
```

- *Type:* object

---

##### `ForceElementUpdate`<sup>Required</sup> <a name="ForceElementUpdate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.forceElementUpdate"></a>

```csharp
public object ForceElementUpdate { get; }
```

- *Type:* object

---

##### `IsCritical`<sup>Required</sup> <a name="IsCritical" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.isCritical"></a>

```csharp
public object IsCritical { get; }
```

- *Type:* object

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue">PutValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate">ResetFailTestOnCannotLocate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutValue` <a name="PutValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue"></a>

```csharp
private void PutValue(SyntheticsTestBrowserStepParamsElementUserLocatorValue Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.putValue.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `ResetFailTestOnCannotLocate` <a name="ResetFailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.resetFailTestOnCannotLocate"></a>

```csharp
private void ResetFailTestOnCannotLocate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value">Value</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput">FailTestOnCannotLocateInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput">ValueInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate">FailTestOnCannotLocate</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.value"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference Value { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference</a>

---

##### `FailTestOnCannotLocateInput`<sup>Optional</sup> <a name="FailTestOnCannotLocateInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocateInput"></a>

```csharp
public object FailTestOnCannotLocateInput { get; }
```

- *Type:* object

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.valueInput"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocatorValue ValueInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---

##### `FailTestOnCannotLocate`<sup>Required</sup> <a name="FailTestOnCannotLocate" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.failTestOnCannotLocate"></a>

```csharp
public object FailTestOnCannotLocate { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocator InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---


### SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference <a name="SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValueOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocatorValue InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorValue">SyntheticsTestBrowserStepParamsElementUserLocatorValue</a>

---


### SyntheticsTestBrowserStepParamsOutputReference <a name="SyntheticsTestBrowserStepParamsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator">PutElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable">PutVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck">ResetCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType">ResetClickType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode">ResetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay">ResetDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement">ResetElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator">ResetElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail">ResetEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile">ResetFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles">ResetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers">ResetModifiers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId">ResetPlayingTabId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest">ResetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId">ResetSubtestPublicId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue">ResetValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable">ResetVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick">ResetWithClick</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX">ResetX</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY">ResetY</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutElementUserLocator` <a name="PutElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator"></a>

```csharp
private void PutElementUserLocator(SyntheticsTestBrowserStepParamsElementUserLocator Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putElementUserLocator.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `PutVariable` <a name="PutVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable"></a>

```csharp
private void PutVariable(SyntheticsTestBrowserStepParamsVariable Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.putVariable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetCheck` <a name="ResetCheck" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCheck"></a>

```csharp
private void ResetCheck()
```

##### `ResetClickType` <a name="ResetClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetClickType"></a>

```csharp
private void ResetClickType()
```

##### `ResetCode` <a name="ResetCode" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetCode"></a>

```csharp
private void ResetCode()
```

##### `ResetDelay` <a name="ResetDelay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetDelay"></a>

```csharp
private void ResetDelay()
```

##### `ResetElement` <a name="ResetElement" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElement"></a>

```csharp
private void ResetElement()
```

##### `ResetElementUserLocator` <a name="ResetElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetElementUserLocator"></a>

```csharp
private void ResetElementUserLocator()
```

##### `ResetEmail` <a name="ResetEmail" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetEmail"></a>

```csharp
private void ResetEmail()
```

##### `ResetFile` <a name="ResetFile" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFile"></a>

```csharp
private void ResetFile()
```

##### `ResetFiles` <a name="ResetFiles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetFiles"></a>

```csharp
private void ResetFiles()
```

##### `ResetModifiers` <a name="ResetModifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetModifiers"></a>

```csharp
private void ResetModifiers()
```

##### `ResetPlayingTabId` <a name="ResetPlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetPlayingTabId"></a>

```csharp
private void ResetPlayingTabId()
```

##### `ResetRequest` <a name="ResetRequest" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetRequest"></a>

```csharp
private void ResetRequest()
```

##### `ResetSubtestPublicId` <a name="ResetSubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetSubtestPublicId"></a>

```csharp
private void ResetSubtestPublicId()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```

##### `ResetVariable` <a name="ResetVariable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetVariable"></a>

```csharp
private void ResetVariable()
```

##### `ResetWithClick` <a name="ResetWithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetWithClick"></a>

```csharp
private void ResetWithClick()
```

##### `ResetX` <a name="ResetX" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetX"></a>

```csharp
private void ResetX()
```

##### `ResetY` <a name="ResetY" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.resetY"></a>

```csharp
private void ResetY()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator">ElementUserLocator</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable">Variable</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput">CheckInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput">ClickTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput">CodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput">DelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput">ElementInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput">ElementUserLocatorInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput">EmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput">FileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput">FilesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput">ModifiersInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput">PlayingTabIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput">RequestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput">SubtestPublicIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput">VariableInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput">WithClickInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput">XInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput">YInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check">Check</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType">ClickType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code">Code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay">Delay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element">Element</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email">Email</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file">File</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files">Files</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers">Modifiers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId">PlayingTabId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request">Request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId">SubtestPublicId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick">WithClick</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x">X</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y">Y</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ElementUserLocator`<sup>Required</sup> <a name="ElementUserLocator" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocator"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference ElementUserLocator { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference">SyntheticsTestBrowserStepParamsElementUserLocatorOutputReference</a>

---

##### `Variable`<sup>Required</sup> <a name="Variable" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variable"></a>

```csharp
public SyntheticsTestBrowserStepParamsVariableOutputReference Variable { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference">SyntheticsTestBrowserStepParamsVariableOutputReference</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `CheckInput`<sup>Optional</sup> <a name="CheckInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.checkInput"></a>

```csharp
public string CheckInput { get; }
```

- *Type:* string

---

##### `ClickTypeInput`<sup>Optional</sup> <a name="ClickTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickTypeInput"></a>

```csharp
public string ClickTypeInput { get; }
```

- *Type:* string

---

##### `CodeInput`<sup>Optional</sup> <a name="CodeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.codeInput"></a>

```csharp
public string CodeInput { get; }
```

- *Type:* string

---

##### `DelayInput`<sup>Optional</sup> <a name="DelayInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delayInput"></a>

```csharp
public double DelayInput { get; }
```

- *Type:* double

---

##### `ElementInput`<sup>Optional</sup> <a name="ElementInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementInput"></a>

```csharp
public string ElementInput { get; }
```

- *Type:* string

---

##### `ElementUserLocatorInput`<sup>Optional</sup> <a name="ElementUserLocatorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.elementUserLocatorInput"></a>

```csharp
public SyntheticsTestBrowserStepParamsElementUserLocator ElementUserLocatorInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsElementUserLocator">SyntheticsTestBrowserStepParamsElementUserLocator</a>

---

##### `EmailInput`<sup>Optional</sup> <a name="EmailInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.emailInput"></a>

```csharp
public string EmailInput { get; }
```

- *Type:* string

---

##### `FileInput`<sup>Optional</sup> <a name="FileInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.fileInput"></a>

```csharp
public string FileInput { get; }
```

- *Type:* string

---

##### `FilesInput`<sup>Optional</sup> <a name="FilesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.filesInput"></a>

```csharp
public string FilesInput { get; }
```

- *Type:* string

---

##### `ModifiersInput`<sup>Optional</sup> <a name="ModifiersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiersInput"></a>

```csharp
public string[] ModifiersInput { get; }
```

- *Type:* string[]

---

##### `PlayingTabIdInput`<sup>Optional</sup> <a name="PlayingTabIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabIdInput"></a>

```csharp
public string PlayingTabIdInput { get; }
```

- *Type:* string

---

##### `RequestInput`<sup>Optional</sup> <a name="RequestInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.requestInput"></a>

```csharp
public string RequestInput { get; }
```

- *Type:* string

---

##### `SubtestPublicIdInput`<sup>Optional</sup> <a name="SubtestPublicIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicIdInput"></a>

```csharp
public string SubtestPublicIdInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `VariableInput`<sup>Optional</sup> <a name="VariableInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.variableInput"></a>

```csharp
public SyntheticsTestBrowserStepParamsVariable VariableInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---

##### `WithClickInput`<sup>Optional</sup> <a name="WithClickInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClickInput"></a>

```csharp
public object WithClickInput { get; }
```

- *Type:* object

---

##### `XInput`<sup>Optional</sup> <a name="XInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.xInput"></a>

```csharp
public double XInput { get; }
```

- *Type:* double

---

##### `YInput`<sup>Optional</sup> <a name="YInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.yInput"></a>

```csharp
public double YInput { get; }
```

- *Type:* double

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Check`<sup>Required</sup> <a name="Check" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.check"></a>

```csharp
public string Check { get; }
```

- *Type:* string

---

##### `ClickType`<sup>Required</sup> <a name="ClickType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.clickType"></a>

```csharp
public string ClickType { get; }
```

- *Type:* string

---

##### `Code`<sup>Required</sup> <a name="Code" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.code"></a>

```csharp
public string Code { get; }
```

- *Type:* string

---

##### `Delay`<sup>Required</sup> <a name="Delay" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.delay"></a>

```csharp
public double Delay { get; }
```

- *Type:* double

---

##### `Element`<sup>Required</sup> <a name="Element" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.element"></a>

```csharp
public string Element { get; }
```

- *Type:* string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.email"></a>

```csharp
public string Email { get; }
```

- *Type:* string

---

##### `File`<sup>Required</sup> <a name="File" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.file"></a>

```csharp
public string File { get; }
```

- *Type:* string

---

##### `Files`<sup>Required</sup> <a name="Files" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.files"></a>

```csharp
public string Files { get; }
```

- *Type:* string

---

##### `Modifiers`<sup>Required</sup> <a name="Modifiers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.modifiers"></a>

```csharp
public string[] Modifiers { get; }
```

- *Type:* string[]

---

##### `PlayingTabId`<sup>Required</sup> <a name="PlayingTabId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.playingTabId"></a>

```csharp
public string PlayingTabId { get; }
```

- *Type:* string

---

##### `Request`<sup>Required</sup> <a name="Request" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.request"></a>

```csharp
public string Request { get; }
```

- *Type:* string

---

##### `SubtestPublicId`<sup>Required</sup> <a name="SubtestPublicId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.subtestPublicId"></a>

```csharp
public string SubtestPublicId { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `WithClick`<sup>Required</sup> <a name="WithClick" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.withClick"></a>

```csharp
public object WithClick { get; }
```

- *Type:* object

---

##### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.x"></a>

```csharp
public double X { get; }
```

- *Type:* double

---

##### `Y`<sup>Required</sup> <a name="Y" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.y"></a>

```csharp
public double Y { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestBrowserStepParams InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParams">SyntheticsTestBrowserStepParams</a>

---


### SyntheticsTestBrowserStepParamsVariableOutputReference <a name="SyntheticsTestBrowserStepParamsVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserStepParamsVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetExample"></a>

```csharp
private void ResetExample()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example">Example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.exampleInput"></a>

```csharp
public string ExampleInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.example"></a>

```csharp
public string Example { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariableOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestBrowserStepParamsVariable InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserStepParamsVariable">SyntheticsTestBrowserStepParamsVariable</a>

---


### SyntheticsTestBrowserVariableList <a name="SyntheticsTestBrowserVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get"></a>

```csharp
private SyntheticsTestBrowserVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestBrowserVariableOutputReference <a name="SyntheticsTestBrowserVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestBrowserVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetExample"></a>

```csharp
private void ResetExample()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example">Example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.exampleInput"></a>

```csharp
public string ExampleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.example"></a>

```csharp
public string Example { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestBrowserVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestConfigVariableList <a name="SyntheticsTestConfigVariableList" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestConfigVariableList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get"></a>

```csharp
private SyntheticsTestConfigVariableOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestConfigVariableOutputReference <a name="SyntheticsTestConfigVariableOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestConfigVariableOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample">ResetExample</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern">ResetPattern</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure">ResetSecure</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExample` <a name="ResetExample" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetExample"></a>

```csharp
private void ResetExample()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPattern` <a name="ResetPattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetPattern"></a>

```csharp
private void ResetPattern()
```

##### `ResetSecure` <a name="ResetSecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.resetSecure"></a>

```csharp
private void ResetSecure()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput">ExampleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput">PatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput">SecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example">Example</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern">Pattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure">Secure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExampleInput`<sup>Optional</sup> <a name="ExampleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.exampleInput"></a>

```csharp
public string ExampleInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.patternInput"></a>

```csharp
public string PatternInput { get; }
```

- *Type:* string

---

##### `SecureInput`<sup>Optional</sup> <a name="SecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secureInput"></a>

```csharp
public object SecureInput { get; }
```

- *Type:* object

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `Example`<sup>Required</sup> <a name="Example" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.example"></a>

```csharp
public string Example { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.pattern"></a>

```csharp
public string Pattern { get; }
```

- *Type:* string

---

##### `Secure`<sup>Required</sup> <a name="Secure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.secure"></a>

```csharp
public object Secure { get; }
```

- *Type:* object

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestConfigVariableOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### SyntheticsTestOptionsListCiOutputReference <a name="SyntheticsTestOptionsListCiOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListCiOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule">ResetExecutionRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExecutionRule` <a name="ResetExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.resetExecutionRule"></a>

```csharp
private void ResetExecutionRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput">ExecutionRuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule">ExecutionRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ExecutionRuleInput`<sup>Optional</sup> <a name="ExecutionRuleInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRuleInput"></a>

```csharp
public string ExecutionRuleInput { get; }
```

- *Type:* string

---

##### `ExecutionRule`<sup>Required</sup> <a name="ExecutionRule" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.executionRule"></a>

```csharp
public string ExecutionRule { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestOptionsListCi InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---


### SyntheticsTestOptionsListMonitorOptionsOutputReference <a name="SyntheticsTestOptionsListMonitorOptionsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListMonitorOptionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval">ResetRenotifyInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRenotifyInterval` <a name="ResetRenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.resetRenotifyInterval"></a>

```csharp
private void ResetRenotifyInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput">RenotifyIntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval">RenotifyInterval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenotifyIntervalInput`<sup>Optional</sup> <a name="RenotifyIntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyIntervalInput"></a>

```csharp
public double RenotifyIntervalInput { get; }
```

- *Type:* double

---

##### `RenotifyInterval`<sup>Required</sup> <a name="RenotifyInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.renotifyInterval"></a>

```csharp
public double RenotifyInterval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestOptionsListMonitorOptions InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---


### SyntheticsTestOptionsListOutputReference <a name="SyntheticsTestOptionsListOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi">PutCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions">PutMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry">PutRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings">PutRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned">ResetAcceptSelfSigned</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure">ResetAllowInsecure</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation">ResetCheckCertificateRevocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi">ResetCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors">ResetDisableCors</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp">ResetDisableCsp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects">ResetFollowRedirects</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion">ResetHttpVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError">ResetIgnoreServerCertificateError</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout">ResetInitialNavigationTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration">ResetMinFailureDuration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed">ResetMinLocationFailed</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName">ResetMonitorName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions">ResetMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority">ResetMonitorPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot">ResetNoScreenshot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles">ResetRestrictedRoles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry">ResetRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings">ResetRumSettings</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCi` <a name="PutCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi"></a>

```csharp
private void PutCi(SyntheticsTestOptionsListCi Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putCi.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `PutMonitorOptions` <a name="PutMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions"></a>

```csharp
private void PutMonitorOptions(SyntheticsTestOptionsListMonitorOptions Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putMonitorOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `PutRetry` <a name="PutRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry"></a>

```csharp
private void PutRetry(SyntheticsTestOptionsListRetry Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRetry.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `PutRumSettings` <a name="PutRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings"></a>

```csharp
private void PutRumSettings(SyntheticsTestOptionsListRumSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.putRumSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `ResetAcceptSelfSigned` <a name="ResetAcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAcceptSelfSigned"></a>

```csharp
private void ResetAcceptSelfSigned()
```

##### `ResetAllowInsecure` <a name="ResetAllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetAllowInsecure"></a>

```csharp
private void ResetAllowInsecure()
```

##### `ResetCheckCertificateRevocation` <a name="ResetCheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCheckCertificateRevocation"></a>

```csharp
private void ResetCheckCertificateRevocation()
```

##### `ResetCi` <a name="ResetCi" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetCi"></a>

```csharp
private void ResetCi()
```

##### `ResetDisableCors` <a name="ResetDisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCors"></a>

```csharp
private void ResetDisableCors()
```

##### `ResetDisableCsp` <a name="ResetDisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetDisableCsp"></a>

```csharp
private void ResetDisableCsp()
```

##### `ResetFollowRedirects` <a name="ResetFollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetFollowRedirects"></a>

```csharp
private void ResetFollowRedirects()
```

##### `ResetHttpVersion` <a name="ResetHttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetHttpVersion"></a>

```csharp
private void ResetHttpVersion()
```

##### `ResetIgnoreServerCertificateError` <a name="ResetIgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetIgnoreServerCertificateError"></a>

```csharp
private void ResetIgnoreServerCertificateError()
```

##### `ResetInitialNavigationTimeout` <a name="ResetInitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetInitialNavigationTimeout"></a>

```csharp
private void ResetInitialNavigationTimeout()
```

##### `ResetMinFailureDuration` <a name="ResetMinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinFailureDuration"></a>

```csharp
private void ResetMinFailureDuration()
```

##### `ResetMinLocationFailed` <a name="ResetMinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMinLocationFailed"></a>

```csharp
private void ResetMinLocationFailed()
```

##### `ResetMonitorName` <a name="ResetMonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorName"></a>

```csharp
private void ResetMonitorName()
```

##### `ResetMonitorOptions` <a name="ResetMonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorOptions"></a>

```csharp
private void ResetMonitorOptions()
```

##### `ResetMonitorPriority` <a name="ResetMonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetMonitorPriority"></a>

```csharp
private void ResetMonitorPriority()
```

##### `ResetNoScreenshot` <a name="ResetNoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetNoScreenshot"></a>

```csharp
private void ResetNoScreenshot()
```

##### `ResetRestrictedRoles` <a name="ResetRestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRestrictedRoles"></a>

```csharp
private void ResetRestrictedRoles()
```

##### `ResetRetry` <a name="ResetRetry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRetry"></a>

```csharp
private void ResetRetry()
```

##### `ResetRumSettings` <a name="ResetRumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.resetRumSettings"></a>

```csharp
private void ResetRumSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci">Ci</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions">MonitorOptions</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry">Retry</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings">RumSettings</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput">AcceptSelfSignedInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput">AllowInsecureInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput">CheckCertificateRevocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput">CiInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput">DisableCorsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput">DisableCspInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput">FollowRedirectsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput">HttpVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput">IgnoreServerCertificateErrorInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput">InitialNavigationTimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput">MinFailureDurationInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput">MinLocationFailedInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput">MonitorNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput">MonitorOptionsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput">MonitorPriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput">NoScreenshotInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput">RestrictedRolesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput">RetryInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput">RumSettingsInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput">TickEveryInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned">AcceptSelfSigned</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure">AllowInsecure</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation">CheckCertificateRevocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors">DisableCors</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp">DisableCsp</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects">FollowRedirects</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion">HttpVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError">IgnoreServerCertificateError</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout">InitialNavigationTimeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration">MinFailureDuration</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed">MinLocationFailed</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName">MonitorName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority">MonitorPriority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot">NoScreenshot</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles">RestrictedRoles</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery">TickEvery</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Ci`<sup>Required</sup> <a name="Ci" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ci"></a>

```csharp
public SyntheticsTestOptionsListCiOutputReference Ci { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCiOutputReference">SyntheticsTestOptionsListCiOutputReference</a>

---

##### `MonitorOptions`<sup>Required</sup> <a name="MonitorOptions" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptions"></a>

```csharp
public SyntheticsTestOptionsListMonitorOptionsOutputReference MonitorOptions { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptionsOutputReference">SyntheticsTestOptionsListMonitorOptionsOutputReference</a>

---

##### `Retry`<sup>Required</sup> <a name="Retry" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retry"></a>

```csharp
public SyntheticsTestOptionsListRetryOutputReference Retry { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference">SyntheticsTestOptionsListRetryOutputReference</a>

---

##### `RumSettings`<sup>Required</sup> <a name="RumSettings" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettings"></a>

```csharp
public SyntheticsTestOptionsListRumSettingsOutputReference RumSettings { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference">SyntheticsTestOptionsListRumSettingsOutputReference</a>

---

##### `AcceptSelfSignedInput`<sup>Optional</sup> <a name="AcceptSelfSignedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSignedInput"></a>

```csharp
public object AcceptSelfSignedInput { get; }
```

- *Type:* object

---

##### `AllowInsecureInput`<sup>Optional</sup> <a name="AllowInsecureInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecureInput"></a>

```csharp
public object AllowInsecureInput { get; }
```

- *Type:* object

---

##### `CheckCertificateRevocationInput`<sup>Optional</sup> <a name="CheckCertificateRevocationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocationInput"></a>

```csharp
public object CheckCertificateRevocationInput { get; }
```

- *Type:* object

---

##### `CiInput`<sup>Optional</sup> <a name="CiInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ciInput"></a>

```csharp
public SyntheticsTestOptionsListCi CiInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListCi">SyntheticsTestOptionsListCi</a>

---

##### `DisableCorsInput`<sup>Optional</sup> <a name="DisableCorsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCorsInput"></a>

```csharp
public object DisableCorsInput { get; }
```

- *Type:* object

---

##### `DisableCspInput`<sup>Optional</sup> <a name="DisableCspInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCspInput"></a>

```csharp
public object DisableCspInput { get; }
```

- *Type:* object

---

##### `FollowRedirectsInput`<sup>Optional</sup> <a name="FollowRedirectsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirectsInput"></a>

```csharp
public object FollowRedirectsInput { get; }
```

- *Type:* object

---

##### `HttpVersionInput`<sup>Optional</sup> <a name="HttpVersionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersionInput"></a>

```csharp
public string HttpVersionInput { get; }
```

- *Type:* string

---

##### `IgnoreServerCertificateErrorInput`<sup>Optional</sup> <a name="IgnoreServerCertificateErrorInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateErrorInput"></a>

```csharp
public object IgnoreServerCertificateErrorInput { get; }
```

- *Type:* object

---

##### `InitialNavigationTimeoutInput`<sup>Optional</sup> <a name="InitialNavigationTimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeoutInput"></a>

```csharp
public double InitialNavigationTimeoutInput { get; }
```

- *Type:* double

---

##### `MinFailureDurationInput`<sup>Optional</sup> <a name="MinFailureDurationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDurationInput"></a>

```csharp
public double MinFailureDurationInput { get; }
```

- *Type:* double

---

##### `MinLocationFailedInput`<sup>Optional</sup> <a name="MinLocationFailedInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailedInput"></a>

```csharp
public double MinLocationFailedInput { get; }
```

- *Type:* double

---

##### `MonitorNameInput`<sup>Optional</sup> <a name="MonitorNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorNameInput"></a>

```csharp
public string MonitorNameInput { get; }
```

- *Type:* string

---

##### `MonitorOptionsInput`<sup>Optional</sup> <a name="MonitorOptionsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorOptionsInput"></a>

```csharp
public SyntheticsTestOptionsListMonitorOptions MonitorOptionsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListMonitorOptions">SyntheticsTestOptionsListMonitorOptions</a>

---

##### `MonitorPriorityInput`<sup>Optional</sup> <a name="MonitorPriorityInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriorityInput"></a>

```csharp
public double MonitorPriorityInput { get; }
```

- *Type:* double

---

##### `NoScreenshotInput`<sup>Optional</sup> <a name="NoScreenshotInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshotInput"></a>

```csharp
public object NoScreenshotInput { get; }
```

- *Type:* object

---

##### `RestrictedRolesInput`<sup>Optional</sup> <a name="RestrictedRolesInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRolesInput"></a>

```csharp
public string[] RestrictedRolesInput { get; }
```

- *Type:* string[]

---

##### `RetryInput`<sup>Optional</sup> <a name="RetryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.retryInput"></a>

```csharp
public SyntheticsTestOptionsListRetry RetryInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---

##### `RumSettingsInput`<sup>Optional</sup> <a name="RumSettingsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.rumSettingsInput"></a>

```csharp
public SyntheticsTestOptionsListRumSettings RumSettingsInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---

##### `TickEveryInput`<sup>Optional</sup> <a name="TickEveryInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEveryInput"></a>

```csharp
public double TickEveryInput { get; }
```

- *Type:* double

---

##### `AcceptSelfSigned`<sup>Required</sup> <a name="AcceptSelfSigned" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.acceptSelfSigned"></a>

```csharp
public object AcceptSelfSigned { get; }
```

- *Type:* object

---

##### `AllowInsecure`<sup>Required</sup> <a name="AllowInsecure" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.allowInsecure"></a>

```csharp
public object AllowInsecure { get; }
```

- *Type:* object

---

##### `CheckCertificateRevocation`<sup>Required</sup> <a name="CheckCertificateRevocation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.checkCertificateRevocation"></a>

```csharp
public object CheckCertificateRevocation { get; }
```

- *Type:* object

---

##### `DisableCors`<sup>Required</sup> <a name="DisableCors" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCors"></a>

```csharp
public object DisableCors { get; }
```

- *Type:* object

---

##### `DisableCsp`<sup>Required</sup> <a name="DisableCsp" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.disableCsp"></a>

```csharp
public object DisableCsp { get; }
```

- *Type:* object

---

##### `FollowRedirects`<sup>Required</sup> <a name="FollowRedirects" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.followRedirects"></a>

```csharp
public object FollowRedirects { get; }
```

- *Type:* object

---

##### `HttpVersion`<sup>Required</sup> <a name="HttpVersion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.httpVersion"></a>

```csharp
public string HttpVersion { get; }
```

- *Type:* string

---

##### `IgnoreServerCertificateError`<sup>Required</sup> <a name="IgnoreServerCertificateError" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.ignoreServerCertificateError"></a>

```csharp
public object IgnoreServerCertificateError { get; }
```

- *Type:* object

---

##### `InitialNavigationTimeout`<sup>Required</sup> <a name="InitialNavigationTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.initialNavigationTimeout"></a>

```csharp
public double InitialNavigationTimeout { get; }
```

- *Type:* double

---

##### `MinFailureDuration`<sup>Required</sup> <a name="MinFailureDuration" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minFailureDuration"></a>

```csharp
public double MinFailureDuration { get; }
```

- *Type:* double

---

##### `MinLocationFailed`<sup>Required</sup> <a name="MinLocationFailed" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.minLocationFailed"></a>

```csharp
public double MinLocationFailed { get; }
```

- *Type:* double

---

##### `MonitorName`<sup>Required</sup> <a name="MonitorName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorName"></a>

```csharp
public string MonitorName { get; }
```

- *Type:* string

---

##### `MonitorPriority`<sup>Required</sup> <a name="MonitorPriority" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.monitorPriority"></a>

```csharp
public double MonitorPriority { get; }
```

- *Type:* double

---

##### `NoScreenshot`<sup>Required</sup> <a name="NoScreenshot" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.noScreenshot"></a>

```csharp
public object NoScreenshot { get; }
```

- *Type:* object

---

##### `RestrictedRoles`<sup>Required</sup> <a name="RestrictedRoles" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.restrictedRoles"></a>

```csharp
public string[] RestrictedRoles { get; }
```

- *Type:* string[]

---

##### `TickEvery`<sup>Required</sup> <a name="TickEvery" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.tickEvery"></a>

```csharp
public double TickEvery { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestOptionsList InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsList">SyntheticsTestOptionsList</a>

---


### SyntheticsTestOptionsListRetryOutputReference <a name="SyntheticsTestOptionsListRetryOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListRetryOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount">ResetCount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval">ResetInterval</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCount` <a name="ResetCount" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetCount"></a>

```csharp
private void ResetCount()
```

##### `ResetInterval` <a name="ResetInterval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.resetInterval"></a>

```csharp
private void ResetInterval()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput">IntervalInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval">Interval</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.intervalInput"></a>

```csharp
public double IntervalInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.interval"></a>

```csharp
public double Interval { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetryOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestOptionsListRetry InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRetry">SyntheticsTestOptionsListRetry</a>

---


### SyntheticsTestOptionsListRumSettingsOutputReference <a name="SyntheticsTestOptionsListRumSettingsOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestOptionsListRumSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId">ResetApplicationId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId">ResetClientTokenId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApplicationId` <a name="ResetApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetApplicationId"></a>

```csharp
private void ResetApplicationId()
```

##### `ResetClientTokenId` <a name="ResetClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.resetClientTokenId"></a>

```csharp
private void ResetClientTokenId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput">ApplicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput">ClientTokenIdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput">IsEnabledInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId">ApplicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId">ClientTokenId</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ApplicationIdInput`<sup>Optional</sup> <a name="ApplicationIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationIdInput"></a>

```csharp
public string ApplicationIdInput { get; }
```

- *Type:* string

---

##### `ClientTokenIdInput`<sup>Optional</sup> <a name="ClientTokenIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenIdInput"></a>

```csharp
public double ClientTokenIdInput { get; }
```

- *Type:* double

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabledInput"></a>

```csharp
public object IsEnabledInput { get; }
```

- *Type:* object

---

##### `ApplicationId`<sup>Required</sup> <a name="ApplicationId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.applicationId"></a>

```csharp
public string ApplicationId { get; }
```

- *Type:* string

---

##### `ClientTokenId`<sup>Required</sup> <a name="ClientTokenId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.clientTokenId"></a>

```csharp
public double ClientTokenId { get; }
```

- *Type:* double

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.isEnabled"></a>

```csharp
public object IsEnabled { get; }
```

- *Type:* object

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettingsOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestOptionsListRumSettings InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestOptionsListRumSettings">SyntheticsTestOptionsListRumSettings</a>

---


### SyntheticsTestRequestBasicauthOutputReference <a name="SyntheticsTestRequestBasicauthOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestBasicauthOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey">ResetAccessKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl">ResetAccessTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience">ResetAudience</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain">ResetDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource">ResetResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey">ResetSecretKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName">ResetServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken">ResetSessionToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication">ResetTokenApiAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType">ResetType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation">ResetWorkstation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessKey` <a name="ResetAccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessKey"></a>

```csharp
private void ResetAccessKey()
```

##### `ResetAccessTokenUrl` <a name="ResetAccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAccessTokenUrl"></a>

```csharp
private void ResetAccessTokenUrl()
```

##### `ResetAudience` <a name="ResetAudience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetAudience"></a>

```csharp
private void ResetAudience()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetDomain` <a name="ResetDomain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetDomain"></a>

```csharp
private void ResetDomain()
```

##### `ResetPassword` <a name="ResetPassword" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetPassword"></a>

```csharp
private void ResetPassword()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetResource"></a>

```csharp
private void ResetResource()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetScope"></a>

```csharp
private void ResetScope()
```

##### `ResetSecretKey` <a name="ResetSecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSecretKey"></a>

```csharp
private void ResetSecretKey()
```

##### `ResetServiceName` <a name="ResetServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetServiceName"></a>

```csharp
private void ResetServiceName()
```

##### `ResetSessionToken` <a name="ResetSessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetSessionToken"></a>

```csharp
private void ResetSessionToken()
```

##### `ResetTokenApiAuthentication` <a name="ResetTokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetTokenApiAuthentication"></a>

```csharp
private void ResetTokenApiAuthentication()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetType"></a>

```csharp
private void ResetType()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetUsername"></a>

```csharp
private void ResetUsername()
```

##### `ResetWorkstation` <a name="ResetWorkstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.resetWorkstation"></a>

```csharp
private void ResetWorkstation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput">AccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput">AccessTokenUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput">AudienceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput">ResourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput">ScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput">SecretKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput">ServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput">SessionTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput">TokenApiAuthenticationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput">UsernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput">WorkstationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey">AccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl">AccessTokenUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience">Audience</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource">Resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope">Scope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey">SecretKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName">ServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken">SessionToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication">TokenApiAuthentication</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username">Username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation">Workstation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyInput`<sup>Optional</sup> <a name="AccessKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKeyInput"></a>

```csharp
public string AccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessTokenUrlInput`<sup>Optional</sup> <a name="AccessTokenUrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrlInput"></a>

```csharp
public string AccessTokenUrlInput { get; }
```

- *Type:* string

---

##### `AudienceInput`<sup>Optional</sup> <a name="AudienceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audienceInput"></a>

```csharp
public string AudienceInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resourceInput"></a>

```csharp
public string ResourceInput { get; }
```

- *Type:* string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scopeInput"></a>

```csharp
public string ScopeInput { get; }
```

- *Type:* string

---

##### `SecretKeyInput`<sup>Optional</sup> <a name="SecretKeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKeyInput"></a>

```csharp
public string SecretKeyInput { get; }
```

- *Type:* string

---

##### `ServiceNameInput`<sup>Optional</sup> <a name="ServiceNameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceNameInput"></a>

```csharp
public string ServiceNameInput { get; }
```

- *Type:* string

---

##### `SessionTokenInput`<sup>Optional</sup> <a name="SessionTokenInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionTokenInput"></a>

```csharp
public string SessionTokenInput { get; }
```

- *Type:* string

---

##### `TokenApiAuthenticationInput`<sup>Optional</sup> <a name="TokenApiAuthenticationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthenticationInput"></a>

```csharp
public string TokenApiAuthenticationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.usernameInput"></a>

```csharp
public string UsernameInput { get; }
```

- *Type:* string

---

##### `WorkstationInput`<sup>Optional</sup> <a name="WorkstationInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstationInput"></a>

```csharp
public string WorkstationInput { get; }
```

- *Type:* string

---

##### `AccessKey`<sup>Required</sup> <a name="AccessKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessKey"></a>

```csharp
public string AccessKey { get; }
```

- *Type:* string

---

##### `AccessTokenUrl`<sup>Required</sup> <a name="AccessTokenUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.accessTokenUrl"></a>

```csharp
public string AccessTokenUrl { get; }
```

- *Type:* string

---

##### `Audience`<sup>Required</sup> <a name="Audience" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.audience"></a>

```csharp
public string Audience { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.resource"></a>

```csharp
public string Resource { get; }
```

- *Type:* string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.scope"></a>

```csharp
public string Scope { get; }
```

- *Type:* string

---

##### `SecretKey`<sup>Required</sup> <a name="SecretKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.secretKey"></a>

```csharp
public string SecretKey { get; }
```

- *Type:* string

---

##### `ServiceName`<sup>Required</sup> <a name="ServiceName" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.serviceName"></a>

```csharp
public string ServiceName { get; }
```

- *Type:* string

---

##### `SessionToken`<sup>Required</sup> <a name="SessionToken" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.sessionToken"></a>

```csharp
public string SessionToken { get; }
```

- *Type:* string

---

##### `TokenApiAuthentication`<sup>Required</sup> <a name="TokenApiAuthentication" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.tokenApiAuthentication"></a>

```csharp
public string TokenApiAuthentication { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.username"></a>

```csharp
public string Username { get; }
```

- *Type:* string

---

##### `Workstation`<sup>Required</sup> <a name="Workstation" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.workstation"></a>

```csharp
public string Workstation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauthOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestBasicauth InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestBasicauth">SyntheticsTestRequestBasicauth</a>

---


### SyntheticsTestRequestClientCertificateCertOutputReference <a name="SyntheticsTestRequestClientCertificateCertOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificateCertOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestClientCertificateCert InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---


### SyntheticsTestRequestClientCertificateKeyOutputReference <a name="SyntheticsTestRequestClientCertificateKeyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificateKeyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename">ResetFilename</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilename` <a name="ResetFilename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.resetFilename"></a>

```csharp
private void ResetFilename()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput">FilenameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename">Filename</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `FilenameInput`<sup>Optional</sup> <a name="FilenameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filenameInput"></a>

```csharp
public string FilenameInput { get; }
```

- *Type:* string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `Filename`<sup>Required</sup> <a name="Filename" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.filename"></a>

```csharp
public string Filename { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestClientCertificateKey InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


### SyntheticsTestRequestClientCertificateOutputReference <a name="SyntheticsTestRequestClientCertificateOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestClientCertificateOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert">PutCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey">PutKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCert` <a name="PutCert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert"></a>

```csharp
private void PutCert(SyntheticsTestRequestClientCertificateCert Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putCert.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `PutKey` <a name="PutKey" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey"></a>

```csharp
private void PutKey(SyntheticsTestRequestClientCertificateKey Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.putKey.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert">Cert</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key">Key</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput">CertInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput">KeyInput</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cert`<sup>Required</sup> <a name="Cert" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.cert"></a>

```csharp
public SyntheticsTestRequestClientCertificateCertOutputReference Cert { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCertOutputReference">SyntheticsTestRequestClientCertificateCertOutputReference</a>

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.key"></a>

```csharp
public SyntheticsTestRequestClientCertificateKeyOutputReference Key { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKeyOutputReference">SyntheticsTestRequestClientCertificateKeyOutputReference</a>

---

##### `CertInput`<sup>Optional</sup> <a name="CertInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.certInput"></a>

```csharp
public SyntheticsTestRequestClientCertificateCert CertInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateCert">SyntheticsTestRequestClientCertificateCert</a>

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.keyInput"></a>

```csharp
public SyntheticsTestRequestClientCertificateKey KeyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateKey">SyntheticsTestRequestClientCertificateKey</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificateOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestClientCertificate InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestClientCertificate">SyntheticsTestRequestClientCertificate</a>

---


### SyntheticsTestRequestDefinitionOutputReference <a name="SyntheticsTestRequestDefinitionOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestDefinitionOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType">ResetBodyType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType">ResetCallType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains">ResetCertificateDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer">ResetDnsServer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort">ResetDnsServerPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod">ResetMethod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody">ResetNoSavingResponseBody</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets">ResetNumberOfPackets</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername">ResetServername</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops">ResetShouldTrackHops</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout">ResetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBody` <a name="ResetBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBody"></a>

```csharp
private void ResetBody()
```

##### `ResetBodyType` <a name="ResetBodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetBodyType"></a>

```csharp
private void ResetBodyType()
```

##### `ResetCallType` <a name="ResetCallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCallType"></a>

```csharp
private void ResetCallType()
```

##### `ResetCertificateDomains` <a name="ResetCertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetCertificateDomains"></a>

```csharp
private void ResetCertificateDomains()
```

##### `ResetDnsServer` <a name="ResetDnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServer"></a>

```csharp
private void ResetDnsServer()
```

##### `ResetDnsServerPort` <a name="ResetDnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetDnsServerPort"></a>

```csharp
private void ResetDnsServerPort()
```

##### `ResetHost` <a name="ResetHost" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetMessage` <a name="ResetMessage" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMessage"></a>

```csharp
private void ResetMessage()
```

##### `ResetMethod` <a name="ResetMethod" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetMethod"></a>

```csharp
private void ResetMethod()
```

##### `ResetNoSavingResponseBody` <a name="ResetNoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNoSavingResponseBody"></a>

```csharp
private void ResetNoSavingResponseBody()
```

##### `ResetNumberOfPackets` <a name="ResetNumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetNumberOfPackets"></a>

```csharp
private void ResetNumberOfPackets()
```

##### `ResetPort` <a name="ResetPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServername` <a name="ResetServername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetServername"></a>

```csharp
private void ResetServername()
```

##### `ResetService` <a name="ResetService" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetShouldTrackHops` <a name="ResetShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetShouldTrackHops"></a>

```csharp
private void ResetShouldTrackHops()
```

##### `ResetTimeout` <a name="ResetTimeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetTimeout"></a>

```csharp
private void ResetTimeout()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.resetUrl"></a>

```csharp
private void ResetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput">BodyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput">BodyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput">CallTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput">CertificateDomainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput">DnsServerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput">DnsServerPortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput">MessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput">MethodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput">NoSavingResponseBodyInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput">NumberOfPacketsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput">ServernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput">ShouldTrackHopsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput">TimeoutInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body">Body</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType">BodyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType">CallType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains">CertificateDomains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer">DnsServer</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort">DnsServerPort</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message">Message</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method">Method</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody">NoSavingResponseBody</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets">NumberOfPackets</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername">Servername</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops">ShouldTrackHops</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout">Timeout</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyInput"></a>

```csharp
public string BodyInput { get; }
```

- *Type:* string

---

##### `BodyTypeInput`<sup>Optional</sup> <a name="BodyTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyTypeInput"></a>

```csharp
public string BodyTypeInput { get; }
```

- *Type:* string

---

##### `CallTypeInput`<sup>Optional</sup> <a name="CallTypeInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callTypeInput"></a>

```csharp
public string CallTypeInput { get; }
```

- *Type:* string

---

##### `CertificateDomainsInput`<sup>Optional</sup> <a name="CertificateDomainsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomainsInput"></a>

```csharp
public string[] CertificateDomainsInput { get; }
```

- *Type:* string[]

---

##### `DnsServerInput`<sup>Optional</sup> <a name="DnsServerInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerInput"></a>

```csharp
public string DnsServerInput { get; }
```

- *Type:* string

---

##### `DnsServerPortInput`<sup>Optional</sup> <a name="DnsServerPortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPortInput"></a>

```csharp
public double DnsServerPortInput { get; }
```

- *Type:* double

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.messageInput"></a>

```csharp
public string MessageInput { get; }
```

- *Type:* string

---

##### `MethodInput`<sup>Optional</sup> <a name="MethodInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.methodInput"></a>

```csharp
public string MethodInput { get; }
```

- *Type:* string

---

##### `NoSavingResponseBodyInput`<sup>Optional</sup> <a name="NoSavingResponseBodyInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBodyInput"></a>

```csharp
public object NoSavingResponseBodyInput { get; }
```

- *Type:* object

---

##### `NumberOfPacketsInput`<sup>Optional</sup> <a name="NumberOfPacketsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPacketsInput"></a>

```csharp
public double NumberOfPacketsInput { get; }
```

- *Type:* double

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `ServernameInput`<sup>Optional</sup> <a name="ServernameInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servernameInput"></a>

```csharp
public string ServernameInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `ShouldTrackHopsInput`<sup>Optional</sup> <a name="ShouldTrackHopsInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHopsInput"></a>

```csharp
public object ShouldTrackHopsInput { get; }
```

- *Type:* object

---

##### `TimeoutInput`<sup>Optional</sup> <a name="TimeoutInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeoutInput"></a>

```csharp
public double TimeoutInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.body"></a>

```csharp
public string Body { get; }
```

- *Type:* string

---

##### `BodyType`<sup>Required</sup> <a name="BodyType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.bodyType"></a>

```csharp
public string BodyType { get; }
```

- *Type:* string

---

##### `CallType`<sup>Required</sup> <a name="CallType" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.callType"></a>

```csharp
public string CallType { get; }
```

- *Type:* string

---

##### `CertificateDomains`<sup>Required</sup> <a name="CertificateDomains" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.certificateDomains"></a>

```csharp
public string[] CertificateDomains { get; }
```

- *Type:* string[]

---

##### `DnsServer`<sup>Required</sup> <a name="DnsServer" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServer"></a>

```csharp
public string DnsServer { get; }
```

- *Type:* string

---

##### `DnsServerPort`<sup>Required</sup> <a name="DnsServerPort" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.dnsServerPort"></a>

```csharp
public double DnsServerPort { get; }
```

- *Type:* double

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.message"></a>

```csharp
public string Message { get; }
```

- *Type:* string

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.method"></a>

```csharp
public string Method { get; }
```

- *Type:* string

---

##### `NoSavingResponseBody`<sup>Required</sup> <a name="NoSavingResponseBody" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.noSavingResponseBody"></a>

```csharp
public object NoSavingResponseBody { get; }
```

- *Type:* object

---

##### `NumberOfPackets`<sup>Required</sup> <a name="NumberOfPackets" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.numberOfPackets"></a>

```csharp
public double NumberOfPackets { get; }
```

- *Type:* double

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Servername`<sup>Required</sup> <a name="Servername" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.servername"></a>

```csharp
public string Servername { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ShouldTrackHops`<sup>Required</sup> <a name="ShouldTrackHops" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.shouldTrackHops"></a>

```csharp
public object ShouldTrackHops { get; }
```

- *Type:* object

---

##### `Timeout`<sup>Required</sup> <a name="Timeout" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.timeout"></a>

```csharp
public double Timeout { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinitionOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestDefinition InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestDefinition">SyntheticsTestRequestDefinition</a>

---


### SyntheticsTestRequestProxyOutputReference <a name="SyntheticsTestRequestProxyOutputReference" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.Datadog;

new SyntheticsTestRequestProxyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput">HeadersInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers">Headers</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url">Url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headersInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> HeadersInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.headers"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Headers { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxyOutputReference.property.internalValue"></a>

```csharp
public SyntheticsTestRequestProxy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-datadog.syntheticsTest.SyntheticsTestRequestProxy">SyntheticsTestRequestProxy</a>

---


