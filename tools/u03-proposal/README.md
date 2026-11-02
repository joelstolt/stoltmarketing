# Standalone proposal preview

Small, dependency-free adaptation of the visual structure and local example flow
in `app/vvs/WorkflowDemo.jsx` and `app/vvs/vvs.module.css`. It does not import the
production application or connect to its APIs.

The input is a private JSON array kept outside Git. Each item contains `worker`
(must end in `-forslag`), `brand`, `sector`, `headline`, `emphasis`, `intro`,
`benefitTitle`, `benefitText`, `pointOne`, `pointTwo`, `jobs` (array of strings),
`example`, `check`, `followup`, `test`, and `metric`.

Build using `node tools/u03-proposal/build.mjs input.json output-directory`.
Follow the session's shared build-lock rule when running the command.

Verify using `node tools/u03-proposal/verify.mjs input.json output-directory`.
This tests HTTP responses and the inline client interaction in a small DOM stub,
not a browser. It does not claim visual or real browser validation.

Before deploying, confirm the proposed Worker is new and has no production
domain. Use `wrangler deploy --no-bundle --config output-directory/name/wrangler.json`
only for the explicitly authorized separate proposal. Never point this workflow
at a production Worker or the main application configuration.

Each proposal only accepts GET and HEAD. It has no persistence, form submission,
analytics, external client requests or asset requests. It sends no messages.
Every response has an X-Robots-Tag, and robots.txt disallows all crawling.
The page also contains a noindex meta tag and an explicit proposal notice.
Noindex is not access control: do not put private information in an input.

Keep prospect research, recipient addresses and call data in the private task
output directory. Generated company-specific builds and deployment logs are not
part of this Git change.
