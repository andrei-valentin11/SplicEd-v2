# SplicEd verified module media guide

The revised site intentionally does **not** use external YouTube tutorials. Each module now has two local media slots:

1. `images/modules/<module>-actual.jpg` — researchers' own verified photograph of a **disconnected training sample**, preferably held by hand so learners can compare scale and real conductor appearance with the schematic illustration.
2. `media/<module>-demo.gif` — a **10–15 second close-up looping demonstration** recorded by the researchers or instructor. Keep the camera fixed, show one major action at a time, and avoid energized conductors.

Required filenames:

- `rat-tail-actual.jpg` / `rat-tail-demo.gif`
- `western-short-actual.jpg` / `western-short-demo.gif`
- `western-long-actual.jpg` / `western-long-demo.gif`
- `plain-tap-actual.jpg` / `plain-tap-demo.gif`
- `knotted-tap-actual.jpg` / `knotted-tap-demo.gif`
- `aerial-tap-actual.jpg` / `aerial-tap-demo.gif`
- `fixture-joint-actual.jpg` / `fixture-joint-demo.gif`
- `cross-joint-actual.jpg` / `cross-joint-demo.gif`

## Recording checklist
- Use disconnected practice wires only.
- Neutral, uncluttered background.
- Keep hands visible but do not show faces unless consented.
- Show the exact step used in the validated class procedure.
- 10–15 seconds, loop cleanly, close-up enough to see the conductor movement.
- Compress before deployment; aim for a few MB or less per GIF. If GIF size becomes excessive, use local MP4/WebM and update the `<img>` media renderer to `<video>`.
- Photograph and GIF should use the same wire/joint configuration where possible.

If a media file is missing, SplicEd automatically shows a labeled placeholder instead of a broken image.
