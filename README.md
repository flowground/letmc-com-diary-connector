# ![LOGO](logo.png) LetMC Api V3, diary **flow**ground Connector

## Description

A generated **flow**ground connector for the LetMC Api V3, diary API (version v3-diary).

Generated from: https://api.apis.guru/v2/specs/letmc.com/diary/v3-diary/swagger.json<br/>
Generated at: 2019-06-06T16:12:25+03:00

## API Description



## Authorization

Supported authorization schemes:
- API Key- Basic Authentication

## Actions

### Get a list of all available allocations for a date + 7 days for a specified appointment type

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `preferredDate` - _required_ - The date to search from
* `propertyIdentifier` - _required_ - The unique property identifier (Sales or Lettings)
* `appointmentType` - _required_ - The unique appointment type identifier
* `lettings` - _optional_ - Sales or Lettings property?

### Update an existing appointment using its unique identifier

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `appointmentID` - _required_ - The unique appointment id

### Get an appointment by ID

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - Company short name
* `appointmentID` - _required_ - Appointment ID

### Post an appointment into a valid diary allocation

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `propertyIdentifier` - _required_ - The unique property identifier (Sales or Lettings)
* `lettings` - _optional_ - Sales or Lettings property?

### Update an existing appointment using its unique identifier

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `appointmentID` - _required_ - The unique appointment id
* `lettings` - _optional_ - Sales or Lettings property?

### A collection of diary appointments linked to a company filtered between specific dates and by appointment type

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `branchID` - _required_ - The unique ID of the Branch
* `startDate` - _required_ - The search from date
* `endDate` - _required_ - The search to date
* `appointmentTypesToSearch` - _required_ - The appointment IDs to search for
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

### A collection of all diary appointment types

*Tags:* `DiaryController`

#### Input Parameters
* `shortName` - _required_ - The unique client short-name
* `offset` - _required_ - The index of the first item to return
* `count` - _required_ - The maximum number of items to return (up to 1000 per request)

## License

**flow**ground :- Telekom iPaaS / letmc-com-diary-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
