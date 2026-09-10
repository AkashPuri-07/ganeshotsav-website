# Daily Updates

One file per festival day: `day-1.json`, `day-2.json`, ... `day-11.json`.

See `_template.json` for the fields each file needs. `day` should match the
file name's number. `photos` lists filenames only (not full paths) — the
matching image files go in `public/daily-updates/day-N/`.

The site reads whatever `day-N.json` files exist here and sorts them latest
first automatically, so days can be added one at a time during the festival.
