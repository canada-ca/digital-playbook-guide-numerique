---
layout: default
title: Algorithmic Impact Assessment (draft)
lang: en
altLang: fr
altLangPage: evaluation-impact-algorithmique
collectionDirectory: views-vues/automated-decision-automatise
questions:
  "1": What parts of the decision-making process will be automated by this system? (Check all that apply)
  "1a": File triage or assignment
  "1b": Risk scoring or categorization
  "1c": Recommendation to take a certain course of action
  "1d": Full end-to-end decision
  "1.1": Does the recommendation or decision made by the system involve discretion?
  "1.1.1": Is the decision purely discretionary? (e.g., review on compassionate grounds)
  "1.1.2": Have all the decision points that involve the exercise of discretion or judgement been clearly idenified as requiring human input?
  "2": Can this automated system result in the restriction of movement into, out of, or within Canada?
  "3": Can this system infer or predict potential criminal activity?
  "4": Can this system result in granting or restricting access to a premises or network?
  "4.1": What is the classfication of the premises? (Select one)
  "5": Does this system provide funds to an individual, business, or community?
  "5.1": Is this funding for a social or economic support program?
  "5.1.1": If funding were to be denied, could it leave the client in a precarious economic positions? (e.g., could render and individual homeless or a business to close)
  "5.2": Does the system issue transfer payments?
  "5.2.1": Is this grant, conribution, or transfer payment in excess of $5,000,000?
  "6": Does this system, result in the issuance of a fine, administrative monetary penalty, or a debt collection notice?
  "7": Does this system result in the issuance of a permit, license, patent, or trademark?
  "7.1": Does this involve the collection, transportation, storage, purchase or sale of a regulated good or substance?
  "7.1.1": Does this involve the collection, transportation, storage, purchase or sale of a regulated good or substance?
  "7.2": Is this a construction or environmental permit?
  "7.3": Is this a patent or trademark?
  "8": Does this system confer a legal status that is otherwise required to receive a benefit or service (e.g., Indian status, veteran status)?
  "9": Does this system involve the distribution of human resources or material in the management of emergencies?
  "10": What are the key business drivers for automating the administrative decision-making process? (Check all that apply)
  "10a": Existing backlog of work or cases
  "10b": Improve overall quality of decisions
  "10c": Lower transaction costs of an existing program
  "10d": The system is performing tasks that humans could not accomplish in a reasonable period of time
  "10e": Improve client service delivery
  "10f": Using innovative approaches
  "10g": None of the above
  "11": Is the scope of the system clearly reflected in project documentation?
  "12": Has the design team consulted the following experts within their organization?
  "12a": Communications
  "12b": Data and Information Management
  "12c": Enterprise Architecture
  "12d": Human Resources
  "12e": IT/Cybersecurity
  "12f": Legal
  "12g": Service Delivery
  "12h": Privacy
  "13": Have you developed Key Performance Indicators and benchmarks to measure and improve the system’s performance?
  "14": Is there a process in place to document how data quality issues were resolved during the design process?
  "15": Have appropriate strategies been developed to manage the risk that outdated or unreliable data is used to make an automated decision?
  "16-part1": "Have you undertaken "
  "16-link-url": "https://www.swc-cfc.gc.ca/gba-acs/approach-approche-en.html"
  "16-link-text": "Gender Based Analysis Plus"
  "16-part2": " of the training data?"
  "16.1": Have you documented mitigation strategies?
  "17": Will your system make decisions specifically about Indigenous peoples or territory?
  "17.1": Have you engaged relevant Indigenous organizations in meaningful consultation in the design of the system?
  "18": Does your system use contactless machine vision for biometric recognition (e.g. facial, full-body person, gait)?
  "18.1": Does your system perform within acceptable parameters for all skin colours as defined by the Fitzpatrick Skin Type scale or similar measurement?
  "18.2": Where applicable, have you tested to ensure that the system performs within acceptable parameters with persons who have a disability that may cause them to be unduly disadvantaged by the machine vision component? (e.g., ensuring that a gait analysis tool does not unduly disadvantage an individual that uses a wheelchair)?
  "19": Does the governance structure assign accountability for the design, development, maintenance, and improvement of the system?
  "20": Does the system interface with other IT systems?
  "20.1": Where it interfaces with other systems, have you clearly identified the business processes that occur between systems?
  "20.2": Have you gone to the Enterprise Architecture Review Board with a concept case?
  "21": Which of the following information about system functionality are you planning to make publicly available? (Check all that apply)
  "21a": Training data sources
  "21b": Decision trees
  "21c": Confidence thresholds
  "21d": Pre-defined models
  "21e": Criteria
  "21f": Classification structures
  "22": Have the system design and processes been reviewed by the appropriate Legal Services Unit and other legal experts, as required?
  "22.1": Has a formal opinion been issued?
  "22.2": Have the relevant areas of legislation been identified during the scoping phase?
  "23": Does the Automated Decision System require the use of personal information?
  "23.1": Does the program have an existing Privacy Impact Assessment?
  "24": What is the security classfication of the input data used by the system? (Select one)
  "25": Have you conducted a Security Assessment and Authorization?
  "26": Is there a process in place to monitor and grant access permission?
  "27": Does the system enable human override of system decisions?
  "28": Does the system enable override of human decisions?
  "29": Does the system enable the override of other automated decision systems?
  "30": Do you have processes in place to log the instances where overrides were performed?
  "31": Do you have a process in place to test and verify business rules?
  "32": Did you develop verification processes to test for unintentional outcomes?
  "33": Is the system used by a different part of the organization than the ones who developed it?
  "34": Did you develop training programs or documentation to ensure that the system is used effectively and properly?
  "34.1": Do you have the means to ensure that training requirements are being met?
  "35": Can the system provide an audit trail that records recommendations or decisions?
  "35.1": Does the audit trail clearly set out all decision points made by the system?
  "35.2": Have you included change control processes in the audit trail to record modifications to the system's operation or performance?
  "35.3": Does the audit trail show who an authorized decision-maker is?
  "36": Is the system capable of incorporating recommendations or decisions into a statement, reasons or other written notification, where required?
  "37": If the system is intended to undertake tasks currently undertaken by human staff, have you engaged with your departmental human resources?
  "38": Have you developed a communications strategy to address any potential changes to work practices for officers?
  "39": Have you established appropriate user/client feedback mechanisms?
  "40": Do you have a recourse process planned or established for clients that wish to challenge the decision?
discretionSection: Discretion
scopeSection: Scope
aiaCriteria: 
  - "Impact on Individuals and Entities"
  - "Impact on Government Institutions"
  - "Data Management"
  - "Procedural Fairness"
  - "Complexity"
criteriaThresholds:
  - [15, 40, 70]
  - [25, 50, 75]
  - [30, 60, 80]
  - [30, 60, 80]
  - [25, 50, 75]
multipliers:
  - []
  - []
  - [1, 1.15, 1.25, 1.5]
  - [0.5, 1, 2]
  - [0.5, 1, 2]
progressPercentThreshold: 1
---
{% assign dataVariable = site.playbookData[page.lang] %}{%
assign dataSource = site.data[dataVariable] %}
<section>

<div class="wb-inview" data-inview="progress-overlay">

## Introduction

</div>

Governments are increasingly looking to utilize Automated Decision Systems to make, or assist in making administrative decisions. However, questions are being raised as to how to adequately assess the impacts that these systems may have on Canadians and federal institutions. The aim of the proposed Algorithmic Impact Assessment is to develop a framework to help institutions better understand and mitigate the risks associated with Automated Decision Systems and to provide the appropriate governance, oversight and reporting/audit requirements that best match the type of application being designed. The AIA supports the TBS Standard on Automated Decision-Making.

In developing this proposed AIA Framework, the following three key goals have been identified:

- Increase capacity to evaluate the impact of Automated Decision Systems including legal and ethical issues, such as disparate impacts and due process violations;
- Recommend the appropriate governance, oversight and/or design recommendations to institutions based on their existing or proposed automated decision systems; and
- Provide a mechanism for greater openness and transparency for public consultation and external review of the design and deployment of Automated Decision Systems in the public sector.

</section>

{% include views-vues/automated-decision-automatise/aia-questionnaire-eia.html %}

{% include views-vues/automated-decision-automatise/aia-results-resultats-eia.html %}
