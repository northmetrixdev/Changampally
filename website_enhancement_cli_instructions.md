# Website Enhancement --- Revised CLI Agent Instructions

## 1. Objective

Enhance the existing website with the following features:

1.  Testimonial carousel on the landing page.
2.  Floating chatbot interface in the bottom-right corner.
3.  Integration of manually supplied social media testimonial links.

**Important:** This is an enhancement to the existing website, not a
redesign. Preserve the existing design system, functionality, and
architecture.

Do not implement an admin dashboard, database, events section, or
dynamic content management system.

------------------------------------------------------------------------

## 2. Initial Project Inspection

Before modifying anything:

1.  Inspect the complete existing project structure.
2.  Identify the frontend framework, backend architecture, routing
    system, and existing components.
3.  Examine the landing page and navbar.
4.  Identify existing typography, color palette, spacing, shadows,
    border radius, animations, and responsive breakpoints.
5.  Identify reusable components and existing design tokens.

Work within the existing architecture. Avoid unnecessary dependencies
and duplicate components.

------------------------------------------------------------------------

## 3. Landing Page --- Testimonial Carousel

### Placement

Insert a new testimonial section immediately above the existing Chief
Physician's Message section.

### Layout

Create one large parent container divided into two internal containers.

**Left container --- Testimonials (approximately 65% width)**

Display a carousel of testimonials from manually supplied social media
links.

Supported platforms:

-   Facebook
-   Instagram
-   YouTube
-   Other supported platforms where applicable.

Each testimonial should support:

-   Platform identification.
-   Author or account name.
-   Profile image, where available.
-   Testimonial text or caption.
-   Original social media post URL.
-   Optional thumbnail or media preview.

### Carousel functionality

-   Previous and next navigation controls.
-   Automatic sliding with a reasonable interval.
-   Pause automatic sliding during user interaction.
-   Smooth transitions.
-   Appropriate loading and fallback states.
-   Responsive layout.

### Right container --- Existing numerical statistics (approximately 35% width)

-   Relocate the existing numerical statistics section to the right
    side.
-   Preserve all current values, labels, and functionality.
-   Do not recreate or unnecessarily modify the statistics components.

### Design requirements

-   Both containers must share one parent container.
-   Strictly reuse the existing website's typography, colors, spacing,
    borders, shadows, and design language.
-   Do not introduce a new visual theme.
-   On mobile devices, stack the two containers vertically.
-   Ensure the carousel remains usable on mobile and tablet devices.

### Testimonial content configuration

Use a dedicated source-code configuration file.

Example: `src/config/testimonials.ts`

``` typescript
export const testimonials = [
  {
    id: "testimonial-1",
    platform: "instagram",
    author: "Example Author",
    text: "Example testimonial",
    postUrl: "PASTE_SOCIAL_MEDIA_LINK_HERE",
    thumbnail: null
  }
];
```

The above is an illustrative structure.

I will manually provide the actual social media links.

Do not invent testimonials, authors, URLs, or review content.

Use official platform embeds where supported. Where embedding is
unavailable, provide a clean fallback card containing the available
manually supplied information and a link to the original post.

Do not assume a social media URL automatically grants access to its
media or content.

------------------------------------------------------------------------

## 4. Navbar --- No Changes

Do not add an Events section.

Preserve the existing navbar exactly as it is.

Do not modify existing navigation items, ordering, styling, or behavior.

------------------------------------------------------------------------

## 5. Floating Chatbot Interface

### Objective

Implement a floating text-based chatbot in the bottom-right corner of
the website.

The chatbot must operate independently of the main website layout and
must not interfere with existing components.

### Launcher

-   Fixed position at the bottom-right corner.
-   Use a clean chatbot icon or launcher.
-   Smooth opening and closing animations.
-   Remain accessible while scrolling.
-   Avoid overlapping important website controls.

### Chat window

Implement a compact popup above the launcher.

Include:

-   Chat header.
-   Conversation area.
-   Text input.
-   Send button.
-   Close button.
-   Loading indicator for future API requests.

Support smooth opening and closing transitions.

Ensure responsiveness on mobile, tablet, and desktop.

### Background watermark

-   Use the existing Changampally logo.
-   Position it as a subtle watermark inside the conversation area.
-   Set opacity to approximately 20%.
-   Preserve the logo's aspect ratio.
-   Ensure message text remains readable.
-   Reuse the correct existing logo asset.

### Input restrictions

The chatbot must be a text-in/text-out interface.

Do not include:

-   Image uploads.
-   Voice input.
-   File attachments.

### Initial unavailable state

Until the API key is configured, do not attempt to generate chatbot
responses.

When a visitor attempts to interact, display:

> The chatbot is currently unavailable. We apologize for the
> inconvenience and appreciate your patience.

Implement this state cleanly without API errors.

------------------------------------------------------------------------

## 6. Chatbot Backend --- Complete RAG Preparation

Prepare the backend for a website-specific Retrieval-Augmented
Generation chatbot.

The only remaining configuration task should be adding the API key to
the environment file.

### Expected architecture

1.  Extract relevant website content.
2.  Clean and preprocess extracted text.
3.  Divide content into manageable chunks.
4.  Generate embeddings using the selected embedding API.
5.  Store the generated index in a suitable persistent file or storage
    format.
6.  Receive visitor questions through the chatbot API.
7.  Generate question embeddings.
8.  Retrieve relevant content using vector similarity.
9.  Send the retrieved context and visitor question to the LLM API.
10. Return the generated response to the frontend.

### Technical requirements

-   Use the existing backend architecture.
-   Keep scraping, preprocessing, chunking, embedding, retrieval, and
    generation logic separate.
-   Create a dedicated chatbot API endpoint.
-   Keep API credentials exclusively on the server.
-   Implement proper error handling and API timeouts.
-   Configure the model to answer only using relevant website
    information.
-   Instruct the model to acknowledge when the website does not contain
    the answer.
-   Do not send the entire website content with every question.
-   Support re-indexing when website content changes.

### Storage restrictions

Do not introduce:

-   PostgreSQL.
-   MySQL.
-   MongoDB.
-   Supabase.
-   Firebase.
-   Vercel Blob.
-   Any other database or external content-management platform.

Use static configuration files and suitable index files where practical.

Do not use Vercel's temporary filesystem as persistent storage.

If persistent vector indexing is required, prepare a
deployment-compatible strategy rather than assuming local file writes
will survive serverless executions.

### Environment configuration

Prepare an appropriate `.env.example`.

For example:

``` env
GEMINI_API_KEY=
CHATBOT_ENABLED=false
```

Use the actual provider-specific environment variable names.

Do not invent API keys or expose secrets in frontend code.

The chatbot must remain in its unavailable state until the credentials
are configured and the feature is explicitly enabled.

------------------------------------------------------------------------

## 7. Content and Data Management

Keep the implementation deliberately simple.

-   Testimonials must be maintained in a source-code configuration file.
-   Social media links must be manually supplied.
-   Do not implement an admin interface.
-   Do not implement content CRUD operations.
-   Do not implement an events system.
-   Do not introduce a database.
-   Do not introduce external storage dependencies.

When testimonial information changes, updating the configuration file
and redeploying the website should be sufficient.

------------------------------------------------------------------------

## 8. Responsive Design

Ensure the new features work across:

-   Desktop.
-   Laptop.
-   iPad and other tablets.
-   Mobile phones.

Pay particular attention to:

-   Testimonial container proportions.
-   Statistics container positioning.
-   Carousel controls.
-   Chatbot popup dimensions.
-   Chat input usability.
-   Floating launcher position.
-   Small-screen scrolling and overflow.

Reuse existing responsive breakpoints.

------------------------------------------------------------------------

## 9. Strict Design Preservation

These instructions are mandatory.

1.  Do not change existing typography.
2.  Do not change the color palette.
3.  Do not redesign the navbar.
4.  Do not modify unrelated landing page sections.
5.  Do not alter the Chief Physician's Message section.
6.  Do not change numerical statistics or their values.
7.  Do not remove existing functionality.
8.  Do not introduce an unrelated design language.
9.  Do not add unnecessary animations.
10. Do not modify existing routes unless required for the chatbot
    backend.

All new components must appear naturally integrated into the existing
website.

------------------------------------------------------------------------

## 10. Execution Workflow

### Phase 1 --- Inspect

Understand the existing project, architecture, and design system.

### Phase 2 --- Testimonials

Implement the shared parent container, testimonial carousel, and
relocated numerical statistics.

### Phase 3 --- Chatbot UI

Implement the floating launcher, popup, watermark, message interface,
and unavailable state.

### Phase 4 --- RAG Backend

Prepare the website-specific chatbot pipeline and API integration.

### Phase 5 --- Integration

Connect the frontend to the backend and implement graceful handling of
missing API credentials.

### Phase 6 --- Validation

Verify:

-   Existing website functionality remains intact.
-   Testimonial links work.
-   Social media embeds have appropriate fallbacks.
-   Carousel navigation works.
-   Automatic sliding works.
-   Numerical statistics remain unchanged.
-   Chatbot opens and closes correctly.
-   Logo watermark is visible at the specified opacity.
-   Unavailable message is displayed correctly.
-   No API key is exposed to the browser.
-   No database or external content-management dependency has been
    introduced.
-   Desktop and mobile layouts work correctly.
-   Production build succeeds.

------------------------------------------------------------------------

## 11. Final Deliverables

Provide:

1.  Updated existing website.
2.  Testimonial carousel.
3.  Relocated numerical statistics section.
4.  Floating chatbot interface.
5.  Changampally logo watermark.
6.  Complete API-ready RAG chatbot backend.
7.  Testimonial configuration file for manually supplied links.
8.  Environment variable example.
9.  Deployment instructions.

### Final Execution Rule

Work directly within the existing project.

Do not rebuild the website from scratch.

Do not add an admin dashboard, Events section, database, or external
storage system.

Prioritize minimal changes, existing design preservation, deployment
compatibility, and functional correctness.

The final result should feel like a natural extension of the existing
website rather than a redesigned website.

------------------------------------------------------------------------

## Deployment-specific caution

Because the website is hosted on Vercel, do not assume that runtime
writes to local JSON or vector-index files will persist between
serverless executions. For the initial implementation, keep testimonials
in source code and use a static, build-time chatbot knowledge index.
This avoids introducing external storage while keeping deployment
reliable.
