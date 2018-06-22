---
layout: default
title: Comment ajouter une nouvelle section commune aux lignes directrices
lang: fr
altLang: en
altLangPage: how-add-new-common-section-guidelines
collectionDirectory: docs
---
The following are the steps for adding a new common section (e.g., checklist, implementation guides) to guidelines:

<!-- markdownlint-disable MD032 -->
- **``_data/playbook_schema.json`` and ``_data/guide_schema.json``:** Add a property for the new section following the pattern of "checklist" and "guides"
- **``_config.yml``:** Add an entry for the new section in the common strings section (following the pattern for "checklist" and "guides"). Also add the section key to ``guidelineSectionsOrder``.
- **``_includes/filter-interface-retroaction.html``:** Add a filter to the section filters for the new new section (following the pattern for "checklist" and "guides"
- **``docs/en/views.md`` or ``docs/fr/vues.md``:** Add content to the to "View page sections" section and the supported section tags
- **``README.md``, ``/en/overview.md``, ``/fr/apercu.md``:** Add an entry to the Structure of the playbook section
- **Author ``.md`` files:** Add sections (as needed) with the ``dpgn-section-[name]`` class
- **``convert-to-data-set.rb``:** Add string to ``guideline_sections`` array then regenerate the dataset
{: .lst-spcd}
<!-- markdownlint-enable MD032 -->
