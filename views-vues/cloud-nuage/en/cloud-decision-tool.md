---
layout: default
title: Right Cloud Decision Tool (draft)
lang: en
altLang: fr
altLangPage: nuage-outil-decisionnel
collectionDirectory: views-vues/cloud-nuage
questions:
  "1": Sensitivity
  "1-a1": Stakeholders have not raised concerns regarding the sensitivity of the data.
  "1-a2": Stakeholders view the sensitivity of the data to be high.
  "2": Financial
  "2-a1": Budget is available to support an Operational Expense Model; the costs will rise and fall with the consumption of resources.
  "2-a2": Budget is available to support a Capital Expense Model; ability to plan for periodic investments in ever greening infrastructure and innovation.
  "3": Legacy
  "3-a1": Application can operate in a cloud environment and the required virtualized or dedicated hardware is available in a cloud environment.
  "3-a2": Application needs to operate in a non-cloud environment and required highly specialized, dedicated, hardware.
  "4": Commoditized
  "4-a1": Application can operate on the standardized offerings and SLAs of public cloud.
  "4-a2": Application requires customized offering and SLAs.
  "5": Location
  "5-a1": Application is not susceptible to latency issues that may arise due to traffic moving through an additional circuit.
  "5-a2": Application is susceptible to latency issues that may arise due to traffic moving through an additional circuit.
  "6": Connectivity
  "6-a1": Application does not have voluminous transactions with an on-premises database or application.
  "6-a2": Application has voluminous transactions with an on-premises database or application.
  "7": Speed
  "7-a1": Rapid access to services is desired. Are the required services available on-demand?
  "7-a2": Can tolerate the time required to implement the services that may not currently be available on-demand.
  "8": Longevity
  "8-sub": The applications is expected to meet a
  "8-a1": Short-term need
  "8-a2": Long-term need
  "9": Elasticity
  "9-sub": With time, the resource requirements of the  application will
  "9-a1": Remain stable
  "9-a2": Grow or shrink
  "10": Innovation
  "10-a1": Project will want to take advantage of new technology trends as they become available to the market.
  "10-a2": Application does not want to take advantage of new technology trends and will remain static.
  "10-a3": No new technology is required.
  "11": DevOps
  "11-a1": Desire rapid access to a suite of tools to support application development as platform services without making a capital investment.
  "11-a2": Willing to invest to deploy application development tools to support project.
public: Public
private: Private
nonCloud: Non-Cloud
mandatorySection: Mandatory
highlyRatedSection: "Highly Rated [20 points each]"
ratedSection: "Rated [10 points each]"
mandatoryMet: Mandatory Met
ratedTotals: Rated Totals
cloudTypes:
 - "public-cloud"
 - "private-cloud"
 - "non-cloud"
criteriaTags:
 - "sensitivity"
 - "financial"
 - "legacy"
 - "commoditized"
 - "location"
 - "connectivity"
 - "speed"
 - "longevity"
 - "elasticity"
 - "innovation"
 - "devops"
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<div class="wb-inview" data-inview="progress-overlay">

To help organize the decision of which cloud deployment model is the right deployment model for your business context, the following tool can be used.

</div>

{% include views-vues/cloud-nuage/cloud-decision-tool-outil-nuage-decisionnel-questionnaire.html %}

{% include views-vues/cloud-nuage/cloud-decision-tool-outil-nuage-decisionnel-resultats.html %}
