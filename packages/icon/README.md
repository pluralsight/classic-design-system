This is currently not working as automatically as we'd like. If there is another large quantity of new icons or old icon adjustments, this will probably want to be improved before then.

## To Produce New Svgs

1. Draw SVGs in Sketch in the same file as the other icons (see Dmitry for file)
1. Export with the [svgo](https://github.com/BohemianCoding/svgo-compressor) plugin. It doesn't seem to make a ton of difference (xlink is used either way, and that's unfortunate)

## To Add New Icon Svgs

1. Name icons \*.icon.svg
1. Put in the `src/svg` directory
1. Add `role="img" and aria-label="<iconId here> icon"` to the root `svg` element of each icon
1. Manually refactor the svg to not use xlink/defs.
1. Run `npm run build` in the `packages/icon` directory (new `*.svg.dist.js` files will generate new icon ids automatically)
1. Manually spot check the look of the new icons in the reference site at `/components/icon`
1. Update the snapshot test
