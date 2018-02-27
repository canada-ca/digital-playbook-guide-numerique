# 10. Be good data stewards

**[TODO: Add/revise introductory text]**

**Guidelines:**

[10.1 Collect data once to avoid duplication](#user-content-101-collect-data-once-to-avoid-duplication)

[10.2 Make relevant government information and data easily accessible to help support decision making](#user-content-102-make-relevant-government-information-and-data-easily-accessible-to-help-support-decision-making)

[10.3 Ensure that data is collected in a standard way so that it can easily be integrated and reused by others](#user-content-103-ensure-that-data-is-collected-in-a-standard-way-so-that-it-can-easily-be-integrated-and-reused-by-others)

[10.4 Give due consideration to digital preservation and retention](#user-content-104-give-due-consideration-to-digital-preservation-and-retention)

[10.5 Information/Data is an asset (Current GC EARB Principles)](#user-content-105-ensure-data-and-information-is-complete-accurate-and-up-to-date)

**Related guidelines:**

**[TODO: Identify related guidelines in format "\#.\# Guideline name (Principle #: Principle name)"]**

## 10.1 Collect data once to avoid duplication

**Related (temporary for mapping purposes; remove later):**

- Enable "Tell us once" data sharing across all systems (GC Build it Digital Principles (initial thoughts))

- Tell me once -- Data/Information centricity (GC EA Principles)

**[TODO: Add/revise introductory text]**

### Checklist

- **[TODO: Add/revise checklist items]**

### Implementation guides

- **[TODO: Add/revise implementation guide items]**

## 10.2 Make relevant government information and data easily accessible to help support decision making

**Related (temporary for mapping purposes; remove later):**

- [Use data to drive decisions -- Digital Services Playbook (US)](https://playbook.cio.gov/#play12)

**[TODO: Add/revise introductory text]**

**Introduction examples:**

**Digital Services Playbook (US):** At every stage of a project, we should measure how well our service is working for our users. This includes measuring how well a system performs and how people are interacting with it in real-time. Our teams and agency leadership should carefully watch these metrics to find issues and identify which bug fixes and improvements should be prioritized. Along with monitoring tools, a feedback mechanism should be in place for people to report issues directly.

### Checklist

- **[TODO: Add/revise checklist items]**

- Monitor system-level resource utilization in real time **(Digital Services Playbook (US))**

- Monitor system performance in real-time (e.g. response time, latency, throughput, and error rates) **(Digital Services Playbook (US))**

- Ensure monitoring can measure median, 95th percentile, and 98th percentile performance **(Digital Services Playbook (US))**

- Create automated alerts based on this monitoring **(Digital Services Playbook (US))**

- Track concurrent users in real-time, and monitor user behaviors in the aggregate to determine how well the service meets user needs **(Digital Services Playbook (US))**

- Publish metrics internally **(Digital Services Playbook (US))**

- Publish metrics externally **(Digital Services Playbook (US))**

- Use an experimentation tool that supports multivariate testing in production **(Digital Services Playbook (US))**

### Key Questions **(Digital Services Playbook (US))**

- What are the key metrics for the service?

- How have these metrics performed over the life of the service?

- Which system monitoring tools are in place?

- What is the targeted average response time for your service? What percent of requests take more than 1 second, 2 seconds, 4 seconds, and 8 seconds?

- What is the average response time and percentile breakdown (percent of requests taking more than 1s, 2s, 4s, and 8s) for the top 10 transactions?

- What is the volume of each of your service's top 10 transactions?
    What is the percentage of transactions started vs. completed?

- What is your service's monthly uptime target?

- What is your service's monthly uptime percentage, including scheduled maintenance? Excluding scheduled maintenance?

- How does your team receive automated alerts when incidents occur?

- How does your team respond to incidents? What is your post-mortem process?

- Which tools are in place to measure user behavior?

- What tools or technologies are used for A/B testing?

- How do you measure customer satisfaction?

### Implementation guides

- **[TODO: Add/revise implementation guide items]**

## 10.3 Ensure that data is collected in a standard way so that it can easily be integrated and reused by others

**Related (temporary for mapping purposes; remove later):**

- [Collect performance data -- Digital Service Standard (UK)](https://www.gov.uk/service-manual/service-standard/collect-performance-data)

- [Measure performance (Digital Service Standard (Ontario))](https://www.ontario.ca/page/digital-service-standard#section-14)

**[TODO: Add/revise introductory text]**

**Introduction examples:**

**Digital Service Standard (UK):** Use tools for analysis that collect performance data. Use this data to analyse the success of the service and to translate this into features and tasks for the next phase of development.

Collecting performance data means you can continuously improve your service by:

- learning its strengths and weaknesses

- using the data to support improvements you make

**Digital Service Standard (Ontario):** Continuously capture and monitor performance data to inform ongoing service improvements.

### Why it matters

Measuring performance means continuously improving a service by:

- learning its strengths and weaknesses

- using data to support changes

### Checklist

- **[TODO: Add/revise checklist items]**

- Alpha, beta and live stages

    - determine the data you need to capture, where you need to capture it from and how you'll capture it based on the projected size and shape of the service **(Digital Service Standard (UK))** / determine data needs, sources and collection **(Digital Service Standard (Ontario))**

    - have an ongoing roadmap for performance analysis and someone in the team responsible for identifying actionable data insights during alpha, including assisted digital support **(Digital Service Standard (UK))**

    - use qualitative and quantitative data to help improve your understanding of user needs and identify areas for improvement **(Digital Service Standard (UK)) /** use qualitative and quantitative data to understand user needs and identify areas for change **(Digital Service Standard (Ontario))**

    - choose suitable data analysis tools **(Digital Service Standard (UK))**

    - address information security and privacy issues appropriately **(Digital Service Standard (UK))**

    - map user journeys through the service and track them to identify completions and areas of poor performance **(Digital Service Standard (UK))**

    - measure assisted digital support **(Digital Service Standard (UK))**

    - document the next user story related to performance analysis **(Digital Service Standard (UK))**

- Beta stage

    - discuss a start page and feedback page with GOV.UK **(Digital Service Standard (UK))**

- Live stage

    - collect feedback from users, during and after their user journey **(Digital Service Standard (UK))**

- use web analytics to capture information about user behaviour online **(Digital Service Standard (Ontario))**

- monitor and evaluate user feedback and complaints from the digital service and other service touch-points such as phone and in person **(Digital Service Standard (Ontario))**

- analyze performance and identify actionable data insights as early as possible **(Digital Service Standard (Ontario))**

- define performance metrics for the service up-front, early on in the design process **(Digital Service Standard (Ontario))**

- regularly review the technology used to provide the service and the processes that support the service **(Digital Service Standard (Ontario))**

- base your service review frequency on the volume of users ( e.g. 10,000 or less unique users per year = 2 year review cycle;
    10,000-100,000 = annual; 100,000-1 million = every 6 months) **(Digital Service Standard (Ontario))**

- use data to determine the cost per use for each channel, accounting for the cost to build and ongoing maintenance as well **(Digital Service Standard (Ontario))**

- demonstrate how service performance compares to other similar government and private sector services **(Digital Service Standard (Ontario))**

- share your review findings with leadership **(Digital Service Standard (Ontario))**

### Implementation guides

- **[TODO: Add/revise implementation guide items]**

- [Using data to improve your service: an introduction](https://www.gov.uk/service-manual/measuring-success/using-data-to-improve-your-service-an-introduction) **(Digital Service Standard (UK))**

- [Choosing digital analytics tools](https://www.gov.uk/service-manual/measuring-success/choosing-digital-analytics-tools) **(Digital Service Standard (UK))**

- [Measuring digital take-up](https://www.gov.uk/service-manual/measuring-success/measuring-digital-take-up) **(Digital Service Standard (UK))**

- [Measuring user satisfaction](https://www.gov.uk/service-manual/measuring-success/measuring-user-satisfaction) **(Digital Service Standard (UK))**

- [Measuring cost per transaction](https://www.gov.uk/service-manual/measuring-success/measuring-cost-per-transaction) **(Digital Service Standard (UK))**

- [Measuring completion rate](https://www.gov.uk/service-manual/measuring-success/measuring-completion-rate) **(Digital Service Standard (UK))**

- [Sharing data on the Performance Platform](https://www.gov.uk/service-manual/measuring-success/sharing-your-data-with-the-performance-platform) **(Digital Service Standard (UK))**

Find out more about [service assessments](https://www.gov.uk/service-manual/service-assessments). **(Digital Service Standard (UK))**


## 10.4 Give due consideration to digital preservation and retention

**[TODO: Add/revise introductory text]**

### Checklist

- **[TODO: Add/revise checklist items]**

### Implementation guides

- **[TODO: Add/revise implementation guide items]**

## 10.5 Ensure data and information is complete, accurate and up-to-date

**Related (temporary for mapping purposes; remove later):**

- Information/Data is an asset (Current GC EARB Principles)

**[TODO: Add/revise introductory text]**

### Checklist

- **[TODO: Add/revise checklist items]**

### Implementation guides

- **[TODO: Add/revise implementation guide items]**
