# Handsontable Meta
Load metadata from a handsontable object.

Load `handsontable-meta.min.js` after Handsontable and pass the initialized object to the meta reader like this:

`var meta = new HandsontableMeta(hot);`

After this, you can read the settings object:

`meta.getSettings()`
```javascript
{
    "colWidths":[50,50,50,55,53],
    "rowHeights":[23,23,23,23]
}
```

Resize a column/row and get the settings again:

`meta.getSettings()`
```javascript
{
    "colWidths":[50,50,229,55,53],
    "rowHeights":[23,86,23,23]
}
```